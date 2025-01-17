const axios = require("axios");
const fs = require("fs");

// Đọc danh sách proxy từ file proxies.json
const proxiesFile = "./proxies.json";

// Hàm delay để chờ giữa các lần gửi
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

fs.readFile(proxiesFile, "utf-8", async (err, data) => {
  if (err) {
    console.error("Không thể đọc file proxies.json:", err);
    return;
  }

  try {
    const proxies = JSON.parse(data); // Parse danh sách proxy

    // Lặp qua từng proxy và gửi request với độ trễ
    for (const proxy of proxies) {
      try {
        // Gửi request đến API /ref với từng proxy
        const response = await axios.get(
          `http://localhost:3000/ref?proxy=${proxy}`
        );
        console.log(`Proxy ${proxy}:`, response.data);

        // Delay 2 giây (2000ms) giữa mỗi lần gửi proxy
        await delay(5000);
      } catch (error) {
        console.error(
          `Lỗi khi gửi proxy ${proxy}:`,
          error.response ? error.response.data : error.message
        );
      }
    }
  } catch (parseError) {
    console.error("Lỗi khi parse proxies.json:", parseError.message);
  }
});
