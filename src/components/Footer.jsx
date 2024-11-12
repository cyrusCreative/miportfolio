import React from "react";

// Components
import { ButtonPrimary } from "./Button";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Reviews",
    href: "#reviews",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/cyrusCreative",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/olatimileyin-josiah-2b19aa27a/",
  },
  {
    label: "Twitter X",
    href: "https://x.com/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/olatimileyinjosiah/",
  },
];

const Footer = () => {
  return (
    <>
      <footer className="section">
        <div className="container">
          <div className="lg:grid lg:grid-cols-2">
            <div className="mb-10">
              <h2 className="headline-2 mb-8 lg:max-w-[12ch] reveal-up">
                Let&apos;s work together today!
              </h2>

              <ButtonPrimary
                href="mailto:olatimileyinjosiah32@gmail.com"
                label="Start Project"
                icon="chevron_right"
                classes="reveal-up"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 lg:pl-20">
              <div>
                <p className="mb-2 reveal-up">Sitemap</p>
                <ul>
                  {sitemap.map(({ label, href }, key) => (
                    <li key={key}>
                      <a
                        href={href}
                        className="block text-sm text-slate-400 py-1 transition-colors hover:text-slate-200 reveal-up"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="mb-2 reveal-up">Social</p>
                <ul>
                  {socials.map(({ label, href }, key) => (
                    <li key={key}>
                      <a
                        href={href}
                        target="_blank"
                        className="block text-sm text-slate-400 py-1 transition-colors hover:text-slate-200 reveal-up"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center pt-10 mb-8">
            {/* <a href="/" className="logo text-sm reveal-up">
              <img src="/images/logo.svg" alt="logo" width={40} height={40} />
              <p>#OJM</p>
            </a> */}

            <p className="text-slate-500 text-sm reveal-up">
              Copyright © 2021 Olatimileyin M. Josiah
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
