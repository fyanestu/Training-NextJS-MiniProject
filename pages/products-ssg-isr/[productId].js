import IndexNavbar from "@app/src/components/Navbars/IndexNavbar";
import { useRouter } from "next/router";

const ProductDetail = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <IndexNavbar />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <h1 className="text-xl mb-1 font-semibold w-full">{product.title}</h1>
          <p>{product.price}</p>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;

export const getStaticPaths = async () => {
  const response = await fetch(`https://fakestoreapi.com/products?limit=5`);
  const data = await response.json();

  const paths = data.map((item) => ({
    params: {
      productId: `${item.id}`,
    },
  }));

  // fallback => false, 'blocking', true
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/${params.productId}`
  );
  const data = await response.json();
  // console.log('data', data);
  if (!data?.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      product: data,
    },
    revalidate: 1,
  };
};
