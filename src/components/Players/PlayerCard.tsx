import { useState, type Dispatch, type SetStateAction } from "react";
import type { Iplayer } from "../type/player";

import {
  FaUser,
  FaGlobe,
  FaFutbol,
  FaShoePrints,
} from "react-icons/fa";

import { Bounce, toast } from "react-toastify";

interface IPlayerCardProps {
  player: Iplayer;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: Iplayer[];
  setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
}

const PlayerCard = ({
  player,
  coin,
  setCoin,
  selectedPlayers,
  setSelectedPlayers,
}: IPlayerCardProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelectPlayer = () => {
    // Already selected
    if (isSelected) {
      return;
    }

    // Check available coin
    if (coin < player.price) {
      toast.error("Coin is not enough to purchase", {
        position: "top-center",
        autoClose: 3000,
        theme: "light",
      });

      return;
    }

    // Remove player price from coin
    setCoin(coin - player.price);

    // Mark as selected
    setIsSelected(true);

    // Add player to selected players
    setSelectedPlayers([...selectedPlayers, player]);

    // Success message
    toast.success(`${player.playerName} is purchased successfully`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* ================= IMAGE ================= */}
      <div className="relative h-64 overflow-hidden bg-gray-100">

        <img
          src={player.playerImg}
          alt={player.playerName}
          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
        />

        {/* Player Type */}
        <div className="absolute right-4 top-4">
          <span className="rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white shadow-md">
            {player.playerType}
          </span>
        </div>

        {/* Image Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* ================= CARD BODY ================= */}
      <div className="p-5">

        {/* Player Name */}
        <div className="mb-5 flex items-center gap-3">

          {/* User Icon */}
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <FaUser />
          </div>

          <div className="min-w-0">
            <h2 className="truncate text-xl font-bold text-gray-900">
              {player.playerName}
            </h2>

            {/* Origin */}
            <p className="mt-1 flex items-center gap-1 text-sm text-gray-500">
              <FaGlobe className="text-xs" />
              {player.origin}
            </p>
          </div>
        </div>

        {/* ================= FOOTBALL INFO ================= */}
        <div className="grid grid-cols-2 gap-3">

          {/* Position */}
          <div className="rounded-xl bg-gray-50 p-3">
            <div className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-500">
              <FaFutbol className="text-blue-600" />
              <span>Position</span>
            </div>

            <p className="font-semibold text-gray-800">
              {player.position}
            </p>
          </div>

          {/* Preferred Foot */}
          <div className="rounded-xl bg-gray-50 p-3">
            <div className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-500">
              <FaShoePrints className="text-blue-600" />
              <span>Foot</span>
            </div>

            <p className="font-semibold text-gray-800">
              {player.preferredFoot}
            </p>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="my-5 border-t border-gray-200" />

        {/* ================= PRICE + BUTTON ================= */}
        <div className="flex items-center justify-between gap-3">

          {/* Price */}
          <div>
            <p className="text-sm text-gray-500">
              Player Price
            </p>

            <h3 className="text-2xl font-extrabold text-blue-600">
              ${player.price.toLocaleString()}
            </h3>
          </div>

          {/* Choose Button */}
          <button
            onClick={handleSelectPlayer}
            disabled={isSelected}
            className={`rounded-xl px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-200 ${
              isSelected
                ? "cursor-not-allowed bg-gray-400"
                : "bg-blue-600 hover:scale-105 hover:bg-blue-700"
            }`}
          >
            {isSelected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;