import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import IndexNavbar from "@app/src/components/Navbars/IndexNavbar";

const ProductDetail = () => {
  const router = useRouter();
  const { productId } = router.query;

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    const getProductById = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      const data = await response.json();

      setName(data?.title);
      setPrice(data?.price);
    };
    getProductById();
  }, [productId]);

  return (
    <>
      <IndexNavbar />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <h1 className="text-xl mb-1 font-semibold w-full">{name}</h1>
          <p>{price}</p>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
