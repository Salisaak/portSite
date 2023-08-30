import React, { useEffect, useState } from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";


const Themetoggle = () => {
  const [theme, settheme] = useState(localStorage.getItem("theme"));
  const themetoggle = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if(theme === 'dark') {
      document.documentElement.style.setProperty('--home-img', 'url(https://i.imgur.com/iEdeyfa.jpg)');
    } else {
      document.documentElement.style.setProperty('--home-img', 'url(https://i.imgur.com/f7i8f5s.jpg)');
    }
  
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <div className="nav_ac" onClick={themetoggle}>
      <WiMoonAltWaningCrescent4 />
    </div>
  );
};

export default Themetoggle;
