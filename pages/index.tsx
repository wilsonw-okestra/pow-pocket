import type { NextPage } from "next";
import Clients from "../components/Clients";
import Footer from "../components/Footer";
import Homepage from "../components/Homepage";
import Navbar from "../components/Navbar";
import Principles from "../components/Principles";
import Services from "../components/Services";
import Solutions from "../components/Solutions";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Homepage />
      <Solutions />
      <Services />
      <Principles />
      <Clients />
      <Footer />
    </>
  );
};

export default Home;
