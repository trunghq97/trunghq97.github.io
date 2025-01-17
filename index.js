const express = require("express");
const cors = require("cors"); // Import thư viện CORS
const fs = require("fs");
const app = express();

// Kích hoạt CORS
app.use(cors());

// Đọc danh sách proxy từ file proxies.json
const loadProxies = () => {
  try {
    const data = fs.readFileSync("./proxies.json", "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Lỗi khi đọc file proxies.json:", err);
    return [];
  }
};

// Dữ liệu tạm thời (giả lập database)
let stats = {
  totalUsers: 0,
  totalSolv: 0,
  details: {},
};

// Hàm tạo link ref random
const generateReferralLink = () => {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";
  for (let i = 0; i < 13; i++) {
    randomString += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return `https://solv.pw/?=ref${randomString}`;
};

// API ghi nhận proxy và tạo link ref
app.get("/ref", (req, res) => {
  const proxies = loadProxies();
  const proxy = proxies.shift(); // Lấy proxy đầu tiên

  if (!proxy) {
    return res.status(400).json({ message: "Hết proxy trong danh sách!" });
  }

  // Kiểm tra nếu proxy đã được sử dụng
  if (stats.details[proxy]) {
    return res.status(200).json({
      message: `Proxy ${proxy} đã được ghi nhận trước đó!`,
      referralLink: stats.details[proxy].referralLink,
    });
  }

  // Tạo link ref mới
  const referralLink = generateReferralLink();

  // Lưu thông tin proxy
  stats.details[proxy] = {
    referralLink: referralLink,
    solvEarned: 300,
  };
  stats.totalUsers++;
  stats.totalSolv += 300;

  // Ghi proxy còn lại vào file
  fs.writeFileSync("./proxies.json", JSON.stringify(proxies, null, 2));

  res.status(200).json({
    message: `Proxy ${proxy} đã được ghi nhận!`,
    referralLink: referralLink,
  });
});

// API để lấy dữ liệu thống kê
app.get("/api/get-stats", (req, res) => {
  res.json(stats);
});

// Khởi động server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API đang chạy tại http://localhost:${PORT}`);
});
