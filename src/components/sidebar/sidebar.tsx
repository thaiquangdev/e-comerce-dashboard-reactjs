import { useState } from "react";
import { Link } from "react-router-dom";
import logoLight from "../../assets/images/logo-light.png";
import { menuItems } from "../../utils/data";

const Sidebar = () => {
  // State to manage open/close for each parent menu item
  const [openMenus, setOpenMenus] = useState<{ [key: number]: boolean }>({});

  // Function to toggle menu item
  const toggleMenu = (index: number) => {
    setOpenMenus((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the open/close state
    }));
  };

  return (
    <div className="min-w-[280px] h-screen bg-[#262d34]">
      <div className="px-[25px] h-[100px] flex items-center justify-center">
        <Link to="/" className="flex items-center justify-center">
          <img src={logoLight} alt="Logo" className="h-[24px] object-cover" />
        </Link>
      </div>
      <div className="play-regular">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              {item.isHeading ? (
                <span className="text-[#656d77] play-bold text-sm px-8 py-3">
                  {item.label}
                </span>
              ) : (
                <div className="menu-item">
                  <span
                    onClick={() => toggleMenu(index)} // Toggle the menu on click
                    className="text-[#656d77] play-regular text-sm px-8 py-3 flex items-center gap-3 hover:text-white cursor-pointer"
                  >
                    <item.icon size={24} /> {/* Icon */}
                    <span>{item.label}</span>
                    {item.arrow && <item.arrow size={20} />} {/* Mũi tên */}
                  </span>

                  {/* Render các mục con nếu có và nếu menu đang mở */}
                  {item.child && openMenus[index] && (
                    <ul className="ml-9">
                      {item.child.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="text-sm text-[#adb5bd] px-8 py-2"
                        >
                          <span>{subItem.title}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
