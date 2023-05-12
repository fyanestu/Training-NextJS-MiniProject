import useSWR from "swr";
import { useRouter } from "next/router";
import IndexNavbar from "@app/src/components/Navbars/IndexNavbar";

// const fetcher = (...args) => fetch(...args).then(res => res.json())
const fetcher = async (url) => {
  const res = await fetch(url);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

const ProductDetail = () => {
  const router = useRouter();
  const { productId } = router.query;
  let url = "";
  if (productId) {
    url = `https://fakestoreapi.com/products/${productId}`;
  }
  console.log("Detail productId", productId);

  const { data, error } = useSWR(url, fetcher);
  console.log("error", error);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <IndexNavbar />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <h1 className="text-xl mb-1 font-semibold w-full">{data.title}</h1>
          <p>{data.price}</p>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
