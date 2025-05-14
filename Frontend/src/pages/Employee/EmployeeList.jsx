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

function EmployeeList() {
  const employees = useSelector((state) => state.employees);

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
    data: employees,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });
  return (
    <section className="employeeList">
      <h1>All Employees</h1>

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
          {table.getCoreRowModel().rows.map((row) => (
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
      <Link to="/employee" className="employee">
        Employee
      </Link>
    </section>
  );
}

export default EmployeeList;
