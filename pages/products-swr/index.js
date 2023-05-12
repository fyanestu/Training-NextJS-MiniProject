import useSWR from "swr";
import IndexNavbar from "@app/src/components/Navbars/IndexNavbar";
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Products = () => {
  const { data, error } = useSWR("https://fakestoreapi.com/products", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <IndexNavbar />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          {data.map((item) => (
            <div className="w-full">
              <Link href={`/products-swr/${item.id}`} className="text-blue-500">
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
