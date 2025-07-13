import ProductItem from "./product-item";

export default function ProductList(props) {
  const { productsData, setStateModal } = props;

  return (
    <div className="grid grid-cols-3 gap-5">
      {productsData.map((product) => (
        <ProductItem 
          key={product.id} 
          product={product} 
          setStateModal={setStateModal}
        />
      ))}
    </div>
  );
}
