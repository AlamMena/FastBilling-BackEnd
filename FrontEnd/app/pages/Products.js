import ProductList from "../Components/ProductsComponents/Product_List";

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

//   return <DefaultTable columns={columns} data={data} />;
    return <ProductPopUp/>
}
