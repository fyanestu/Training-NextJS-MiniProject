import Link from "next/link";
import IndexNavbar from "@app/src/components/Navbars/IndexNavbar";

/**
 * @param {Object} props
 * @param {Object} props.pagination
 * @param {Number} props.pagination.limit
 * @param {Number} props.pagination.skip
 * @param {Number} props.pagination.total
 * @param {Array} props.products
 * @returns {JSX.Element}
 * @constructor
 */
const Products = (props) => {
  let { products } = props;
  return (
    <>
      <IndexNavbar />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          {Array.isArray(data) && data.length > 0
            ? products.map((item) => (
                <div className="w-full">
                  <Link
                    href={`/products-ssr/${item.id}`}
                    className="text-blue-500"
                  >
                    {item.title}
                  </Link>
                  <p>{item.price}</p>
                </div>
              ))
            : "is empty"}
        </div>
      </section>
    </>
  );
};

export default Products;

// Fungsi diatas berjalan disi client, sedangkan getStaticProps akan berjalan di sisi server
export const getServerSideProps = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  // console.log('data', data);
  return {
    props: {
      products: data,
    },
  };
};
