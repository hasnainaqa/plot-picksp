import Button from "./ui/Button";
const HeroSection: React.FC = () => {
  return (
    <div
      className=" pb-[250px]"
      style={{
        background: `
      radial-gradient(circle at bottom right, #230231 0%, transparent 25%)
    `,
      }}
    >
      <div className="relative">

      <div
        className="absolute inset-0 h-[600px] w-[600px] left-0 -top-2 -z-10"
        style={{
          background: `linear-gradient(46.53deg, #06F1BA 30.19%, #0385FF 69.08%), #4F0070`,
          opacity: 0.15,
          boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
          filter: `blur(100px)`,
        }}
        ></div>
        </div>
      {/* <Header /> */}

      <section className="flex items-center justify-center pt-[320px] text-white font-renner">
        {/* Optional: Subtle gradient glows for a richer background effect */}

        <div className="flex flex-col items-center text-center">
          <h1 className="mb-4 font-bold leading-[150%] text-white text-5xl">
            Join the Future of Entertainment, Reimagined
          </h1>
          <p className="max-w-2xl mb-8 text-2xl font-normal leading-[150%]">
            Be the first to experience PlotPicks — the app that lets you predict
            what happens next in your favorite shows and win rewards.
          </p>
          <Button className="">
            Join Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
