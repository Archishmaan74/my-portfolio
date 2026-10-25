import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#09090d] text-white">
      <Header />
      <Main />
      <Footer />
    </main>
  );
};

export default App;
