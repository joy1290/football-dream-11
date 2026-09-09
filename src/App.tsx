import { Suspense, useState } from "react";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Players from "./components/Players/Players";
import Footer from "./components/Footer";
import type { Iplayer } from "./components/type/player";

const playersFetch = async (): Promise<Iplayer[]> => {
  const res = await fetch("/data.json");

  if (!res.ok) {
    throw new Error("Failed to fetch players data");
  }

  const data = await res.json();
  return data;
};

function App() {
  const [playersPromise] = useState(() => playersFetch());

  const [coin, setCoin] = useState(5000);

  const handleFreeCredit = () => {
    setCoin((prevCoin) => prevCoin + 1000);
  };

  return (
    <>
      <Nav coin={coin} />

      <Banner handleFreeCredit={handleFreeCredit} />

      <Suspense
        fallback={
          <h2 className="mt-10 text-center text-2xl font-bold">
            Loading...
          </h2>
        }
      >
        <Players
          playersPromise={playersPromise}
          coin={coin}
          setCoin={setCoin}
        />
      </Suspense>

      <Footer />
    </>
  );
}

export default App;