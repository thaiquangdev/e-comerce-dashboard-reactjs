import { icons } from "../../utils/icons";
import Input from "../input";

const { IoSearch, IoMdNotifications } = icons;

const Header = () => {
  return (
    <div className="h-[100px] px-3 bg-[#faf7f8]">
      <div className="flex items-center justify-between h-full">
        {/* Text bên trái */}
        <h3 className="play-bold text-[#6f769f]">XIN CHÀO!</h3>

        {/* Phần bên phải */}
        <div className="flex items-center gap-5">
          {/* Thông báo */}
          <div className="flex items-center justify-center">
            <IoMdNotifications size={30} />
          </div>

          {/* Avatar */}
          <div className="flex items-center justify-center">
            <img
              src="https://techzaa.getappui.com/larkon/admin/assets/images/users/avatar-1.jpg"
              alt=""
              className="w-[40px] h-[40px] object-cover rounded-full"
            />
          </div>

          {/* Tìm kiếm */}
          <div className="flex items-center bg-[#ebe8e9] rounded-md">
            <span className="px-2 flex items-center justify-center">
              <IoSearch size={20} />
            </span>
            <Input
              type="text"
              place="Tìm kiếm"
              classN="px-2 py-2 bg-[#ebe8e9] rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
