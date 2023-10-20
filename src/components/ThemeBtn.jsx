import { useEffect } from "react";
import useTheme from "../context/theme";

const ThemeBtn = () => {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const toggleTheme = (isChecked) => {
    if (isChecked) {
      darkTheme();
      localStorage.setItem("theme", "dark");
    } else {
      lightTheme();
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      if (currentTheme === "dark") {
        darkTheme();
      } else {
        lightTheme();
      }
    } else {
      lightTheme(); // Default to light theme when no preference is found
    }
  }, [lightTheme, darkTheme]);

  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    toggleTheme(darkModeStatus);
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={onChangeBtn}
        checked={themeMode === "dark"}
      />
      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none  rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:b">
        <svg
          className="sun absolute left-1 top-1 w-4 h-4 text-white"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 496"
        >
          <path
            d="M248,88c-88.224,0-160,71.776-160,160s71.776,160,160,160s160-71.776,160-160S336.224,88,248,88z M248,392
				c-79.4,0-144-64.6-144-144s64.6-144,144-144s144,64.6,144,144S327.4,392,248,392z"
          />
        </svg>
        <svg
          className="moon absolute left-6 top-1 w-4 h-4 text-gray-500"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 49.739 49.739"
        >
          <path
            d="M25.068,48.889c-9.173,0-18.017-5.06-22.396-13.804C-3.373,23.008,1.164,8.467,13.003,1.979l2.061-1.129l-0.615,2.268
       c-1.479,5.459-0.899,11.25,1.633,16.306c2.75,5.493,7.476,9.587,13.305,11.526c5.831,1.939,12.065,1.492,17.559-1.258v0
       c0.25-0.125,0.492-0.258,0.734-0.391l2.061-1.13l-0.585,2.252c-1.863,6.873-6.577,12.639-12.933,15.822
       C32.639,48.039,28.825,48.888,25.068,48.889z M12.002,4.936c-9.413,6.428-12.756,18.837-7.54,29.253
       c5.678,11.34,19.522,15.945,30.864,10.268c5.154-2.582,9.136-7.012,11.181-12.357c-5.632,2.427-11.882,2.702-17.752,0.748
       c-6.337-2.108-11.473-6.557-14.463-12.528C11.899,15.541,11.11,10.16,12.002,4.936z"
          />
        </svg>
      </div>
    </label>
  );
};

export default ThemeBtn;
