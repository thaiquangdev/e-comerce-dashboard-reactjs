import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token"); // Lấy token từ localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Thêm token vào header Authorization
    }
    return config; // Trả về config đã sửa đổi
  },
  function (error) {
    return Promise.reject(error); // Trả về lỗi nếu có vấn đề xảy ra trong request
  }
);

// Thêm interceptor để xử lý lỗi và làm mới token nếu cần
// axiosInstance.interceptors.request.use(
//     (response) => response,
//     async (error) => {
//       const originalRequest = error.config;
//       if (error.response.status === 401 && !originalRequest._retry) {
//         originalRequest._retry = true;
//         try {
//           const response = await axios.post(
//             "http://localhost:5500/api/v1/auth/refresh-token",
//             {},
//             { withCredentials: true }
//           );
//           const newAccessToken = response.data.accessToken;
//           localStorage.setItem("token", newAccessToken);

//           axiosInstance.defaults.headers.common[
//             "Authorization"
//           ] = `Bearer ${newAccessToken}`;
//           return axiosInstance(originalRequest);
//         } catch (error) {
//           localStorage.removeItem("token");
//           window.location.href = "/login";
//           return Promise.reject(error);
//         }
//       }
//       return Promise.reject(error);
//     }
//   );

export default axiosInstance;
