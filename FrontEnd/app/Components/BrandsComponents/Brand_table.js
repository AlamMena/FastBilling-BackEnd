import React from "react";
import { useTable, useGlobalFilter, useAsyncDebounce } from "react-table";
import styles from "../Globals/Styling/Table.module.css";
import filterstyles from "../Globals/Styling/GlobalFilter.module.css";
import {
  AiOutlinePlus,
  AiOutlineDelete,
  AiOutlineArrowDown,
  AiOutlineSearch,
} from "react-icons/ai";
import { useState } from "react";

const GlobalFilter = ({ setGlobalFilter, globalFilter }) => {
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <div className={filterstyles.searchbar_container}>
      <AiOutlineSearch className="mr-2 text-neutral-400" />
      <input
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder="Search bar"
        className={filterstyles.searchbar}
        type="search"
      />
    </div>
  );
};

export default function BrandTable({
  columns,
  data,
  setObject,
  deleteObject,
  setPopUpIsOpen,
}) {
  const tableInstance = useTable({ columns, data }, useGlobalFilter);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance;

  const handleSelect = (e) => {
    setObject(e.original);
    setPopUpIsOpen(true);
  };
  const title = "Tabla de Marcas";

  return (
    <>
      {/* Search Bar */}
      <div className={filterstyles.container}>
        <div className="flex flex-col w-full">
          <h1 className="font-semibold text-sm mb-2 ml-2">
            Que estas Busando?
          </h1>
          <GlobalFilter
            setGlobalFilter={setGlobalFilter}
            globalFilter={state.globalFilter}
          />
        </div>
        {/* Elements  */}
        <div className={filterstyles.elements_container}>
          <div className={filterstyles.elements}>
            <h1 className={filterstyles.element_title}>Categoria</h1>
            <div className="relative">
              <AiOutlineArrowDown className={filterstyles.arrow_icon} />
              <input
                placeholder="All"
                className={filterstyles.filter}
                type="search"
              />
            </div>
          </div>
          <div className={filterstyles.elements}>
            <h1 className={filterstyles.element_title}>Estatus</h1>
            <div className="relative">
              <AiOutlineArrowDown className={filterstyles.arrow_icon} />
              <input
                placeholder="All"
                className={filterstyles.filter}
                type="search"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white px-6 py-8 rounded-xl ">
        <div className=" flex justify-between items-center px-3">
          <div className="text-lg font-semibold tracking-wide">{title}</div>
          <div className="text-lg">
            <AiOutlinePlus
              className="cursor-pointer"
              onClick={setPopUpIsOpen}
            />
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
                      onClick={(e) => {
                        e.stopPropagation();
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
    </>
  );
}
