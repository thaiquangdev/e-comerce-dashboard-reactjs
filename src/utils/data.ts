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
        link: "/products",
      },
      {
        title: "Chi tiết",
        link: "/product/slug",
      },
      {
        title: "Cập nhật",
        link: "/product/id",
      },
      {
        title: "Tạo mới",
        link: "/create-product",
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
        link: "/product/categories",
      },
      {
        title: "Cập nhật",
        link: "/product/id",
      },
      {
        title: "Tạo mới",
        link: "/create-category",
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
        link: "/orders",
      },
      {
        title: "Chi tiết",
        link: "/cart/id",
      },
      {
        title: "Giỏ hàng",
        link: "/cart",
      },
      {
        title: "Thanh toán",
        link: "/checkout",
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
        link: "/users",
      },
      {
        title: "Cập nhật",
        link: "/users/id",
      },
      {
        title: "Tạo mới",
        link: "/create-user",
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
        link: "/customers",
      },
      {
        title: "Chi tiết",
        link: "/customers/id",
      },
    ],
  },
];
