import { useTable } from "react-table";
import { useMemo } from "react";
import styles from "../Tables/table.module.css";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";

const DefaultTable = ({ columns, data }) => {
  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <table {...getTableProps()} className={styles.table}>
      <thead className={styles.table_head}>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} className="p">
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} className={styles.table_head_th}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className={styles.table_body_tr}>
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps()} className={styles.table_body_td}>
                    {cell.render("Cell")}
                  </td>
                );
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
      No: 1,
      quantity: 12,
      productName: "Martillo",
      status: "21",
      editar: <AiOutlineDelete />,
    },
    {
      No: 2,
      productName: "Shampoo",
      quantity: 800,
      status: "Activo",
      editar: <AiOutlineDelete />,
    },
    {
      No: 2,
      productName: "Shampoo",
      quantity: 800,
      status: "Activo",
      editar: <AiOutlineDelete />,
    },
    {
      No: 2,
      productName: "Shampoo",
      quantity: 800,
      status: "Activo",
      editar: <AiOutlineDelete />,
    },
    {
      No: 2,
      productName: "Shampoo",
      quantity: 800,
      status: "Activo",
      editar: <AiOutlineDelete />,
    },
  ]);

  const columns = useMemo(() => [
    {
      Header: "No",
      accessor: "No",
    },
    {
      Header: "Nombre del producto",
      accessor: "productName",
    },
    {
      Header: "Cantidad",
      accessor: "quantity",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Editar",
      accessor: "editar",
    },
  ]);

  const title = "Tabla";

  return (
    <div className="bg-white mx-3 p-3 rounded-xl ">
      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold tracking-wide">{title}</div>
        <div className="text-lg">
          <AiOutlinePlus />
        </div>
      </div>
      <div className=" overflow-auto">
        <DefaultTable columns={columns} data={data} />
      </div>
    </div>
  );
}
