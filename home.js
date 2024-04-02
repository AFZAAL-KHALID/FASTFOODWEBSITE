let tl = gsap.timeline();
let width = window.innerWidth;

let intro = document.querySelector(".intro");

try {
  // intro              ---------------------*
  function introFuntion() {
    tl.from(".burgerImg ,.ESPICIAL, .BURGER", {
      y: -200,
      opacity: 0,
      duration: 1,
      stagger: 0.7,
    });
    if (width < 770) {
      tl.from(".YUMMY span", {
        y: -200,
        opacity: 0,
        duration: 0.7,
        stagger: 0.2,
      });
    } else {
      tl.from(".YUMMY span", {
        x: -200,
        opacity: 0,
        duration: 0.7,
        stagger: 0.2,
      });
    }

    tl.to(intro, {
      visibility: "hidden",
    });

    // functionEND
  }
  introFuntion();


  // first container opening   --------------*
  function firstContainer() {
    if (width < 770) {
      tl.from(".left-Blue,.right-Yellow", {
        opacity: 0,
        height: 0,
        transformOrigin: "0% 0%",
        ease: "Power2.easeOut",
        duration: 1,
        stagger: 0.8,
      });

      tl.from(".navBar ul li, .yummyHeading, .mainButton", {
        y: -100,
        opacity: 0,
        ease: "power2.linear",
        stagger: 0.2,
      });
    } else {
      tl.from(".left-Blue,.right-Yellow", {
        opacity: 0,
        width: 0,
        transformOrigin: "0% 0%",
        ease: "Power2.easeOut",
        duration: 1,
        stagger: 0.5,
      });
      // menu items animation
      tl.from(".navBar ul li, .yummyHeading, .mainButton", {
        y: -100,
        opacity: 0,
        ease: "power2.linear",
        stagger: 0.3,
      });
    }
  }
  firstContainer();



  function toggleTheme() {
    var checkbox = document.querySelector("#toggleBox");
    var toggleBall = document.querySelector(".toggleBall");
    var themepopup = document.querySelector(".themepopup");

    var ContainerFirst = document.querySelector(".ContainerFirst");
    var leftBlue = document.querySelector(".left-Blue");
    var scrollTexth1 = document.querySelector(".scroll-Text h1");
    var rightYellow = document.querySelector(".right-Yellow");
    var Slide1right = document.querySelector(".Slide-1-right");
    var bestword = document.querySelector(".bestword");
    var MENU = document.querySelector("#MENU");
    var ContainerThird = document.querySelector(".ContainerThird");
    var SecondSlide1 = document.querySelector("#Second-Slide-1");
    var forthright = document.querySelector(".forth-right");
    var ContainerFifthBottom = document.querySelector(".ContainerFifthBottom");
    var fixedTopArrow = document.querySelector(".fixedTopArrow a");

    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        toggleBall.style.left = "70%";
        themepopup.innerText = "light Theme";

        ContainerFirst.style.backgroundImage =
          "linear-gradient(to right bottom ,#22272d,#00303d,#232323)";
        leftBlue.style.backgroundImage =
          "linear-gradient(to right, #272c36,#575757)";
        scrollTexth1.style.color = "#d6ccc2";
        scrollTexth1.style.opacity = 0.1;
        rightYellow.style.boxShadow = "none";
        rightYellow.style.boxShadow = "none";
        Slide1right.style.backgroundColor = "#272c36";
        bestword.style.color = "hsl(220, 16%, 18%)";
        MENU.style.color = "WHITE";
        ContainerThird.style.backgroundColor = "#272c36";
        SecondSlide1.style.backgroundColor = "#272c36";
        forthright.style.backgroundImage =
          "linear-gradient(to right bottom ,#22272d,#00303d,#232323)";
        ContainerFifthBottom.style.backgroundColor = "#272c36";
        fixedTopArrow.style.color = "white";
      } else {
        toggleBall.style.left = "0%";
        themepopup.innerText = "dark Theme";

        ContainerFirst.style.backgroundImage =
          "linear-gradient(to right bottom ,#22272d,#00b4d8,#0077b6)";
        leftBlue.style.backgroundImage =
          "linear-gradient(to right, #3dd5f3,#3dd5f397)";
        scrollTexth1.style.Color = "#4950576e";
        scrollTexth1.style.opacity = 0.1;
        rightYellow.style.boxShadow =
          "-5px 5px 20px 5px #2a474d74,5px 5px 20px 5px #fcc22f8e";
        Slide1right.style.backgroundColor = "orange";
        bestword.style.color = "orange";
        MENU.style.color = "BLACK";
        ContainerThird.style.backgroundColor = "white";
        SecondSlide1.style.backgroundColor = "white";
        forthright.style.backgroundColor = "#36CCEA";
        forthright.style.backgroundImage = "none";
        ContainerFifthBottom.style.backgroundColor = "white";
        fixedTopArrow.style.color = "black";
      }
    });
  }
  toggleTheme();



  function openingMenuBar() {
    var menuIcon = document.querySelector("#menuIcon");
    var HideNavBar = document.querySelector(".Hide-NavBar");
    var arrow = document.querySelector(".arrow");
    var hideNumber = 0;
    var sliderDiv = document.querySelector(".sliderDiv");

    menuIcon.addEventListener("click", function () {
      if (hideNumber == 0) {
        sliderDiv.style.visibility = "hidden";
        HideNavBar.style.visibility = "visible";
        // arrow.style.visibility = "visible";
        console.log(0);
        hideNumber = 1;
        
      }
      else if(hideNumber == 1){
        sliderDiv.style.visibility = "visible";
        HideNavBar.style.visibility = "hidden";
        // arrow.style.visibility = "hidden";
        console.log(1);
        hideNumber = 0;
      }
    });

    // arrow.addEventListener("click", function (e) {
    //   let parentOfarrow = e.target.parentElement;
    //   parentOfarrow.style.visibility = "hidden";
    //   arrow.style.visibility = "hidden";
    //   let sliderDiv = document.querySelector(".sliderDiv");
    //   sliderDiv.style.visibility = "visible";
    //   hideNumber = 0;
    // });
  }
  openingMenuBar();



  function swiperjsBurgers() {
    var swiper = new Swiper(".mySwiper-ONE", {
      spaceBetween: 20,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: "",
        clickable: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  swiperjsBurgers();

  // second slider-----------------
  function secondSlider() {
    const slides = document.querySelector(".slides");
    const slideItems = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const paginationContainer = document.querySelector(".pagination");

    let currentIndex = 0;

    function updateSlider() {
      slides.style.transform = `translateX(${-currentIndex * 100}%)`;
    }

    function updatePagination() {
      paginationContainer.innerHTML = "";
      for (let i = 0; i < slideItems.length; i++) {
        const paginationBtn = document.createElement("button");
        paginationBtn.textContent = i + 1;
        paginationBtn.addEventListener("click", () => goToSlide(i));
        paginationContainer.appendChild(paginationBtn);
      }
    }

    function goToSlide(index) {
      currentIndex = index;
      updateSlider();
      updatePagination();
    }

    function changeSlide(direction) {
      currentIndex += direction;
      if (currentIndex < 0) {
        currentIndex = slideItems.length - 1;
      } else if (currentIndex >= slideItems.length) {
        currentIndex = 0;
      }
      updateSlider();
      updatePagination();
    }

    prevBtn.addEventListener("click", () => changeSlide(-1));
    nextBtn.addEventListener("click", () => changeSlide(1));

    updatePagination();
  }
  secondSlider();

  function BestBurgerAnimation() {
    tl.from("#blueWhite-Text,.orangeBrush, .bestBurger, .coke", {
      opacity: 0,
      X: -100,
      duration: 1,
      ease: "Power2.linear",
      stagger: 1,
      scrollTrigger: {
        trigger: ".ContainerSecond",
        scroller: "body",
        start: "15%, 50%",
        end: "45% 50%",
        // markers:true,
        scrub: 3,
      },
    });
  }
  BestBurgerAnimation();



  function dontClick() {
    let DontClick = document.querySelector(".dontClick");
    DontClick.addEventListener("click", function () {
      tl.to("#balon-Id, .pinkBundle-baloons", {
        y: -400,
        stagger: 0.14,
        duration: 2,
        opacity: 0,
      });
      setTimeout(() => {
        DontClick.innerHTML = "NOW HAPPY ?";
        DontClick.style.backgroundImage = "none";
        DontClick.style.color = "black";
      }, 3000);
    });
  }
  dontClick();


  function OrangeCircle() {
    let circleOnCursor = document.querySelector(".slider-container");
    let colorCircle = document.querySelector(".orangeCursor");
    let leftWhiteDiv = document.querySelector(".Slide-1-left");
    let rightorangeDiv = document.querySelector(".Slide-1-right");
    let secondSlide = document.querySelector("#Second-Slide-2");
    let thirdSlide = document.querySelector("#Second-Slide-3");
    let forthSlide = document.querySelector("#Second-Slide-4");

    let width = window.width;
    if (width < 770) {
      colorCircle.display = "none";
    } else {
      colorCircle.display = "block";

      circleOnCursor.addEventListener("mouseenter", function (e) {
        colorCircle.style.display= "block";
        colorCircle.style.opacity = 1;
      });
      
      circleOnCursor.addEventListener("mousemove", function (e) {
        console.log(e.x);
        gsap.to(colorCircle, {
          display: "block",
          x: e.x + "px",
          y: e.y + "px",
          duration: 0.2,
          opacity:1
        });
      });
      
      
      circleOnCursor.addEventListener("mouseleave", function (e) {
      colorCircle.style.display = "none";
      colorCircle.style.opacity = 0;
    });
    colorCircle.addEventListener("mousemove", function () {
      colorCircle.style.display = "block";
      colorCircle.style.opacity = 1;
      });
      
      leftWhiteDiv.addEventListener("mousemove", function () {
        
        colorCircle.style.background = "orange";
      });

      rightorangeDiv.addEventListener("mousemove", function () {
        colorCircle.style.background = "white";
      });
      secondSlide.addEventListener("mousemove", function () {
        colorCircle.style.background = "lightgray";
      });

      thirdSlide.addEventListener("mousemove", function () {
        colorCircle.style.background = "lightgreen";
      });
      forthSlide.addEventListener("mousemove", function () {
        colorCircle.style.background = "brown";
      });
    }
  }
  // OrangeCircle();




  // third Slider for Costomer Review ------------------
  function customerReviewSlider() {
    const customSlider = document.querySelector(".custom-slider-container");
    const customSlides = document.querySelector(".custom-slides");
    const customSlideItems = document.querySelectorAll(".custom-slide");

    let customCurrentIndex = 0;

    function updateCustomSlider() {
      customSlides.style.transform = `translateX(${
        -customCurrentIndex * 100
      }%)`;
    }

    function showCustomPrev() {
      customCurrentIndex =
        (customCurrentIndex - 1 + customSlideItems.length) %
        customSlideItems.length;
      updateCustomSlider();
    }

    function showCustomNext() {
      customCurrentIndex = (customCurrentIndex + 1) % customSlideItems.length;
      updateCustomSlider();
    }

    setInterval(showCustomNext, 4000);
  }
  customerReviewSlider();

  function customerReviewRotateDIV() {
    var costomerDiv = document.querySelector(".costomerDiv");
    tl.to(costomerDiv, {
      rotateX: 0,
      duration: 1,
      ease: "power2.linear",
      scrollTrigger: {
        trigger: ".forth-left",
        scroller: "body",
        start: "20%, 50%",
        end: "50% 51%",
        // markers:true,
        scrub: 3,
      },
    });

    // Email section----------------------
    var costomerDiv = document.querySelectorAll("#email-elements");
    tl.from(costomerDiv, {
      x: "-100%",
      opacity: 0,
      stagger: 0.3,
      ease: "power2.linear",
      scrollTrigger: {
        trigger: ".forth-right",
        scroller: "body",
        start: "top, 50%",
        end: "54% 52%",
        // markers:true,
        scrub: 3,
      },
    });
  }
  customerReviewRotateDIV();

  function submitAndChangeColor() {
    var submitButton = document.querySelector(".submitButton");

    submitButton.addEventListener("click", function () {
      let fnameentry = document.querySelector(".name").value.trim();
      let emailentry = document.querySelector(".email").value.trim();
      let messegearea = document.querySelector(".textArea").value.trim();

      console.log(3);
      if (fnameentry !== "" && emailentry !== "" && messegearea !== "") {
        submitButton.style.backgroundColor = "white";
        submitButton.style.color = "black";
      }
    });
  }
  submitAndChangeColor();

  function MapContainerGsap() {
    tl.from(".weAreHere, .Findus, .map-container, .US", {
      scale: 0,
      stagger: 0.5,
      transition: "power2.linear",
      scrollTrigger: {
        trigger: ".ContainerFifthTop",
        scroller: "body",
        scrub: 3,
        start: "top, 50%",
        end: "60%, 40%",
        // markers:"true"
      },
    });
  }
  MapContainerGsap();

  document.addEventListener("DOMContentLoaded", function () {
    function fixedtopArrow() {
      var fixedTopArrow = document.querySelector(".fixedTopArrow");

      window.addEventListener("scroll", function () {
        if (window.pageYOffset > 830) {
          fixedTopArrow.style.visibility = "visible";
        } else {
          fixedTopArrow.style.visibility = "hidden";
        }
      });
    }

    fixedtopArrow();
  });

  function NoLinkYet() {
    var socialIcons = document.querySelectorAll("#social-Icons");
    socialIcons.forEach((element) => {
      element.addEventListener("click", function () {
        alert("Sir, not linked yet!");
      });
    });
  }
  NoLinkYet();
} catch (error) {
  console.log(error);
}
