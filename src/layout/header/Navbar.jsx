import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../../assets/icons/logo.svg";
// import Cross from "../../assets/images/Home/cros.png";
import CloseIcon from "../../assets/icons/close.svg";
import { menuList } from "../../config";
function Navbar() {
  const currentPath = useLocation().pathname;
  const [navToggle, setNavToggle] = useState(false);
  const toggleNavigation = () => {
    setNavToggle(!navToggle);
  };
  const headeritems = () => {
    setNavToggle(false);
  };
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold && !isFixed) {
        setIsFixed(true);
      } else if (scrollPosition <= scrollThreshold && isFixed) {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFixed]);
  return (
    <>
      <nav
        className={`pt-[0px] w-full z-[500] ${isFixed ? "fixed top-0 bg-white" : "bg-[rgba(255,255,255,.2)]"
          }`}
      >
        <div className="container mx-auto w-full">
          <div className="flex items-center  gap-5 container mx-auto xl:pl-10 pl-4 xl:pr-10 pr-6  py-0">

            <div className="flex items-center 2xl:gap-20 gap-10">
              <Link
                to="/"
                className="text-lu-secondary font-medium text-[18px]"
              >
                <img src={Logo} alt="logo" className="w-[166px]" />
              </Link>
            </div>

            {/* navlist */}
            <ul
              className={`fixed w-full flex-1 lg:pt-0 pt-10 bg-lu-secondary h-[100vh] top-0 -left-[20000px] sidebar overflow-auto xl:overflow-visible duration-200 z-10 xl:h-[auto] xl:bg-transparent xl:w-[auto] xl:static xl:flex items-center justify-end text-right gap-[20px]`}
            >
              {menuList.map((v, i) => {
                return (
                  <li
                    key={`${v.id}_${i}`}
                    className="xl:h-[80px] lg:leading-[80px] leading-[50px] mr-[20px] relative group px-[15px] xl:px-0 text-center"
                  >
                    {
                      v.link.includes("#") ?
                        <a
                          onClick={headeritems}
                          href={v.link}
                          className={`text-${currentPath === v.link
                            ? "[#F1870F]"
                            : "[#3d4043]"
                            } border-b border-transparent hover:no-underline text-lg hover:text-[#F1870F] ${currentPath === v.link ? "font-bold pb-2" : "font-normal"
                            }`}
                        >
                          {v.name}
                        </a>
                        :
                        <Link
                          onClick={headeritems}
                          to={v.link}
                          className={`text-${currentPath === v.link
                            ? "[#F1870F]"
                            : "[#3d4043]"
                            } border-b border-transparent hover:no-underline text-lg hover:text-[#F1870F] ${currentPath === v.link ? "font-bold pb-2" : "font-normal"
                            }`}
                        >
                          {v.name}
                        </Link>
                    }

                    {v?.list && (
                      <ul className="dropdown_list nav_arrow text-[#F1870F] xl:hidden group-hover:block box-shadow-dropdown static xl:absolute xl:top-[70px] xl:bg-lu-white xl:shadow-dropdown">
                        {v?.list.map((j) => {
                          return (
                            <li key={j.id} className="xl:hover:bg-lu-primary-2">
                              <Link
                                to={j.link}
                                className="block text-xs leading-[50px] xl:leading-[80px] px-[25px] xl:px-[50px] whitespace-nowrap text-lu-white xl:text-lu-dark hover:text-lu-primary-2 xl:hover:text-lu-white  durartion-200 text-white"
                              >
                                {j.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
            <button
              onClick={toggleNavigation}
              style={{
                "--bg-toggle":
                  window.location.pathname === "/"
                    ? isFixed
                      ? "#F1870F"
                      : "#F1870F"
                    : "#F1870F",
              }}
              className="toggle_btn_action ml-auto xl:ml-10"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`w-[370px] bg-[#5d5d5df5] fixed top-0 end-0 z-[90000] h-screen pt-10 overflow-auto xl:overflow-visible duration-500  ${navToggle ? "end-0" : "end-[-400px]"
          }`}
      >
        <div
          onClick={navToggle ? toggleNavigation : ""}
          className={`screen_darker  fixed w-[calc(100%-370px)] h-full top-0 start-[370px] z-[-1] duration-1000 ${navToggle ? "opacity-1 visible" : "opacity-0 invisible"
            }`}
        ></div>

        <div className="container mx-auto px-4">

          <button className="ml-4" onClick={toggleNavigation}>
            <img src={CloseIcon} alt="close" />
          </button>
          <div className="mt-6 px-4">
            {
              menuList.map((item, key) => (
                (
                  item.link.includes("#") ?
                    <a key={key} href={item.link} onClick={toggleNavigation} className="group ">
                      <p className="text-[32px] text-white cursor-pointer flex items-center group-hover:text-[#F1870F] transition-all duration-500">
                        <span className="inline-block w-[0px] group-hover:w-[25px] h-[3px] bg-[#F1870F] mr-0 group-hover:mr-3 transition-all duration-500"></span>
                        {item.name}
                      </p>
                    </a>
                    :
                    <Link key={key} href={item.link} onClick={toggleNavigation} className="group ">
                      <p className="text-[32px] text-white cursor-pointer flex items-center group-hover:text-[#F1870F] transition-all duration-500">
                        <span className="inline-block w-[0px] group-hover:w-[25px] h-[3px] bg-[#F1870F] mr-0 group-hover:mr-3 transition-all duration-500"></span>
                        {item.name}
                      </p>
                    </Link>
                )
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
