import type { Dispatch, SetStateAction } from "react";
import type { Iplayer } from "../type/player";
import { TbTrash } from "react-icons/tb";
import { FaFutbol } from "react-icons/fa";

interface ISelectedPlayerCardProps {
  player: Iplayer;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: Iplayer[];
  setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
}

const SelectedPlayerCard = ({
  player,
  coin,
  setCoin,
  selectedPlayers,
  setSelectedPlayers,
}: ISelectedPlayerCardProps) => {

  const handleRemovePlayer = () => {
    // Remove player from selected players
    const remainingPlayers = selectedPlayers.filter(
      (selectedPlayer) =>
        selectedPlayer.playerName !== player.playerName
    );

    setSelectedPlayers(remainingPlayers);

    // Return player's price to coin
    setCoin(coin + player.price);
  };

  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-3 shadow-sm transition hover:shadow-md">

      {/* ================= PLAYER INFO ================= */}
      <div className="flex min-w-0 items-center gap-3">

        {/* Player Image */}
        <img
          src={player.playerImg}
          alt={player.playerName}
          className="h-16 w-16 shrink-0 rounded-xl object-cover object-top"
        />

        {/* Name + Position */}
        <div className="min-w-0">
          <h2 className="truncate text-lg font-bold text-gray-900">
            {player.playerName}
          </h2>

          <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
            <FaFutbol className="text-blue-600" />
            <span>{player.position}</span>
          </div>

          <p className="text-sm text-gray-500">
            {player.playerType}
          </p>
        </div>
      </div>

      {/* ================= PRICE + DELETE ================= */}
      <div className="flex shrink-0 items-center gap-4">

        {/* Price */}
        <p className="font-bold text-blue-600">
          ${player.price.toLocaleString()}
        </p>

        {/* Delete Button */}
        <button
          type="button"
          onClick={handleRemovePlayer}
          className="flex h-10 w-10 items-center justify-center rounded-full text-red-500 transition hover:bg-red-50 hover:text-red-600"
          title="Remove player"
        >
          <TbTrash className="text-xl" />
        </button>

      </div>
    </div>
  );
};

export default SelectedPlayerCard;