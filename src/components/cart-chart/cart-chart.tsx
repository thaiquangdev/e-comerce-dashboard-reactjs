import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CartChart = () => {
  const [view, setView] = useState("month"); // Trạng thái hiện tại, mặc định là "month"

  // Dữ liệu cho biểu đồ doanh thu theo tháng, tuần, ngày
  const dataByMonth = {
    labels: [
      "Tháng 1",
      "Tháng 2",
      "Tháng 3",
      "Tháng 4",
      "Tháng 5",
      "Tháng 6",
      "Tháng 7",
      "Tháng 8",
      "Tháng 9",
      "Tháng 10",
      "Tháng 11",
      "Tháng 12",
    ],
    datasets: [
      {
        label: "Doanh thu",
        data: [
          12000, 19000, 3000, 5000, 20000, 30000, 25000, 2000, 4000, 8000,
          10000, 8000,
        ],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const dataByWeek = {
    labels: ["Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4"],
    datasets: [
      {
        label: "Doanh thu",
        data: [5000, 7000, 4000, 10000],
        backgroundColor: "rgba(153, 102, 255, 0.6)",
      },
    ],
  };

  const dataByDay = {
    labels: ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ Nhật"],
    datasets: [
      {
        label: "Doanh thu",
        data: [2000, 3000, 1500, 4000, 2500, 3000, 1000],
        backgroundColor: "rgba(255, 159, 64, 0.6)",
      },
    ],
  };

  // Cấu hình biểu đồ
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text:
          "Doanh thu theo " +
          (view === "month" ? "Tháng" : view === "week" ? "Tuần" : "Ngày"),
      },
    },
  };

  // Dữ liệu hiển thị dựa trên chế độ xem hiện tại
  const chartData =
    view === "month" ? dataByMonth : view === "week" ? dataByWeek : dataByDay;

  return (
    <div className="px-3 pl-2 w-[70%]">
      <div className="flex gap-5 items-center">
        {/* Các khối tóm tắt doanh thu */}
        <div className="bg-white p-6 rounded-lg">
          <div className="flex items-center gap-4">
            <span className="play-regular text-md ">Đơn đặt hàng</span>
            <span className="play-bold text-lg">13,647</span>
          </div>
          <div className="flex items-center gap-3 pt-5">
            <span className="text-sm">2.5%</span>
            <span className="text-sm">Hôm qua</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg">
          <div className="flex items-center gap-4">
            <span className="play-regular text-md ">Khách hàng mới</span>
            <span className="play-bold text-lg">13,647</span>
          </div>
          <div className="flex items-center gap-3 pt-5">
            <span className="text-sm">2.5%</span>
            <span className="text-sm">Hôm qua</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg">
          <div className="flex items-center gap-4">
            <span className="play-regular text-md ">Doanh thu</span>
            <span className="play-bold text-lg">13,647</span>
          </div>
          <div className="flex items-center gap-3 pt-5">
            <span className="text-sm">2.5%</span>
            <span className="text-sm">Hôm qua</span>
          </div>
        </div>
      </div>

      {/* Chuyển đổi chế độ xem biểu đồ */}
      <div className="bg-white mt-4 px-2 pt-3">
        <div className="flex items-center justify-between">
          <h3 className="play-bold">Hiệu suất</h3>
          <div>
            <ul className="flex items-center gap-3">
              <li
                onClick={() => setView("day")}
                className={view === "day" ? "font-bold" : ""}
              >
                <span className="cursor-pointer">Ngày</span>
              </li>
              <li
                onClick={() => setView("week")}
                className={view === "week" ? "font-bold" : ""}
              >
                <span className="cursor-pointer">Tuần</span>
              </li>
              <li
                onClick={() => setView("month")}
                className={view === "month" ? "font-bold" : ""}
              >
                <span className="cursor-pointer">Tháng</span>
              </li>
              <li
                onClick={() => setView("year")}
                className={view === "year" ? "font-bold" : ""}
              ></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Biểu đồ doanh thu */}
      <div className="pt-5 bg-white px-2">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default CartChart;
