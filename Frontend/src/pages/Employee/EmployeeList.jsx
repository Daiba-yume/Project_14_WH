import { Link } from "react-router-dom";
import "./EmployeeList.scss";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useSelector } from "react-redux";
import employeeFromJson from "../../data/employee.json";
import { useState } from "react";

function EmployeeList() {
  const employeeFromRedux = useSelector((state) => state.employees);
  const allEmployees = [...employeeFromJson, employeeFromRedux];

  const [globalFilter, setGlobalFilter] = useState("");

  const columns = [
    { accessorKey: "firstName", header: "First Name" },
    { accessorKey: "lastName", header: "Last Name" },
    { accessorKey: "startDate", header: "Start Date" },
    { accessorKey: "department", header: "Department" },
    { accessorKey: "dateOfBirth", header: "Date of Birth" },
    { accessorKey: "street", header: "Street" },
    { accessorKey: "city", header: "City" },
    { accessorKey: "state", header: "State" },
    { accessorKey: "zipCode", header: "Zip Code" },
  ];

  const table = useReactTable({
    data: allEmployees,
    columns,
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: "includesString",
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });
  return (
    <section className="employeeList">
      <h1>All Employees</h1>
      <div className="search">
        <label>Search:</label>
        <input
          type="text"
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
      </div>
      <table>
        {/* columns */}
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {/* rows */}
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getAllCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => table.previousPage()}>Previous</button>
        <span>
          Page {table.getState().pagination.pageIndex + 1} of
          {table.getPageCount()}
        </span>
        <button onClick={() => table.nextPage()}>Next</button>
      </div>
      <Link to="/employee" className="employee">
        Go back to Form
      </Link>
    </section>
  );
}

export default EmployeeList;
