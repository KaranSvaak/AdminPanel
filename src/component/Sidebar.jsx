/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { FaGlobeAfrica } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const menu = [
  {
    heading: "",
    subHeading: [{ text: "Dashboard", url: "/" }, { text: "Blog", url: "/blog" },],
  },
  {
    heading: "ADVERTISE WITH US",
    subHeading: [{ text: "Advertisement", url: "/" },{ text: "Country Serve", url: "/countryServe" },],
  },
  {
    heading: "AFMX REGIONS",
    subHeading: [{ text: "Country", url: "/" },{ text: "State", url: "/" },{ text: "City", url: "/" },],
  },
  {
    heading: "OUR SERVICE DEPARTMENT",
    subHeading: [{ text: "Service Department", url: "/" },{ text: "Services", url: "/" },],
  },
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [deviceSize, setDeviceSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setDeviceSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSidebarToggle = () => {
    if (deviceSize < 678) {
      toggleSidebar();
    }
  };

  return (
    <div className={`w-[280px] bg-[var(--globalColor)] text-white min-h-screen transition-all duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"}`}>
      {deviceSize < 678 && (
        <RiCloseLine className="flex justify-end float-right text-3xl m-2 cursor-pointer" onClick={handleSidebarToggle}/>
      )}
      <h1 className="text-xl md:text-[2rem] h-[80px] text-[var(--headingColor)] font-semibold flex items-center px-4">Admin</h1>
      <ul className="flex flex-col gap-3 text-xl mt-3 mr-4">
        {menu.map((item, index) => (
          <React.Fragment key={index}>
            {item.heading && (
              <li className="text-gray-500 text-xs font-semibold px-6">{item.heading}</li>)}
            {Array.isArray(item.subHeading) &&
              item.subHeading.map((subItem, subIndex) => (
                <Link to={subItem.url} key={subIndex}>
                  <li className="text-gray-300 p-2 hover:border-l-4 border-[greenyellow] font-semibold flex gap-2 rounded-r-full px-2 pl-6 hover:bg-yellow-500 hover:text-[greenyellow] items-center cursor-pointer sidebarTextHeading">
                    <FaGlobeAfrica className="text-xl rounded-full" />
                    {subItem.text}
                  </li>
                </Link>
              ))}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
