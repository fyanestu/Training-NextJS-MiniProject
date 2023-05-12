import Link from "next/link";
import IndexNavbar from "@app/src/components/Navbars/IndexNavbar";

const Products = ({ products }) => {
  return (
    <>
      <IndexNavbar />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          {products.map((item) => (
            <div className="w-full">
              <Link
                href={`/products-ssg-isr/${item.id}`}
                className="text-blue-500"
              >
                {item.title}
              </Link>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;

// Fungsi diatas berjalan disi client, sedangkan getStaticProps akan berjalan di sisi server
export const getStaticProps = async () => {
  const response = await fetch("https://fakestoreapi.com/products?limit=5");
  const data = await response.json();
  console.log("data", data);
  return {
    props: {
      products: data,
    },
    revalidate: 1,
  };
};
