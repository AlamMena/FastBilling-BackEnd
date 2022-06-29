import styles from "../ProductsComponents/Product_List.module.css";

const headers = ["No", "Imagen","Nombre", "Precio", "Costo","Estado","Ventas","Ganancias"];

const Table = () => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {headers.map((header) => {
            return <th className={styles.table_header}>{header}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={styles.table_data}> 001</td>
          <td className={styles.table_data}>
            <img
              className={styles.table__image}
              src="https://cdn.shopify.com/s/files/1/1415/3994/products/PXL_20211014_144743088_1100x.jpg?v=1638575773"
            ></img>
          </td>
          <td className={styles.table_data}>T-SHIRT BLACK LIVES MATTERS</td>
          <td className={styles.table_data}>$25.89</td>
          <td className={styles.table_data}> $10.92</td>
          <td className={styles.table_data}>
            <span className={styles.table__status}>Activo</span>
          </td>
          <td className={styles.table_data}> 10</td>
          <td className={styles.table_data}>$821.32</td>
        </tr>
        <tr>
          <td className={styles.table_data}> 001</td>
          <td className={styles.table_data}>
            <img
              className={styles.table__image}
              src="https://cdn.shopify.com/s/files/1/1415/3994/products/PXL_20211014_144743088_1100x.jpg?v=1638575773"
            ></img>
          </td>
          <td className={styles.table_data}>T-SHIRT BLACK LIVES MATTERS</td>
          <td className={styles.table_data}>$25.89</td>
          <td className={styles.table_data}> $10.92</td>
          <td className={styles.table_data}>
            <span className={styles.table__status}>Activo</span>
          </td>
          <td className={styles.table_data}> 10</td>
          <td className={styles.table_data}>$821.32</td>
        </tr>{" "}
        <tr>
          <td className={styles.table_data}> 001</td>
          <td className={styles.table_data}>
            <img
              className={styles.table__image}
              src="https://cdn.shopify.com/s/files/1/1415/3994/products/PXL_20211014_144743088_1100x.jpg?v=1638575773"
            ></img>
          </td>
          <td className={styles.table_data}>T-SHIRT BLACK LIVES MATTERS</td>
          <td className={styles.table_data}>$25.89</td>
          <td className={styles.table_data}> $10.92</td>
          <td className={styles.table_data}>
            <span className={styles.table__status}>Activo</span>
          </td>
          <td className={styles.table_data}> 10</td>
          <td className={styles.table_data}>$821.32</td>
        </tr>{" "}
        <tr>
          <td className={styles.table_data}> 001</td>
          <td className={styles.table_data}>
            <img
              className={styles.table__image}
              src="https://cdn.shopify.com/s/files/1/1415/3994/products/PXL_20211014_144743088_1100x.jpg?v=1638575773"
            ></img>
          </td>
          <td className={styles.table_data}>
            <span className={ styles.table__name}>T-SHIRT BLACK LIVES MATTERS</span>
          </td>
          <td className={styles.table_data}>$25.89</td>
          <td className={styles.table_data}> $10.92</td>
          <td className={styles.table_data}>
            <span className={styles.table__status}>Activo</span>
          </td>
          <td className={styles.table_data}> 10</td>
          <td className={styles.table_data}>$821.32</td>
        </tr>
      </tbody>
    </table>
  );
};

export default function ProductList() {
  return (<div className={ styles.product_list}>
    <Table/>
  </div>)
  
}
