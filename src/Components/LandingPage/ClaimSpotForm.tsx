import { useState } from "react";
import ClaimSpot from "./assets/ClaimSpot.svg";

export default function ClaimSpotForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log({ firstName, lastName, email });
  };

  return (
    <div
      className="pb-[250px] px-4 flex items-center justify-center font-renner"
      style={{
        background: `
      radial-gradient(circle at bottom left, #04203d 0%, transparent 25%)`,
      }}
    >
      <div className="w-full relative flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-stretch w-full max-w-[1200px]">
          {/* Left side - Image */}
          <div className="relative hidden xl:block flex-1">
            <img
              src={ClaimSpot}
              alt="Beach sunset with palm trees"
              className="w-full h-full object-cover rounded-tr-[30px] rounded-bl-[30px]"
            />
          </div>

          <div className="w-full lg:flex-1 flex flex-col items-center lg:items-start px-4 md:px-8 lg:px-0">
            <div
              className="relative w-full xl:w-auto xl:ml-4 rounded-t-3xl shadow-2xl p-6 pb-0 z-10 lg:min-w-[500px] h-full"
              style={{
                background: `radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.1) 0%, rgba(153, 153, 153, 0.1) 100%)`,
              }}
            >
              <h2 className="text-white text-4xl font-semibold mb-4 leading-[150%] text-center lg:text-left">
                Claim Your Spot on the Plot
              </h2>

              <p className="text-base font-normal text-white mb-8 leading-[150%] text-center lg:text-left">
                Be more than a spectator: lock in your place, get early perks,
                and step into the story before anyone else
              </p>

              <div className="z-30">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full bg-[#464447] text-white placeholder:text-white rounded-xl px-6 py-5 text-sm font-normal focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full bg-[#464447] text-white placeholder-white rounded-xl px-6 py-5 text-sm font-normal focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div
              className="relative w-full rounded-b-3xl xl:rounded-tl-2xl p-6 sm:p-8 xl:p-5 z-10 flex flex-col sm:flex-row gap-4 xl:-ml-[120px] xl:min-w-[744px] h-full"
              style={{
                background: `radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.1) 0%, rgba(153, 153, 153, 0.1) 100%)`,
              }}
            >
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-[#464447] text-white placeholder-white rounded-xl px-6 py-[15px] text-sm"
              />
              <button
                onClick={handleSubmit}
                className="relative inline-block h-[42px]  rounded-[32px] px-8 overflow-hidden group"
              >
                <span className="absolute inset-0 rounded-[32px] [background:linear-gradient(138.91deg,#0385FF_-3.35%,#06F1BA_101.24%)]"></span>
                <span
                  className="relative flex items-center justify-center w-full h-full rounded-[32px]  
                   font-renner font-semibold text-[14px] leading-[100%] tracking-[0] text-center text-white"
                >
                  Join Now
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
