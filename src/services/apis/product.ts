import axiosInstance from "../../utils/axiosInstance";

// interface SKU {
//   sku: string;
//   stock: number;
//   price: number;
//   color: string;
//   storage: string;
// }

// interface CreateProduct {
//   title: string;
//   price: number;
//   description: string;
//   discount: number;
//   brand: string;
//   category: string;
//   thumb: File | null;
//   images: File[];
//   skus: SKU[];
// }

export const createProductApi = (data: FormData) =>
  axiosInstance({
    url: "/products/",
    method: "post",
    data,
  });
