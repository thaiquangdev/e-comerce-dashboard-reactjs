import { icons } from "./icons";

const {
  MdDashboard,
  FaProductHunt,
  BiSolidCategory,
  IoCart,
  FaUser,
  MdKeyboardArrowDown,
} = icons;

export const menuItems = [
  {
    label: "Chung",
    isHeading: true,
  },
  {
    label: "Trang tổng quan",
    icon: MdDashboard,
    link: "/",
  },
  {
    label: "Sản phẩm",
    icon: FaProductHunt,
    arrow: MdKeyboardArrowDown,
    child: [
      {
        title: "Danh sách",
      },
      {
        title: "Chi tiết",
      },
      {
        title: "Cập nhật",
      },
      {
        title: "Tạo mới",
      },
    ],
  },
  {
    label: "Loại sản phẩm",
    icon: BiSolidCategory,
    arrow: MdKeyboardArrowDown,
    child: [
      {
        title: "Danh sách",
      },
      {
        title: "Cập nhật",
      },
      {
        title: "Tạo mới",
      },
    ],
  },
  {
    label: "Đơn hàng",
    icon: IoCart,
    arrow: MdKeyboardArrowDown,
    child: [
      {
        title: "Danh sách",
      },
      {
        title: "Chi tiết",
      },
      {
        title: "Giỏ hàng",
      },
      {
        title: "Thanh toán",
      },
    ],
  },
  {
    label: "Người dùng",
    isHeading: true,
  },
  {
    label: "Phân quyền",
    icon: FaUser,
    arrow: MdKeyboardArrowDown,
    child: [
      {
        title: "Danh sách",
      },
      {
        title: "Cập nhật",
      },
      {
        title: "Tạo mới",
      },
    ],
  },
  {
    label: "Khách hàng",
    icon: FaUser,
    arrow: MdKeyboardArrowDown,
    child: [
      {
        title: "Danh sách",
      },
      {
        title: "Chi tiết",
      },
    ],
  },
];
