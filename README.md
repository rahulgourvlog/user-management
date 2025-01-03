# user-management
user-management app made by next js

user-management app made by next js

Project Overview
This project displays user data fetched from a public API, allowing users to sort, filter, search, and paginate the data in a table format. It uses TanStack Query for data fetching and caching, enabling efficient management of server data.

Features
Data Fetching: Fetches user data from a public API using TanStack Query (@tanstack/react-query) to handle data fetching, caching, and error handling.
Sorting: Users can click on table column headers (name, email, etc.) to sort data in ascending or descending order.
Filtering: Each column (e.g., name, email) has its own filtering input to narrow down the data based on user input.
Global Search: A global search input filters all columns simultaneously.
Pagination: Data is paginated and displayed with navigation for page changes. The application uses Next.js dynamic routing to enable pagination with different page URLs.
Setup & Installation
Clone the repository.
Run npm install to install dependencies.
Start the development server with npm run dev.
Challenges Faced Using TanStack Query
Handling Pagination: Dynamically fetching paginated data required careful use of useQuery with query keys and parameters for page number tracking.
Caching: Ensuring that the data was cached efficiently without causing issues with pagination and updates to the data on page reloads.
Error Handling: Managing errors from API calls effectively with retry logic and proper error states to ensure a smooth user experience.
Complex State Management: Handling global search and column-specific filters while also managing pagination and sorting state proved challenging.
Async State Updates: Ensuring that sorting, filtering, and pagination correctly trigger updates to the displayed data without causing re-fetching or performance issues.


