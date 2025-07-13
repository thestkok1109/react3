import { useState } from "react";
import ProductList from "./product-list";
import Modal from "./modal";
import data from "./data.json";

export default function ShoesStore() {
  const [productDetail, setProductDetail] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const setStateModal = (item) => {
    setProductDetail(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setProductDetail(null);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-5xl text-center mb-5">Shopping Shoes</h1>
      <ProductList productsData={data} setStateModal={setStateModal} />
      <Modal content={productDetail} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
