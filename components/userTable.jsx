import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  filterFns,
} from "@tanstack/react-table";
import { useUsers } from "../app/hooks/useUsers";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UserTable({ page }) {
  const router = useRouter();
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);
  const [currentPage, setCurrentPage] = useState(page || 1);

  const { data, isLoading, isError } = useUsers(currentPage);

  const handleNext = () => {
    if (data && data.length > 0) {
        const nextPage = currentPage + 1;
        setCurrentPage(nextPage);
        router.push(`/users/${nextPage}`);
      }
  };

  const handlePrevious = () => {
    if (currentPage > 1 && data && data.length > 0) { 
        const prevPage = Math.max(currentPage - 1, 1);
        setCurrentPage(prevPage);
        router.push(`/users/${prevPage}`);
      }
  };

  const columns = [
    {
      accessorKey: "name",
      header: "Name",
      filterFn: filterFns.includesString,
      enableColumnFilter: true,
    },
    {
      accessorKey: "email",
      header: "Email",
      filterFn: filterFns.includesString,
      enableColumnFilter: true,
    },
    {
      accessorKey: "phone",
      header: "Phone",
      filterFn: filterFns.includesString,
      enableColumnFilter: true,
    },
    
    {
      accessorKey: "website",
      header: "Website",
      cell: ({ row }) => (
        <a href={`https://${row.original.website}`} target="_blank" rel="noopener noreferrer">
          {row.original.website}
        </a>
      ),
      enableColumnFilter: false,
    },
    {
        header: "Address",
        accessorFn: (row) => `${row.address?.street}, ${row.address?.suite}, ${row.address?.city} - ${row.address?.zipcode}`,
        cell: ({ row }) => {
          const address = row.original.address;
          if (!address) {
            return "No Address Info";
          }
          return (
            <div>
              {address.street}, {address.suite}, {address.city} - {address.zipcode}
            </div>
          );
        },
        enableColumnFilter: false,
      },
      {
        header: "Company",
        accessorFn: (row) => `${row.company?.name}, ${row.company?.catchPhrase}, ${row.company?.bs}` , // 
        cell: ({ row }) => {
          const company = row.original.company;
          if (!company) {
            return "No Company Info";
          }
          return (
            <div>
              <strong>{company.name}</strong>
              <br />
              <em>{company.catchPhrase}</em>
              <br />
              <span>{company.bs}</span>
            </div>
          );
        },
        enableColumnFilter: false, 
      }
      
      
      
      
   
      
  ];
  
  

  const table = useReactTable({
    data: data || [],
    columns,
    state: { globalFilter, sorting },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching data.</p>;

  return (
    <div className="p-4">
      {/* Global Search Input */}
      <Input
        placeholder="Global Search..."
        value={globalFilter || ""}
        onChange={(e) => setGlobalFilter(e.target.value)}
        className="mb-4"
      />
      {/* Table */}
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="border border-gray-200 p-2">
                  {header.isPlaceholder ? null : (
                    <div>
                      <div
                        className="cursor-pointer"
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {header.column.columnDef.header}
                        {header.column.getIsSorted()
                          ? header.column.getIsSorted() === "desc"
                            ? " 🔽"
                            : " 🔼"
                          : null}
                      </div>
                      {header.column.getCanFilter() && (
                        <Input
                          value={header.column.getFilterValue() || ""}
                          onChange={(e) =>
                            header.column.setFilterValue(e.target.value)
                          }
                          placeholder={`Filter ${header.column.columnDef.header}`}
                          className="mt-2 w-full"
                        />
                      )}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border border-gray-200 p-2">
                  {cell.getValue()}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="mt-4 flex justify-between">
      <Button 
    onClick={handlePrevious} 
    disabled={currentPage <= 1 || !data || data.length === 0}
    className={(currentPage <= 1 || !data || data.length === 0) ? "opacity-50 cursor-not-allowed" : ""}
  >
    Previous
  </Button>
  <Button 
    onClick={handleNext} 
    disabled={!data || data.length === 0}
    className={(!data || data.length === 0) ? "opacity-50 cursor-not-allowed" : ""}
  >
    Next
  </Button>
      </div>
    </div>
  );
}
