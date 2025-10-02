import ClaimSpot from "./assets/ClaimSpot.svg";
import { useForm } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
};

export default function ClaimSpotForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
    // 👉 Send this to your API here
  };

  return (
    <div className="lg:pb-[250px] pb-[100px] px-4 flex items-center justify-center font-renner">
      {/* Background Gradient Glow */}
      <div className="relative">
        <div
          className="absolute lg:-bottom-[680px] lg:-left-10 -left-56 h-[500px] w-[500px] -z-10 lg:flex md:hidden flex"
          style={{
            background: `linear-gradient(to top right, #06F1BA 30.19%, #0385FF 69.08%), #4F0070`,
            opacity: 0.15,
            boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
            filter: `blur(100px)`,
          }}
        ></div>
      </div>

      <div className="w-full relative flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-stretch w-full max-w-[1200px]">
          {/* Entire form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col lg:flex-row w-full"
          >
            {/* Left side - Image */}
            <div className="relative hidden xl:block flex-1">
              <img
                src={ClaimSpot}
                alt="Claim your spot illustration"
                className="w-full h-full object-cover rounded-tr-[30px] rounded-bl-[30px]"
              />
            </div>

            {/* Right side - Form */}
            <div className="w-full lg:flex-1 flex flex-col items-center lg:items-start px-4 md:px-8 lg:px-0">
              {/* Top Card */}
              <div
                className="relative w-full xl:w-auto xl:ml-4 rounded-t-3xl shadow-2xl p-6 pb-0 z-10 lg:min-w-[500px] h-full"
                style={{
                  background: `radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0.1) 0%, rgba(153,153,153,0.1) 100%)`,
                }}
              >
                <h2 className="text-white lg:text-4xl text-2xl font-semibold mb-4 !leading-[150%] text-center lg:text-left">
                  Claim Your Spot on the Plot
                </h2>

                <p className="lg:text-base text-sm font-normal text-white mb-8 !leading-[150%] text-center lg:text-left">
                  Be more than a spectator: lock in your place, get early perks,
                  and step into the story before anyone else
                </p>

                {/* Inputs */}
                <div className="z-30 grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      {...register("firstName", {
                        required: "First name is required",
                      })}
                      className="w-full bg-[#464447] text-white placeholder:text-white rounded-xl px-6 lg:py-5 py-[15px] text-sm font-normal focus:outline-none"
                    />
                    {errors.firstName && (
                      <p className="absolute left-8 text-red-400 text-sm mt-1">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>

                  <div className="flex lg:flex-row flex-col">
                    <input
                      type="text"
                      placeholder="Last Name"
                      {...register("lastName", {
                        required: "Last name is required",
                      })}
                      className="w-full bg-[#464447] text-white placeholder:text-white rounded-xl px-6 lg:py-5 py-[15px] text-sm font-normal focus:outline-none"
                    />
                    {errors.lastName && (
                      <p className="absolute  text-red-400 text-sm mt-1">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Card */}
              <div
                className="relative w-full rounded-b-3xl xl:rounded-tl-2xl p-6 sm:p-8 xl:p-5 z-10 flex flex-col md:items-center md:flex-row gap-4 xl:-ml-[120px] xl:min-w-[744px] h-full"
                style={{
                  background: `radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0.1) 0%, rgba(153,153,153,0.1) 100%)`,
                }}
              >
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email",
                      },
                    })}
                    className="w-full bg-[#464447] text-white placeholder:text-white rounded-xl px-6 py-[15px] text-sm focus:outline-none"
                  />
                  {errors.email && (
                    <p className="absolute left-8 text-red-400 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="relative inline-block h-[42px] rounded-[32px] px-8 overflow-hidden group"
                >
                  <span className="absolute inset-0 rounded-[32px] [background:linear-gradient(138.91deg,#0385FF_-3.35%,#06F1BA_101.24%)]"></span>
                  <span
                    className="relative flex items-center justify-center w-full h-full rounded-[32px]  
                    font-renner font-semibold text-[14px] leading-[100%] text-center text-white"
                  >
                    Join Now
                  </span>
                </button>
                
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
