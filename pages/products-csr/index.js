import { useState, useEffect } from "react";
import Link from "next/link";
import IndexNavbar from "@app/src/components/Navbars/IndexNavbar";
import axios from "axios";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useState({
    page: 1,
    limit: 10,
  });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      // const response = await fetch("https://fakestoreapi.com/products");
      // const data = await response.json();
      // setProducts(data);

      setLoading(true);
      axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          if (response?.data && Array.isArray(response?.data)) {
            setProducts([...response?.data]);
          }

          setLoading(false);
        })
        .catch((err) => {
          setProducts([]);
          setLoading(false);
        });
    };

    getProducts();
  }, []);

  return (
    <>
      <IndexNavbar />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          {loading ? (
            <p>Loading...</p>
          ) : Array.isArray(products) && products.length > 0 ? (
            products.map((item) => {
              return (
                <div className="w-full">
                  <Link
                    href={`/products-csr/${item.id}`}
                    className="text-blue-500"
                  >
                    {item.title}
                  </Link>
                  <p>{item.price}</p>
                </div>
              );
            })
          ) : (
            "is empty"
          )}
        </div>
      </section>
    </>
  );
};

export default Products;
