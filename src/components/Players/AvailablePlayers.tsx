import type { Dispatch, SetStateAction } from "react";
import type { Iplayer } from "../type/player";
import PlayerCard from "./PlayerCard";

interface IAvailableProps {
  players: Iplayer[];
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: Iplayer[];
  setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
}

const AvailablePlayers = ({
  players,
  coin,
  setCoin,
  selectedPlayers,
  setSelectedPlayers,
}: IAvailableProps) => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {players.map((player) => (
        <PlayerCard
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

export default AvailablePlayers;