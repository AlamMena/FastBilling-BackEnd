import {
  useTable,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
} from "react-table";
import filterstyles from "../Globals/Styling/GlobalFilter.module.css";
import { useMemo, useState } from "react";
import styles from "../Globals/Styling/Table.module.css";
import buttonStyles from "../Globals/Styling/Button.module.css";

import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineDelete,
  AiOutlinePlus,
  AiOutlineSearch,
} from "react-icons/ai";

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
export default function Products({
  columns,
  data,
  setObject,
  deleteObject,
  setPopUpIsOpen,
}) {
  const tableInstance = useTable({ columns, data }, useGlobalFilter, useSortBy);
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
  const title = "Lista de productos ";

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

      <div className="bg-white px-6 py-8 rounded-xl ">
        <div className=" flex justify-between items-center px-3">
          <div className="text-lg font-semibold tracking-wide">{title}</div>
          <div className="text-lg">
            <button
              value="Crear"
              onClick={setPopUpIsOpen}
              className={buttonStyles.create_button}
            >
              Crear producto
            </button>
          </div>
        </div>
        <div className=" overflow-auto">
          <table {...getTableProps()} className={styles.table}>
            <thead className={styles.table_head}>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()} className="p">
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className={styles.table_head_th}
                    >
                      <div className="flex space-x-1 items-center">
                        <span>{column.render("Header")}</span>
                        <span>
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <AiOutlineArrowDown />
                            ) : (
                              <AiOutlineArrowUp />
                            )
                          ) : (
                            ""
                          )}
                        </span>
                      </div>
                    </th>
                  ))}
                  <th className={styles.table_head_th}>Edit</th>
                </tr>
              ))}
            </thead>

            <tbody {...getTableBodyProps()}>
              {data &&
                rows.map((row, i) => {
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
                        if (cell.column.Header === "Image") {
                          return (
                            <td
                              {...cell.getCellProps()}
                              className={styles.table_body_td}
                            >
                              <img
                                src={!row.original.images[0] ? 'https://us.123rf.com/450wm/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016/167492439-no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-comin.jpg?ver=6' : row.original.images[0]}
                                className="w-12 h-12 rounded-lg"
                              />
                            </td>
                          );
                        }
                        if (cell.column.Header === "Estatus") {
                          return (
                            <td
                              {...cell.getCellProps()}
                              className={styles.table_body_td}
                            >
                              <span
                                className={`w-12 h-12 rounded-full ${row.original.IsDeleted
                                  ? "bg-red-300"
                                  : "bg-green-200"
                                  } px-4 py-2`}
                              >
                                {!row.original.IsDeleted
                                  ? "active"
                                  : "inactivo"}
                              </span>
                            </td>
                          );
                        }
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
        {data.length < 1 && (
          <h1 className="text-lg text-neutral-400 flex w-full justify-center my-4">
            No hay datos!
          </h1>
        )}
      </div>
    </>
  );
}
