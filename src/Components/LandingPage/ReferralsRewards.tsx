import PP from "./assets/PP.svg";
import Button from "./ui/Button";

export default function ReferralsRewards() {
  const paragraphs = [
    "Turn the waitlist into your first big win. Every friend you invite isn't just another signup: they're your power-up.",
    "Stack referrals to unlock exclusive perks: early beta access, bonus contest entries, and special rewards that put you ahead before the first game even begins.",
    "The bigger your squad, the bigger your edge. Build your crew, climb the ranks, and cement your place as a PlotPicks pioneer. Don't just stand in line, lead it.",
  ];

  return (
    <div className="relative py-[174px] text-white flex items-center justify-center font-renner">
      <div
        className="absolute top-0 right-0 h-[500px] w-[500px] -z-10"
        style={{
          background: `linear-gradient(to right, #06F1BA 30.19%, #0385FF 69.08%), #4F0070`,
          opacity: 0.15,
          boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
          filter: `blur(100px)`,
        }}
      ></div>

      <div className="max-w-full w-full gap-[150px] items-center flex justify-between">
        <div className="px-[60px]">
          <h1 className="text-5xl font-semibold mb-[23px] text-start leading-[150%]">
            Referrals + Rewards
          </h1>

          {paragraphs.map((text, index) => (
            <p
              key={index}
              className="text-base leading-[26px] font-normal text-start max-w-[700px] mb-4"
            >
              {text}
            </p>
          ))}
          <div className="flex justify-start mt-8 ">
            <Button>Share Your Link</Button>
          </div>
        </div>

        <img src={PP} alt="" className=" h-[507px] w-[562px] " />
      </div>
    </div>
  );
}
