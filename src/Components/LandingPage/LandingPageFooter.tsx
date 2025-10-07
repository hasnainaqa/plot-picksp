import { Instagram } from "lucide-react";
import FooterLogo from "./LandingPageAssets/FooterLogo.svg";

const companyLinks = [
  { label: "About", href: "#" },
  { label: "How it Works", href: "#" },
  { label: "Contact", href: "#" },
];
const helpLinks = [
  { label: "FAQs", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Cookies", href: "#" },
  { label: "Disclaimer", href: "#" },
  { label: "Terms & Conditions", href: "#" },
];
const socialLinks = [
  {
    href: "#",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: "#",
    icon: <Instagram className="w-8 h-8" />,
  },
  {
    href: "#",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#03000580]  pb-8 lg:pb-[42px] lg:pt-[121px] pt-[60px] lg:px-[60px] md:px-8 px-4 font-renner">
      <div className="flex md:flex-row flex-col md:justify-between lg:items-center md:items-start gap-12">
        <div className="items-center flex justify-center lg:ml-5 ml-0">
          <img
            src={FooterLogo}
            alt="Footer Logo"
            className="lg:w-[141px] w-[100px]"
          />
        </div>

        <div className="flex flex-row justify-center lg:gap-[92px] md:gap-[40px] gap-[25px] ">
          <div className="flex flex-row-reverse lg:flex-row justify-center lg:gap-[92px] md:gap-[40px] gap-[25px] ">
            <div>
              <h3 className=" flex font-semibold leading-[150%] text-2xl mb-3">
                Company
              </h3>
              <ul className="space-y-2">
                {companyLinks.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-[var(--secondarytext)] flex font-normal text-sm lg:text-base !leading-[150%] hover: transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className=" flex font-semibold leading-[150%] text-2xl mb-3">
                Help
              </h3>
              <ul className="space-y-2">
                {helpLinks.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-[var(--secondarytext)] block text-start font-normal text-sm lg:text-base !leading-[150%] hover: transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className=" font-semibold leading-[150%] flex text-2xl mb-3">
              Follow Us
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((item, index) => (
                <a key={index} href={item.href}>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center lg:text-base text-sm text-[var(--secondarytext)] font-normal lg:pt-[97px] !leading-[150%] pt-12">
        PlotPicks ©2025. All rights reserved.
      </div>
    </footer>
  );
}
