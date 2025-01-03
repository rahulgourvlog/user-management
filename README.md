# user-management
user-management app made by next js

# User Table with TanStack Query, Sorting, Filtering, and Pagination

## Project Overview
This project displays user data fetched from a public API, allowing users to sort, filter, search, and paginate the data in a table format. It uses **TanStack Query** for data fetching and caching, enabling efficient management of server data.

## Features
1. **Data Fetching**: Fetches user data from a public API using TanStack Query (`@tanstack/react-query`) to handle data fetching, caching, and error handling.
2. **Sorting**: Users can click on table column headers (name, email, etc.) to sort data in ascending or descending order.
3. **Filtering**: Each column (e.g., name, email) has its own filtering input to narrow down the data based on user input.
4. **Global Search**: A global search input filters all columns simultaneously.
5. **Pagination**: Data is paginated and displayed with navigation for page changes. The application uses **Next.js dynamic routing** to enable pagination with different page URLs.

## Setup & Installation
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Start the development server with `npm run dev`.

## Challenges Faced Using TanStack Query
1. **Handling Pagination**: Dynamically fetching paginated data required careful use of `useQuery` with query keys and parameters for page number tracking.
2. **Caching**: Ensuring that the data was cached efficiently without causing issues with pagination and updates to the data on page reloads.
3. **Error Handling**: Managing errors from API calls effectively with retry logic and proper error states to ensure a smooth user experience.
4. **Complex State Management**: Handling global search and column-specific filters while also managing pagination and sorting state proved challenging.
5. **Async State Updates**: Ensuring that sorting, filtering, and pagination correctly trigger updates to the displayed data without causing re-fetching or performance issues.


