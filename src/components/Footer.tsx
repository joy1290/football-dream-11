import { useState } from "react";
import { FaFutbol, FaArrowRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const [email, setEmail] = useState("");

const handleSubscribe = (e: React.FormEvent) => {
  e.preventDefault();

  if (!email.trim()) {
    alert("Please enter your email address.");
    return;
  }

  alert("Successfully subscribed!");
  setEmail("");
};

  return (
    <footer className="mt-20 w-full bg-slate-950 text-slate-300">
      {/* ================= Newsletter ================= */}
      <div className="mx-auto w-[92%] max-w-6xl">
        <div className="rounded-3xl border border-blue-500/30 bg-gradient-to-r from-blue-950 via-slate-900 to-cyan-950 p-6 shadow-2xl md:p-10">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            {/* Newsletter Content */}
            <div className="w-full flex-1">
              <div className="mb-3 flex items-center justify-center gap-2 lg:justify-start">
                <FaFutbol className="text-xl text-cyan-400" />

                <span className="font-bold tracking-wide text-cyan-400">
                  FOOTBALL ARENA
                </span>
              </div>

              <h2 className="text-center text-3xl font-extrabold text-white md:text-4xl lg:text-left">
                Stay in the Game!
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-6 text-slate-400 lg:mx-0 lg:text-left">
                Get the latest football news, player updates and team building
                tips directly in your inbox.
              </p>
            </div>

            {/* Subscribe Form */}
            <form
              onSubmit={handleSubscribe}
              className="flex w-full flex-col gap-3 sm:flex-row lg:max-w-xl"
            >
              {/* Email */}
              <div className="relative flex-1">
                <MdEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-slate-400" />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="h-14 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 pl-12 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                />
              </div>

              {/* Subscribe Button */}
              <button
                type="submit"
                className="flex h-14 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-7 font-bold text-slate-950 transition-all duration-200 hover:bg-cyan-300 active:scale-95"
              >
                Subscribe
                <FaArrowRight />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ================= Main Footer ================= */}
      <div className="mx-auto mt-14 w-[92%] max-w-7xl border-b border-slate-800 pb-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600">
                <FaFutbol className="text-xl text-white" />
              </div>

              <h3 className="text-xl font-extrabold text-white">
                Football Arena
              </h3>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              Build your dream football squad, choose your favorite players
              and manage your budget like a real team manager.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-white">
              Quick Links
            </h3>

            <ul className="space-y-5 text-sm">
              <li>
                <a
                  href="#home"
                  className="transition-colors duration-200 hover:text-cyan-400"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#fixture"
                  className="transition-colors duration-200 hover:text-cyan-400"
                >
                  Fixtures
                </a>
              </li>

              <li>
                <a
                  href="#players"
                  className="transition-colors duration-200 hover:text-cyan-400"
                >
                  Players
                </a>
              </li>

              <li>
                <a
                  href="#schedule"
                  className="transition-colors duration-200 hover:text-cyan-400"
                >
                  Schedule
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-white">
              About Football Arena
            </h3>

            <p className="text-sm leading-7 text-slate-400">
              Football Arena is a simple platform where you can select your
              favorite players, manage your coins and create your ultimate
              football squad.
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm font-medium text-cyan-400">
              <FaFutbol />
              <span>Build. Select. Win.</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= Copyright ================= */}
      <div className="mx-auto flex w-[92%] max-w-7xl flex-col items-center justify-between gap-3 py-6 text-center text-xs text-slate-500 md:flex-row md:text-left">
        <p>
          © {new Date().getFullYear()} Football Arena. All rights reserved.
        </p>

        <p>Made for football lovers ⚽</p>
      </div>
    </footer>
  );
};

export default Footer;
