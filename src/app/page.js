import Clean from "@/components/clean/Clean";
import Hero from "@/components/hero/Hero";
import ProductsWrapper from "@/components/products-wrapper/ProductsWrapper";
import Testimonials from "@/components/testimonials/Testimonials";
import { getData } from "@/utils/fetchData";
import { getUsers } from "@/utils/getUsers";

export default async function Home() {
  const products = await getData("/products?limit=8");
  const popular = await getData("/products?limit=4");
  const users = await getUsers("/users?limit=3");

  return (
    <section className="w-full flex flex-col">
      <Hero />
      <ProductsWrapper
        title="Products"
        text="Order it for you or for your beloved ones"
        data={products}
      />
      <Clean />
      <Testimonials users={users} />
      <ProductsWrapper
        title="Popular"
        text="Our top selling product that you may like"
        data={popular}
      />
    </section>
  );
}
