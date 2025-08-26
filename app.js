$(document).ready(function () {
  $(".product-slider").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".testimonial-slider").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
       
     
    ],
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("mobile-menu");
  const navbar = document.getElementById("nav");
  const overlay = document.getElementById("overlay");

  menuToggle.addEventListener("click", function () {
    menuToggle.classList.toggle("active");
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");

    if (navbar.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  document.querySelectorAll(".menu-list").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navbar.classList.remove("active");
      overlay.classList.remove("active");
      document.body.style.overflow = "auto";
    });
  });

  overlay.addEventListener("click", function () {
    menuToggle.classList.remove("active");
    navbar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "auto";
  });
});

const products = [
  {
    name: "Avocado",
    image: "Assests/Images/pr-1.png",
    discount: "20%",
  },
  {
    name: "Beef",
    image: "Assests/Images/pr-2.png",
    discount: "20%",
  },
  {
    name: "Lime",
    image: "Assests/Images/pr-3.png",
    discount: "20%",
  },
  {
    name: "Broccoli ",
    image: "Assests/Images/pr-4.png",
    discount: "20%",
  },
  {
    name: "Orange",
    image: "Assests/Images/pr-5.png",
    discount: "20%",
  },
  {
    name: "Apricot",
    image: "Assests/Images/pr-6.png",
    discount: "20%",
  },
  {
    name: "Apple",
    image: "Assests/Images/pr-7.png",
    discount: "20%",
  },
  {
    name: "Kiwi",
    image: "Assests/Images/pr-8.png",
    discount: "20%",
  },
];
const container = document.getElementById("product-list");
const slider = document.getElementById("product-slider");

products.forEach((product) => {
  container.innerHTML += `
   <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div class="product-box">
                        <div class="pr-img"><img src="${product.image}" alt="${product.name}"></div>
                        <div class="pr-text">
                            <h5>${product.name}</h5>
                            <div class="pr-flex">
                                <div class="cart-btn"><a href=""><i class="fa-solid fa-cart-shopping"></i>Add to
                                        cart</a></div>
                            </div>
                            <div class="off">${product.discount}</div>
                            <div class="wish"><a href=""><i class="fa-regular fa-heart"></i></a></div>
                        </div>
                    </div>
                </div>
  `;
});

products.forEach((product) => {
  slider.innerHTML += `
   <div class="col-md-3 col-sm-6 col-12">
                    <div class="product-box">
                        <div class="pr-img"><img src="${product.image}" alt="${product.name}"></div>
                        <div class="pr-text">
                            <h5>${product.name}</h5>
                            <div class="pr-flex">
                                <div class="cart-btn"><a href=""><i class="fa-solid fa-cart-shopping"></i>Add to
                                        cart</a></div>
                            </div>
                            <div class="off">${product.discount}</div>
                            <div class="wish"><a href=""><i class="fa-regular fa-heart"></i></a></div>
                        </div>
                    </div>
                </div>
  `;
});
