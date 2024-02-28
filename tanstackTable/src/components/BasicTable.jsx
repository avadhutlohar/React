import React, { useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import mData from "../../data.json";

const BasicTable = () => {
  const data = useMemo(() => mData, []);
  /** @type import('@tanstack/react-table').ColumnDef<any> */
  const columns = [
    {
      header: "ID",
      accessor: "id",
    },
    {
      header: "First Name",
      accessor: "first_name",
    },
    {
      header: "Last Name",
      accessor: "last_name",
    },
    {
      header: "Email",
      accessor: "email",
    },
    {
      header: "Gender",
      accessor: "gender",
    },
    {
      header: "Date of Birth",
      accessor: "dob",
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={headerGroup.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="border-2">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-2">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}

          
        </tbody>
      </table>
    </div>
  );
};

export default BasicTable;
