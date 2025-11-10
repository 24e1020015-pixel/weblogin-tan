// Pages
document.querySelectorAll(".logo").forEach((logo) => {
  logo.addEventListener("click", () => {
    document.querySelector(".front-page").style.display = "block";
    document.querySelector(".login-page").style.display = "none";
    document.querySelector(".signup-page").style.display = "none";
  });
});

document.querySelectorAll(".login").forEach((loginBtn) => {
  loginBtn.addEventListener("click", () => {
    document.querySelector(".front-page").style.display = "none";
    document.querySelector(".login-page").style.display = "block";
    document.querySelector(".signup-page").style.display = "none";
  });
});

document.querySelectorAll(".signup").forEach((signupBtn) => {
  signupBtn.addEventListener("click", () => {
    document.querySelector(".front-page").style.display = "none";
    document.querySelector(".login-page").style.display = "none";
    document.querySelector(".signup-page").style.display = "flex";
  });
});
// End of Pages

// Navigation
const dropdownItems = document.querySelectorAll(".dropdown-hover");

if (window.innerWidth < 1000) {
  const menuIcon = document.querySelector(".menu");
  const navbar = document.querySelector(".navbar");

  menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change");

    if (!navbar.classList.contains("change")) {
      document.querySelectorAll(".nav-dropdown").forEach((dropdown) => {
        dropdown.style.left = "-20rem";
      });
    }
  });

  document.querySelectorAll(".show-dropdown").forEach((link) => {
    link.addEventListener("click", () => {
      link.nextElementSibling.style.left = "0";
    });
  });

  document.querySelectorAll(".dropdown-heading-link").forEach((headingLink) => {
    headingLink.addEventListener("click", () => {
      headingLink.parentElement.parentElement.style.left = "-20rem";
    });
  });
} else {
  dropdownItems.forEach((dropdownItem) => {
    dropdownItem.addEventListener("mouseover", () => {
      dropdownItem.lastElementChild.style.cssText =
        "opacity: 1; visibility: visible";
      document.querySelector(".navbar-wrapper").style.background =
        "linear-gradient(to right, #066399, #2f8fdf, #066399)";
      dropdownItem.firstElementChild.firstElementChild.style.transform =
        "rotate(180deg)";
    });
    dropdownItem.addEventListener("mouseout", () => {
      dropdownItem.lastElementChild.style.cssText =
        "opacity: 0; visibility: hidden";
      document.querySelector(".navbar-wrapper").style.background = "none";
      dropdownItem.firstElementChild.firstElementChild.style.transform =
        "rotate(0)";
    });
  });
}

window.addEventListener("resize", () => {
  window.location.reload();
});

// End of Navigation
// =============================
// Nút Log In trong form
// =============================
const loginFormBtn = document.querySelector(".form-login-btn");

if (loginFormBtn) {
  loginFormBtn.addEventListener("click", () => {
    // Giả sử bạn muốn khi bấm Log In sẽ quay lại trang chính
    document.querySelector(".front-page").style.display = "block";
    document.querySelector(".login-page").style.display = "none";
    document.querySelector(".signup-page").style.display = "none";

    // (Tùy chọn) Hiển thị thông báo đăng nhập thành công
    alert("Đăng nhập thành công!");
  });
}
