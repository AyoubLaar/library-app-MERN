import Header from "./components/Header";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col w-full items-center">
      <Header />
      <Hero />
      <Showcase />
      <Footer />
    </div>
  );
}

export default App;
