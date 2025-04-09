let currentPage = 1;
const correctPassword = "123456";  // Mật khẩu mặc định

function nextPage(page) {
  // Ẩn tất cả các trang
  for (let i = 1; i <= 5; i++) {
    document.getElementById('page' + i).classList.add('hidden');
  }

  // Hiện trang hiện tại
  document.getElementById('page' + page).classList.remove('hidden');
  currentPage = page;
}

function checkPassword(stage) {
  let inputPassword = "";
  let errorMessage = "";
  
  // Xác định mật khẩu người dùng nhập vào tùy theo trang
  if (stage === 1) {
    inputPassword = document.getElementById('password1').value;
    errorMessage = 'error-message1';
  } else if (stage === 2) {
    inputPassword = document.getElementById('password2').value;
    errorMessage = 'error-message2';
  } else if (stage === 3) {
    inputPassword = document.getElementById('password3').value;
    errorMessage = 'error-message3';
  }

  // Kiểm tra mật khẩu
  if (inputPassword === correctPassword) {
    nextPage(currentPage + 1); // Chuyển sang trang tiếp theo
  } else {
    document.getElementById(errorMessage).classList.remove('hidden'); // Hiển thị thông báo lỗi
  }
}

// Bắt đầu trang đầu tiên
nextPage(1);
