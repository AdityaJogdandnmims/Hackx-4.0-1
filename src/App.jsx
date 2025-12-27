import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Past from "./components/Past";
import Pastsponsor from "./components/Pastsponsor";
import Rank from "./components/Rank";
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

      {/* Past Highlights */}
      <Past />

      {/* F1-style Scroll Itinerary */}
      <Schedule />

      {/* Sponsors */}
      <Pastsponsor />



      {/* Rankings */}
      <Rank />

      <ProblemStatements/>
      <PastGlimpse />

      <FAQ />

  
      {/* Footer */}
      <Footer />

    </>
  );
}

export default App;
