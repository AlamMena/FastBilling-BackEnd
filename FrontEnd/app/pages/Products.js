import ProductPopUp from "../Components/ProductsComponents/Product_PopUp";
import { useTable } from "react-table";
import { useMemo } from "react";

const DefaultTable = ({ columns, data }) => {
  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <table {...getTableProps()} className=" max-w-xl outline outline-1 mt-20">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} className="px-2">{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()} className="px-2">{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default function Products() {
  const data = useMemo(() => [
    {
      Name: "Alam",
      LastName: "Beato",
      Age: "21",
    },
    {
      Name: "Alex",
      LastName: "Mezquita",
      Age: "24",
    },
  ]);

  const columns = useMemo(() => [
    {
      Header: "Name",
      accessor: "Name",
    },
    {
      Header: "Age",
      accessor: "Age",
    },
    {
      Header: "LastName",
      accessor: "LastName",
    },
  ]);

  return <DefaultTable columns={columns} data={data} />;
}
