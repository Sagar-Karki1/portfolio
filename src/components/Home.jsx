import Hero from "./Hero";
import Navbar from "./Navbar";
import Resume from "./Resume";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-blue-200 to-indigo-300">
      <Navbar />
      <Hero />
      <Resume />
    </div>
  );
};

export default Home;
