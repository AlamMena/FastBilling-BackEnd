import React, { useMemo } from "react";
import { useTable, Table, TableHead, TableRow, TableHeader } from "react-table";

export default function ReactTable() {
  const data = useMemo(() => [
    { id: 1, name: "Alexito", description: "Alexito es el mejor" },
  ]);

  const columns = useMemo(() => [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "Nombre",
      accessor: "nombre",
    },

    {
      Header: "Precio",
      accessor: "precio",
    },
  ]);

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, row, prepareRow } =
    tableInstance;

  return (
    <Table {...getTableProps()}>
      <TableHead>
        {headerGroups.map((headerGroups) => (
          <TableRow {...headerGroups.getHeaderGroupProps()}>
            {headerGroups.map((columns) => (
              <TableHeader {...columns.getHeaderProps()}>
                {columns.render("Header")}
              </TableHeader>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return row.cells.map((cell, index) => (
            <TableData {...cell.getCellProps()}>
              {cell.render("Cell")}
            </TableData>
          ));
        })}
      </TableBody>
    </Table>
  );
}
