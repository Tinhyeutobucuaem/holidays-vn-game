let currentPage = 1;

function nextPage(page) {
  // Ẩn tất cả các trang
  for (let i = 1; i <= 6; i++) {
    document.getElementById('page' + i).classList.add('hidden');
  }

  // Hiện trang hiện tại
  document.getElementById('page' + page).classList.remove('hidden');
  currentPage = page;
}

function uploadImage() {
  const file = document.getElementById("upload-image").files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById("cover-img").src = e.target.result;
    }
    reader.readAsDataURL(file);
  }
}

function checkPassword() {
  const correctPassword = "123456"; // Mật khẩu mặc định
  const inputPassword = document.getElementById('password').value;
  
  if (inputPassword === correctPassword) {
    nextPage(6); // Chuyển đến trang cuối cùng
  } else {
    document.getElementById('error-message').classList.remove('hidden');
  }
}

// Bắt đầu trang đầu tiên
nextPage(1);
