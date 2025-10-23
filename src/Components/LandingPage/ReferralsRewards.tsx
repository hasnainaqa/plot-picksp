import PP from "./assets/PP.svg";
import Button from "./ui/Button";

export default function ReferralsRewards() {
  const paragraphs = [
    "Turn the waitlist into your first big win. Every friend you invite isn't just another signup: they're your power-up.",
    "Stack referrals to unlock exclusive perks: early beta access, bonus contest entries, and special rewards that put you ahead before the first game even begins.",
    "The bigger your squad, the bigger your edge. Build your crew, climb the ranks, and cement your place as a PlotPicks pioneer. Don't just stand in line, lead it.",
  ];

  return (
    <div className="relative lg:pt-[245px] pt-[100px]  flex items-center justify-center font-renner">
      <div
        className="absolute top-12 lg:right-0 md:-right-52 -right-72 md:h-[500px] md:w-[500px] h-[500px] w-[400px] -z-10"
        style={{
          background: `linear-gradient(to top right, #06F1BA 30.19%, #0385FF 69.08%), #4F0070`,
          opacity: 0.15,
          boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
          filter: `blur(100px)`,
        }}
      ></div>

      <div className="max-w-7xl w-full items-center flex justify-between">
        <div className="lg:px-8">
          <h1 className="heading mb-[23px] text-start ">
            Referrals + PlotPoint Rewards
          </h1>

          {paragraphs.map((text, index) => (
            <p
              key={index}
              className="lg:text-base text-sm !leading-[26px] font-normal text-start lg:max-w-[700px] md:max-w-[432px] mb-4"
            >
              {text}
            </p>
          ))}
          <div className="flex justify-start mt-8 ">
            <Button>Share Your Link</Button>
          </div>
        </div>

        <img
          src={PP}
          alt=""
          className="lg:h-[507px] lg:w-[562px] md:h-[272px] md:w-[301px] h-[260px] w-[288px]  absolute md:-right-12 -right-[105px]  "
        />
      </div>
    </div>
  );
}
