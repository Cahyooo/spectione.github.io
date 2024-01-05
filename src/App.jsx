import { Footer } from "./Footer/Footer";
import { Gallery } from "./Gallery/Gallery";
import Header from "./Header/Header";
import { Navbar } from "./Navbar/Navbar";
import { Spotify } from "./Spotify/spotify";

const App = () => {
  const value = localStorage.getItem("SpectioneDarkMode");

  if (value == null) {
    localStorage.setItem("SpectioneDarkMode", "false");
  }

  return (
    <main className="min-[500px]:w-[500px] h-[100vh] m-auto relative">
      <Navbar />
      <Header />
      <Gallery />
      <Spotify />
      <Footer />
    </main>
  );
};
export default App;
