import { useRecoilValue, useSetRecoilState } from "recoil";
import { darkModeValue, darkMode as darkModeStore } from "@/stores/dark-mode";
import dom from "@left4code/tw-starter/dist/js/dom";
import classnames from "classnames";
import Lucide from "../../base-components/lucide";
import React, {useState} from "react";

function Main(props) {
  const darkMode = useRecoilValue(darkModeStore);
  const setDarkModeValue = useSetRecoilState(darkModeValue);

  const setDarkModeClass = () => {
    darkMode ? dom("html").addClass("dark") : dom("html").removeClass("dark");
  };

  const switchMode = () => {
    setDarkModeValue(() => !darkMode);
    localStorage.setItem("darkMode", !darkMode);
    setDarkModeClass();
  };

  setDarkModeClass();

 

  return (
    <>
      {/* BEGIN: Dark Mode Switcher */}
      <div
        className="dark-mode-switcher bg-slate-200 dark:bg-slate-800 cursor-pointer box border rounded-full xs:w-30 xl:w-40 h-10 flex items-center justify-center z-50 mb-0 mx-1"
        onClick={switchMode}
      >
        <div className="mx-2 text-slate-900 dark:text-slate-200">
          <Lucide icon="Sun" className="xs:w-3 xs:h-3 xl:w-5 xl:h-5" />
          </div>
        <div
          className={classnames({
            "dark-mode-switcher__toggle border": true,
            "dark-mode-switcher__toggle--active": darkMode,
          })}
        ></div>
        <div className="mx-2 text-slate-900 dark:text-slate-200">
          <Lucide icon="Moon" className="xs:w-3 xs:h-3 xl:w-5 xl:h-5" />
          </div>
      </div>
      {/* END: Dark Mode Switcher */}
    </>
  );
}

export default Main;
