import { Link } from "react-router-dom";
import "./EmployeeList.scss";
import { FaSortUp, FaSortDown } from "react-icons/fa";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  flexRender,
  getSortedRowModel,
} from "@tanstack/react-table";
import { useSelector } from "react-redux";
import employeeFromJson from "../../data/employee.json";
import { useState } from "react";
import { useMemo } from "react";

function EmployeeList() {
  const employeeFromRedux = useSelector((state) => state.employees);
  // useMemo mémorise la liste sauf si employeeFromRedux change
  const allEmployees = useMemo(
    () => [...employeeFromJson, ...employeeFromRedux],
    [employeeFromRedux]
  );

  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);

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
      sorting,
    },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    globalFilterFn: "includesString",
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });
  return (
    <section className="employeeList">
      <h1>All Employees</h1>
      <div className="headerEmployee">
        <div className="showSelect">
          <label htmlFor="selectShow" className="showLabel">
            Show
          </label>
          <select
            id="selectShow"
            className="selectShow"
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 25, 50, 100].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
          <span className="showLabel">entries</span>
        </div>
        <div className="search">
          <label htmlFor="searchInput">Search:</label>
          <input
            id="searchInput"
            type="text"
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
        </div>
      </div>
      <div className="tableContainer">
        <table>
          {/* columns */}
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    <span
                      style={{
                        marginLeft: "12px",
                        color: " #000",
                      }}
                    >
                      <FaSortUp
                        onClick={(e) => {
                          e.stopPropagation();
                          header.column.getIsSorted() === "asc"
                            ? header.column.clearSorting()
                            : header.column.toggleSorting(false);
                        }}
                        style={{
                          opacity:
                            header.column.getIsSorted() === "asc" ? 1 : 0.3,
                        }}
                      />
                      <FaSortDown
                        onClick={(e) => {
                          e.stopPropagation();
                          header.column.getIsSorted() === "desc"
                            ? header.column.clearSorting()
                            : header.column.toggleSorting(true);
                        }}
                        style={{
                          opacity:
                            header.column.getIsSorted() === "desc" ? 1 : 0.3,
                        }}
                      />
                    </span>
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
      </div>
      <div className="pagination">
        <div className="showingEntries">
          Showing {table.getRowModel().rows.length.toLocaleString()} of{" "}
          {table.getRowCount().toLocaleString()} entries
        </div>
        <div className="buttonPag">
          <button
            className="paginationBtn"
            onClick={() => table.firstPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"<<"}
          </button>
          <button
            className="paginationBtn"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"<"}
          </button>
          <button
            className="paginationBtn"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {">"}
          </button>
          <button
            className="paginationBtn"
            onClick={() => table.lastPage()}
            disabled={!table.getCanNextPage()}
          >
            {">>"}
          </button>
        </div>
      </div>

      <Link to="/employee" className="employee">
        Go back to Form
      </Link>
    </section>
  );
}

export default EmployeeList;
