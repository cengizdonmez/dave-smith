document.addEventListener("DOMContentLoaded", function (e) {
  //Slider
  swiper = new Swiper(".product-swiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: true,
    on: {
      init() {
        this.el.addEventListener("mouseenter", () => {
          this.autoplay.stop();
        });

        this.el.addEventListener("mouseleave", () => {
          this.autoplay.start();
        });
      },
    },
    breakpoints: {
      1: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  swiper = new Swiper(".gifts-category-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    autoplay: { delay: 4000 },
    on: {
      init() {
        this.el.addEventListener("mouseenter", () => {
          this.autoplay.stop();
        });

        this.el.addEventListener("mouseleave", () => {
          this.autoplay.start();
        });
      },
    },
    breakpoints: {
      1: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
  // Hamburger menu
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".header-responsive-items");
  const body = document.querySelector("body");
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    nav.classList.toggle("open");
    if (body.style.overflow === "hidden") {
      body.style.overflow = "initial";
    } else {
      body.style.overflow = "hidden";
    }
  });

  const products = [
    {
      name: "Ladies Socks",
      image: "./assets/images/product/ladies-socks.png",
      for: "3 for 2",
      price: "",
    },
    {
      name: "Men's Country Check Shirts",
      image: "./assets/images/product/mens-country-check-shirts.png",
      for: "2 for",
      price: "£25",
    },
    {
      name: "Ladies Tweed Blazers",
      image: "./assets/images/product/ladies-tweed-blazers.png",
      for: "",
      price: "£150",
    },
    {
      name: "Kilburn Yard Boots",
      image: "./assets/images/product/kilburn-yard-boots.png",
      for: "",
      price: "£60",
    },
    {
      name: "Navy T-Shirt",
      image: "./assets/images/product/navy-tshirt.png",
      for: "",
      price: "£15",
    },
    {
      name: "Green T-Shirt",
      image: "./assets/images/product/green-tshirt.png",
      for: "",
      price: "£15",
    },
  ];
  const gifts = [
    {
      name: "Gifts For Horse Lovers",
      image: "./assets/images/gifts/gifts-for-horse-lovers.png",
    },
    {
      name: "Gifts For Farmers",
      image: "./assets/images/gifts/gifts-for-farmers.png",
    },
    {
      name: "Gifts For Dog Walkers",
      image: "./assets/images/gifts/gifts-for-dog-walkers.png",
    },
    {
      name: "Gifts For Farmers",
      image: "./assets/images/gifts/gifts-for-farmers.png",
    },
    {
      name: "Gifts For Horse Lovers",
      image: "./assets/images/gifts/gifts-for-horse-lovers.png",
    },
  ];

  // Product list cards
  let productsContainer = document.getElementById("product");
  const mappedProducts = products.map((product, index) => {
    return `<div class="swiper-slide" key=${index}>
              <a href="#" class="link w-100">
                <div class="card">
                  <figure><img src=${product.image} class="card-img-top" alt="${product.name}"></figure>
                  <div class="card-body">
                    <h5 class="card-title">${product.for} ${product.price}</h5>
                    <button href="#" class="card-link btn btn-link p-0 text-decoration-none">${product.name}</button>
                  </div>
                </div>
              </a>
            </div>`;
  });
  productsContainer.innerHTML = mappedProducts.join("");

  // Gifts category list cards
  let giftsContainer = document.getElementById("gifts");
  const mappedGifts = gifts.map((gifts, index) => {
    return `<div class="swiper-slide" key=${index}>
              <a href="#" class="link w-100">
                <div class="card">
                  <figure><img src=${gifts.image} class="card-img-top" alt="${gifts.name}"></figure>
                  <div class="card-body">
                    <button href="#" class="card-link btn btn-primary">
                    ${gifts.name}<i class="fa-solid fa-angle-right ms-2"></i>
                    </button>
                  </div>
                </div>
              </a>
            </div>`;
  });
  giftsContainer.innerHTML = mappedGifts.join("");

  //Countdown
  var countDownDate = new Date("May 15, 2022 15:37:25").getTime();
  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    days = days < 10 ? "0" + days : days;
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    hours = hours < 10 ? "0" + hours : hours;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    seconds = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById("timer").innerHTML =
      days +
      "<span>:</span>" +
      hours +
      "<span>:</span>" +
      minutes +
      "<span>:</span>" +
      seconds;
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "Time's up";
    }
  }, 1000);
});

//Load animation
var anim = document.querySelectorAll(".anim");
window.addEventListener("load", function () {
  anim.forEach(function (el) {
    el.classList.add("active");
  });
});
