// Hàm cập nhật số lượng user từ backend
async function updateUserCount() {
  try {
    // Gửi request đến API lấy số lượng user
    const response = await fetch("http://localhost:3000/api/get-users");
    const data = await response.json();

    // Cập nhật số lượng user trên giao diện
    const userCountElement = document.getElementById("invited-count");
    userCountElement.textContent = `${data.totalUsers} users`;
  } catch (error) {
    console.error("Lỗi khi lấy số lượng user:", error);
  }
}

async function increaseUser() {
  try {
    const response = await fetch("http://localhost:3000/api/increase-ref", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ proxyIp: "123.45.67.89" }),
    });

    const data = await response.json();
    console.log("Tăng user thành công:", data);
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
  }
}

increaseUser(); // Gọi hàm khi tải trang
