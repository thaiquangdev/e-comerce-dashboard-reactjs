import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/images/img-10.jpg";
import logo from "../../assets/images/logo-dark.png";
import Input from "../../components/input";
import { icons } from "../../utils/icons";
import { useState } from "react";
import { loginApi } from "../../services/apis/user";
import toast from "react-hot-toast";

const { FaFacebookF, FaGoogle } = icons;

const Login = () => {
  const navigation = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const response = await loginApi(formData);
    if (response.data.status === "success") {
      navigation("/");
    }
    if (response.data.status === "error") {
      toast.error(response.data.error);
    }
  };
  return (
    <div className="bg-[#faf7f8] min-h-screen flex items-center justify-center">
      <div className="flex flex-col lg:flex-row w-full ">
        <div className="lg:w-2/4 w-full p-5 lg:p-10">
          <div className="my-5 lg:flex justify-center h-full">
            <div className="w-full">
              <div className="py-5 text-center lg:text-left">
                <img
                  src={logo}
                  alt="logo"
                  className="h-[24px] mx-auto lg:mx-0"
                />
              </div>
              <div className="pb-4 text-center lg:text-left">
                <h2 className="play-bold text-lg">Đăng nhập</h2>
                <span className="pt-3 play-regular text-md text-[#5a708f]">
                  Nhập vào địa chỉ Email của bạn và mật khẩu để đăng nhập vào
                  trang quản lý
                </span>
              </div>
              <div className="pb-4">
                <form action="" onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-2 pb-4">
                    <label
                      htmlFor="email"
                      className="play-regular text-[#5a708f]"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="text"
                      place="Nhập vào Email của bạn"
                      classN="px-2 py-3 play-regular text-[#5a708f] rounded-md border"
                      val={formData.email}
                      onCh={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-2 pb-4">
                    <label
                      htmlFor="password"
                      className="play-regular text-[#5a708f]"
                    >
                      Mật khẩu
                    </label>
                    <Input
                      id="password"
                      type="password"
                      place="Nhập vào mật khẩu của bạn"
                      classN="px-2 py-3 play-regular text-[#5a708f] rounded-md border"
                      val={formData.password}
                      onCh={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex items-center gap-3 play-regular text-[#5a708f]">
                    <Input type="checkbox" classN="" id="remember" place="" />
                    <span>Lưu tài khoản 30 ngày</span>
                  </div>
                  <button className="bg-[#faeae4] text-[#ff774b] hover:bg-[#ff774b] hover:text-white play-bold text-lg rounded-md w-full py-3 my-3">
                    Đăng nhập
                  </button>
                </form>
              </div>
              <div className="py-3 text-center lg:text-left">
                <span className="play-bold text-md text-[#5a708f]">
                  Đăng nhập với
                </span>
              </div>
              <div className="pt-3 pb-5 flex flex-col gap-4">
                <Link
                  to=""
                  className="flex items-center gap-3 bg-[#eef2f8] hover:bg-black hover:text-white py-3 px-2 rounded-md"
                >
                  <FaGoogle />
                  <span className="play-regular text-md">
                    Đăng nhập với Google
                  </span>
                </Link>
                <Link
                  to=""
                  className="flex items-center gap-3 bg-[#faeae4] hover:bg-[#ff6738] hover:text-white py-3 px-2 rounded-md"
                >
                  <FaFacebookF />
                  <span className="play-regular text-md">
                    Đăng nhập với Facebook
                  </span>
                </Link>
              </div>
              <div className="pt-5 text-center lg:text-left">
                <div className="flex items-center justify-center gap-2">
                  <span className="play-regular text-sm text-[#f4999d]">
                    Bạn chưa có tài khoản?
                  </span>
                  <Link to="/register" className="play-bold text-md">
                    Đăng ký
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Ẩn ảnh khi màn hình nhỏ hơn lg */}
        <div className="lg:w-2/4 w-full p-5 lg:p-10 hidden lg:block">
          <div className="h-full flex justify-center lg:justify-end items-center">
            <img
              src={img}
              alt="side-img"
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
