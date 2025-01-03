import { useQuery } from "@tanstack/react-query";

const fetchUsers = async (page) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=5`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

export const useUsers = (page) => {
    return useQuery({
      queryKey: ["users", page],
      queryFn: () => fetchUsers(page),
      keepPreviousData: true, 
    });
  };
