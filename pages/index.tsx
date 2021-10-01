import type { NextPage } from "next";
import Clients from "../components/Clients";
import Homepage from "../components/Homepage";
import Principles from "../components/Principles";
import Services from "../components/Services";
import Solutions from "../components/Solutions";

const Home: NextPage = () => {
  return (
    <div>
      <Homepage />
      <Solutions />
      <Services />
      <Principles />
      <Clients />
    </div>
  );
};

export default Home;
