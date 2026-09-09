import Logo from "../assets/jlogo.png";
import { AiFillDollarCircle } from "react-icons/ai";

const Nav = ({ coin }: { coin: number }) => {
  return (
    <nav className="bg-red-100 shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex h-full items-center">
          <img
            src={Logo}
            alt="Football Logo"
            className="h-20 w-20 object-contain sm:h-24 sm:w-24 md:h-28 md:w-28"
          />
        </div>

        {/* Navigation */}
        <ul className="flex items-center gap-3 text-sm font-medium sm:gap-5 sm:text-base md:gap-8">
          <li>
            <a
              href="#home"
              className="transition-colors duration-200 hover:text-blue-600"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#fixture"
              className="transition-colors duration-200 hover:text-blue-600"
            >
              Fixture
            </a>
          </li>

          <li>
            <a
              href="#players"
              className="transition-colors duration-200 hover:text-blue-600"
            >
              Players
            </a>
          </li>

          <li>
            <a
              href="#schedule"
              className="transition-colors duration-200 hover:text-blue-600"
            >
              Schedule
            </a>
          </li>
        </ul>

        {/* Coin Badge */}
        <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-sm sm:px-5 sm:py-2.5">
          <AiFillDollarCircle className="text-xl text-yellow-500 sm:text-2xl" />

          <span className="text-sm font-bold text-black sm:text-base md:text-lg">
            {coin}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
