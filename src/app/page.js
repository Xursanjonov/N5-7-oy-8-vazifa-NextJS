import Clean from "@/components/clean/Clean";
import Hero from "@/components/hero/Hero";
import ProductsWrapper from "@/components/products-wrapper/ProductsWrapper";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {

  return (
    <section className="w-full flex flex-col">
      <Hero />
      <ProductsWrapper
        title="Products"
        text="Order it for you or for your beloved ones"
      />
      <Clean />
      <Testimonials />
      <ProductsWrapper
      limit={4}
        title="Popular"
        text="Our top selling product that you may like"
      />
    </section>
  );
}
