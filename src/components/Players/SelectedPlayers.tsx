import type { Dispatch, SetStateAction } from "react";
import type { Iplayer } from "../type/player";
import SelectedPlayerCard from "./SelectedPlayerCard";

interface ISelectedPlayersProps {
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: Iplayer[];
  setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
}

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}: ISelectedPlayersProps) => {
  if (selectedPlayers.length === 0) {
    return (
      <h2 className="my-10 text-center text-2xl font-bold text-red-500">
        No selected players
      </h2>
    );
  }

  return (
    <div className="mt-6 grid grid-cols-1 gap-5">
      {selectedPlayers.map((player) => (
        <SelectedPlayerCard
          key={player.playerName}
          player={player}
          coin={coin}
          setCoin={setCoin}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        />
      ))}
    </div>
  );
};

export default SelectedPlayers;