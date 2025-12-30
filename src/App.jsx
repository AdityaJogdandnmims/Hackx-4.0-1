import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Past from "./components/About";
import Pastsponsor from "./components/Pastsponsor";
import Prizes from "./components/Prizes";
import Footer from "./components/Footer";
import ProblemStatements from "./components/ProblemStatements";
import PastGlimpse from "./components/PastGlimpse";
import Schedule from "./components/Schedule";
import FAQ from "./components/FAQ";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Past />
      <Schedule />
      <ProblemStatements />
      <Prizes />
      <Pastsponsor />
      <PastGlimpse />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
