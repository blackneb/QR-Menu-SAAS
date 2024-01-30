import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import Footer from "../components/Layout/Footer";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Feature />
        <Pricing />
      </Layout>
      <Footer/>
    </>
  );
}
