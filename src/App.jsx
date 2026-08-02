import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="bg-white w-[95%] mx-auto pt-12 flex flex-col gap-8 lg:w-full lg:gap-8">
        <Hero />
      </main>
      <Footer />
    </>
  );
}

export default App;
