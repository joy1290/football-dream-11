import { useState } from "react";
import { FaFutbol, FaArrowRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email.trim()) return;

    alert("Successfully subscribed!");
    setEmail("");
  };

  return (
    <footer className="relative mt-32 bg-slate-950 text-slate-300">

      {/* Newsletter */}
      <div className="absolute -top-24 left-1/2 w-[92%] max-w-5xl -translate-x-1/2">
        <div className="rounded-3xl border border-blue-500/30 bg-gradient-to-r from-blue-950 via-slate-900 to-cyan-950 p-6 shadow-2xl md:p-10">

          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

            {/* Newsletter Content */}
            <div className="text-center md:text-left">
              <div className="mb-2 flex items-center justify-center gap-2 md:justify-start">
                <FaFutbol className="text-xl text-cyan-400" />

                <span className="font-bold text-cyan-400">
                  FOOTBALL ARENA
                </span>
              </div>

              <h2 className="text-2xl font-extrabold text-white md:text-3xl">
                Stay in the Game!
              </h2>

              <p className="mt-2 max-w-md text-sm text-slate-400">
                Get the latest football news, player updates and team
                building tips directly in your inbox.
              </p>
            </div>

            {/* Subscribe */}
            <div className="w-full max-w-md">
              <div className="flex flex-col gap-3 sm:flex-row">

                <div className="relative flex-1">
                  <MdEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-slate-400" />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 pl-12 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSubscribe}
                  className="flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300 active:scale-95"
                >
                  Subscribe
                  <FaArrowRight />
                </button>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto w-[92%] max-w-7xl border-b border-slate-800 px-2 pb-10 pt-32">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600">
                <FaFutbol className="text-xl text-white" />
              </div>

              <h3 className="text-xl font-extrabold text-white">
                Football Arena
              </h3>

            </div>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              Build your dream football squad, choose your favorite
              players and manage your budget like a real team manager.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">

              <li>
                <a
                  href="#home"
                  className="transition hover:text-cyan-400"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#fixture"
                  className="transition hover:text-cyan-400"
                >
                  Fixtures
                </a>
              </li>

              <li>
                <a
                  href="#players"
                  className="transition hover:text-cyan-400"
                >
                  Players
                </a>
              </li>

              <li>
                <a
                  href="#schedule"
                  className="transition hover:text-cyan-400"
                >
                  Schedule
                </a>
              </li>

            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">
              About Football Arena
            </h3>

            <p className="text-sm leading-6 text-slate-400">
              Football Arena is a simple platform where you can select
              your favorite players, manage your coins and create your
              ultimate football squad.
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm text-cyan-400">
              <FaFutbol />
              <span>Build. Select. Win.</span>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto flex w-[92%] max-w-7xl flex-col items-center justify-between gap-3 py-6 text-xs text-slate-500 md:flex-row">

        <p>
          © {new Date().getFullYear()} Football Arena. All rights reserved.
        </p>

        <p>
          Made for football lovers ⚽
        </p>

      </div>

    </footer>
  );
};

export default Footer;