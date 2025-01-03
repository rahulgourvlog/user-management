"use client"
import React from "react";
import UserTable from "../../../components/userTable";

// `use` is used to resolve async params
export default function PaginatedUsersPage({ params }) {
  const resolvedParams = React.use(params); // Resolve the async params
  const page = resolvedParams?.page;

  const currentPage = parseInt(page, 10) || 1; // Default to page 1 if invalid
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">User Management - Page {currentPage}</h1>
      <UserTable page={currentPage} />
    </div>
  );
}