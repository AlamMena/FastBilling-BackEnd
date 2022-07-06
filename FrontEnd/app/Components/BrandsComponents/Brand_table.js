import React from "react";
import { useTable } from "react-table";
import styles from "../Globals/Styling/Table.module.css";
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
export default function BrandTable({
  columns,
  data,
  setObject,
  deleteObject,
  setPopUpIsOpen,
}) {
  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  const handleSelect = (e) => {
    setObject(e.original);
    setPopUpIsOpen(true);
  };
  const title = "Tabla de Marcas";

  return (
    <div className="bg-white mx-3 p-3 rounded-xl ">
      <div className=" flex justify-between items-center px-3">
        <div className="text-lg font-semibold tracking-wide">{title}</div>
        <div className="text-lg">
          <AiOutlinePlus className="cursor-pointer" onClick={setPopUpIsOpen} />
        </div>
      </div>
      <div className=" overflow-auto">
        <table {...getTableProps()} className={styles.table}>
          <thead className={styles.table_head}>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} className="p">
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className={styles.table_head_th}
                  >
                    {column.render("Header")}
                  </th>
                ))}
                <th className={styles.table_head_th}>Edit</th>
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className={styles.table_body_tr}
                  onClick={() => {
                    handleSelect(row);
                  }}
                >
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className={styles.table_body_td}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                  <td
                    className={styles.table_body_td}
                    onClick={() => {
                      deleteObject(row.original._id);
                    }}
                  >
                    <AiOutlineDelete />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}