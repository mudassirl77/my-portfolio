import React from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai';
import Image from 'next/image';
import muda from '../../public/muda3.png';

function SectionProfile({darkModeState}) {
  const toggleDarkMode = () => {
    darkModeState.setDarkMode(() => !darkModeState.darkMode);
    if (darkModeState.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <>
      <section className="min-h-screen pb-10">
        <nav className="py-10 flex justify-between">
          <h1 className="text-xl font-burtons dark:text-cyan-50">
            mudassir lallmahamood
          </h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill
                onClick={() => toggleDarkMode()}
                className="cursor-pointer text-2xl"
              />
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-slate-500 to-slate-800 text-white px-4 py-2 rounded-md ml-8 dark:from-cyan-100 dark:to-purple-200 dark:text-slate-900"
                href="#"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-7 py-10 dark:text-cyan-100">
          <h2 className="text-4xl py-2 text-slate-600 font-medium md:text-6xl dark:text-purple-100">
            Mudassir Lallmahamood
          </h2>
          <h3 className="text-2xl py-2 md:text-3xl dark:text-cyan-100">
            Senior Frontend Engineer
          </h3>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-cyan-100">
            Pragmatic engineer with a growth mindset. With almost 6 years of
            professional experience in software development, I deliver quality
            web applications. The hunger to achieve and learn more keeps me
            going.
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-cyan-100">
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillGithub />
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-cyan-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
          <Image src={muda} layout="fill" objectFit="cover" alt={''} />
        </div>
      </section>
    </>
  );
}

export default SectionProfile;
