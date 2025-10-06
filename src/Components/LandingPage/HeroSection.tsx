import Button from "./ui/Button";
const HeroSection: React.FC = () => {
  return (
    <div
      className="pb-[100px] lg:pb-[250px]"
      //   style={{
      //     background: `
      //   radial-gradient(circle at bottom right, #230231 0%, transparent 25%)
      // `,
      //   }}
    >
      <div className="relative">
        <div
          className="
      absolute 
      top-40 -right-20
      translate-x-1/3 translate-y-1/3
      lg:w-[800px] w-[400px] md:w-[600px] 
      lg:h-[800px] h-[400px] md:h-[600px]
      -z-10 rounded-full
    "
          style={{
            background: `radial-gradient(circle, #12001A 30%, transparent 70%)`,
          }}
        />
      </div>

      <div className="relative">
        <div
          className="absolute inset-0 lg:h-[600px] md:h-[380px] md:w-[380px] h-[300px] w-[300px] lg:w-[600px] left-0 -top-2 -z-10"
          style={{
            background: `linear-gradient(46.53deg, #06F1BA 30.19%, #0385FF 69.08%), #4F0070`,
            opacity: 0.15,
            boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
            filter: `blur(100px)`,
          }}
        ></div>
      </div>
      {/* <Header /> */}

      <section className="flex items-center justify-center lg:pt-[320px] pt-[151px] px-7 text-white font-renner">
        {/* Optional: Subtle gradient glows for a richer background effect */}

        <div className="flex flex-col items-center text-center">
          <h1 className="mb-4 heading">
            Join the Future of Entertainment, Reimagined
          </h1>
          <p className="lg:max-w-[724px] md:max-w-lg max-w-sm mb-8 lg:text-2xl text-base font-normal !leading-[150%]">
            Be the first to experience PlotPicks the app that lets you predict
            what happens next in your favorite shows and win rewards.
          </p>
          <Button className="">Join Now</Button>
        </div>
      </section>
      {/* <div className="absolute -top-56 left-[600px] h-[2000px] w-[2000px] gradient-radial-purple "></div> */}
    </div>
  );
};

export default HeroSection;
