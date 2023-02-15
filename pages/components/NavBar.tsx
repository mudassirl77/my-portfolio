import React, { useContext } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { ThemeContext } from '../context/ThemeContext';

function NavBar() {
  const themeContext = useContext(ThemeContext);

  const toggleDarkMode = () => {
    themeContext.setDarkMode(() => !themeContext.darkMode);
    if (themeContext.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <>
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
    </>
  );
}

export default NavBar;
