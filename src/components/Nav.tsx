import Logo from "../assets/jlogo.png";
import { AiFillDollarCircle } from "react-icons/ai";

const Nav = ({ coin }: { coin: number }) => {
  return (
    <nav className="bg-red-100">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">

        {/* Logo */}
        <div>
         <img
  src={Logo}
  alt="Football Logo"
  className="h-30 w-30 object-contain"
/>
        </div>

        {/* Menu */}
        <ul className="hidden items-center gap-8 font-medium md:flex">
          <li className="cursor-pointer hover:text-blue-600">Home</li>
          <li className="cursor-pointer hover:text-blue-600">Fixture</li>
          <li className="cursor-pointer hover:text-blue-600">Players</li>
          <li className="cursor-pointer hover:text-blue-600">Schedule</li>
        </ul>

        {/* Coin */}
        <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-2">
          <AiFillDollarCircle className="text-2xl text-yellow-500" />
          <span className="font-bold text-lg text-black">
            {coin}
          </span>
        </div>

      </div>
    </nav>
  );
};

export default Nav;