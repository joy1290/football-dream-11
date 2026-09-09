interface IBannerProps {
  handleFreeCredit: () => void;
}

const Banner = ({ handleFreeCredit }: IBannerProps) => {
  return (
    <section className="mt-6 mb-12 w-full">
      <div className="relative w-full overflow-hidden bg-[#020518] shadow-xl">

        {/* Background Decoration */}
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#020518]"></div>

        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#020518]"></div>

        {/* Banner Content */}
        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-7xl items-center justify-center px-6 py-12 text-center">

          <div>

            {/* Badge */}
            <span className="inline-block rounded-full bg-yellow-400 px-5 py-2 text-xs font-extrabold uppercase tracking-widest text-green-950 shadow-lg">
              ⚽ Dream Team 2026
            </span>

            {/* Heading */}
            <h1 className="mt-6 text-4xl font-black leading-tight text-white md:text-6xl">
              Unleash the Champions
              <br />
              <span className="text-yellow-300">
                Build Your Dream Squad
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-green-50 md:text-base">
              Pick your favorite players, manage your budget and build
              the ultimate football squad to become the champion.
            </p>

            {/* Button */}
            <button
              type="button"
              onClick={handleFreeCredit}
              className="mt-8 rounded-xl bg-yellow-400 px-8 py-4 font-extrabold text-green-950 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-yellow-300 active:scale-95"
            >
              Get Starter Coins ⚡
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;