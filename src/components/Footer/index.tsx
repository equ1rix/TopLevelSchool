import { mock } from "../../helpers";

import { InstagramButton, TelegramButton, YoutubeButton } from "../IconButtons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto max-w-[1100px] grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-4">TopLevelSchool</h2>
          <p className="text-gray-400">
            Школа іноземних мов, де кожен може досягти своїх мовних цілей. Ми
            пропонуємо курси для дітей та дорослих, допомагаємо вивчити
            англійську, німецьку та інші мови з нуля до впевненого рівня.
          </p>
        </div>

        <div className="flex flex-col">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#info" className="hover:underline">
                Info
              </a>
            </li>
            <li>
              <a href="#contacts" className="hover:underline">
                Contacts
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <InstagramButton onClick={mock} />
            <TelegramButton onClick={mock} />
            <YoutubeButton onClick={mock} />
          </div>
          <h3 className="text-xl font-semibold mt-6 mb-4">Contact Us</h3>
          <p className="text-gray-400">
            Email: contact@company.com <br />
            Phone: +380 50 150 56 60
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-center">
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} TopLevelSchool. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
