let nav_li = document.querySelector(".nav_divHide");
let nav_li1 = document.querySelector(".nav_divHide1");
let nav_li2 = document.querySelector(".nav_divHide2");

// Define the function globally
function toggleDiv() {
  nav_li.classList.toggle("hidden");
}
// // Define the function globally
// function toggleDiv1() {
//   nav_li1.classList.toggle("hidden1");
//   nav_li2.classList.add("hidde_oneBe");
//   nav_li1.classList.remove("hidde_oneBe");

// }
// // Define the function globally
// function toggleDiv2() {
//   nav_li1.classList.add("hidde_oneBe");
//   nav_li2.classList.remove("hidde_oneBe");

//   nav_li2.classList.toggle("hidden2");
// }
// Define the toggleDiv1 function
function toggleDiv1() {
  const div1 = document.querySelector(".nav_divHide1");
  const div2 = document.querySelector(".nav_divHide2");

  div1.classList.toggle("hidden1"); // Toggle visibility for Div 1
  if (!div2.classList.contains("hidden1")) {
    div2.classList.add("hidden1"); // Ensure Div 2 is hidden1
  }
}

// Function to toggle Div 2 and hide Div 1
function toggleDiv2() {
  const div1 = document.querySelector(".nav_divHide1");
  const div2 = document.querySelector(".nav_divHide2");

  div2.classList.toggle("hidden1"); // Toggle visibility for Div 2
  if (!div1.classList.contains("hidden1")) {
    div1.classList.add("hidden1"); // Ensure Div 1 is hidden
  }
}
//
// Function to fetch translations from translator.json
function fetchTranslations(lang) {
  fetch("./asset/translator/translator.json") // Path to the translations JSON file
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error fetching translations");
      }
      return response.json();
    })
    .then((translations) => {
      applyTranslations(translations[lang]);
      adjustTextSize(lang); // Ensure the text size adjusts when language changes
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Function to apply translations to the DOM
function applyTranslations(translations) {
  // Iterate over all elements with a data-key attribute
  document.querySelectorAll("[data-key]").forEach((element) => {
    const key = element.getAttribute("data-key");
    if (translations[key]) {
      element.textContent = translations[key];
    }
  });
}

// Function to adjust text size based on language
function adjustTextSize(lang) {
  // Get all elements that need their text size adjusted
  const sections = ["header_navtext", "footer", "main-content"];

  // Remove both language size classes to reset
  sections.forEach((section) => {
    const sectionElements = document.querySelectorAll(`.${section}`);
    sectionElements.forEach((element) => {
      element.classList.remove("text-size-marathi", "text-size-english");
    });
  });

  // Add the appropriate class based on the selected language
  if (lang === "en") {
    sections.forEach((section) => {
      const sectionElements = document.querySelectorAll(`.${section}`);
      sectionElements.forEach((element) => {
        element.classList.add("text-size-english");
      });
    });
  } else if (lang === "mr") {
    sections.forEach((section) => {
      const sectionElements = document.querySelectorAll(`.${section}`);
      sectionElements.forEach((element) => {
        element.classList.add("text-size-marathi");
      });
    });
  }
}

let navindex_btnw4 = document.getElementById("navindex_btnw"); // Remove the '#' symbol
const listItems = document.querySelectorAll(".navbar-nav li");
let small_tsa2 = document.querySelectorAll(".small_tsa");
let small_tspanT2 = document.querySelectorAll(".small_tspanT1");

let s4_h2_w1 = document.getElementById("s4_h2_w");

function setLanguage(en) {
  listItems.forEach((item) => {
    item.classList.remove("mar_left");
    item.classList.remove("nav_index_btnw");
  });

  small_tsa2.forEach((span1) => {
    span1.classList.add("small_ts1");
  });
  small_tspanT2.forEach((spanh) => {
    spanh.classList.add("small_tspanT");
  });

  // small_tsa1.classList.add('small_ts2');

  navindex_btnw4.classList.add("navindex_btnw");

  s4_h2_w1.classList.add("s4_h2width");
}

function setLanguage(mr) {
  const listItems = document.querySelectorAll(".navbar-nav li");

  listItems.forEach((item) => {
    item.classList.add("mar_left");
  });

  navindex_btnw4.classList.remove("navindex_btnw");
}

// ************

function addMargin() {
  listItems.forEach((item) => {
    item.classList.remove("mar_left");
    item.classList.remove("nav_index_btnw");
  });

  small_tsa2.forEach((span1) => {
    span1.classList.add("small_ts1");
  });
  small_tspanT2.forEach((spanh) => {
    spanh.classList.add("small_tspanT");
  });

  // small_tsa1.classList.add('small_ts2');

  navindex_btnw4.classList.add("navindex_btnw");

  s4_h2_w1.classList.add("s4_h2width");
}

// Function to remove margin
function removeMargin() {
  const listItems = document.querySelectorAll(".navbar-nav li");

  listItems.forEach((item) => {
    item.classList.add("mar_left");
  });

  navindex_btnw4.classList.remove("navindex_btnw");
}

// Set the language (use 'en' for English, 'mr' for Marathi, etc.)
function setLanguage(lang) {
  fetchTranslations(lang); // Fetch translations and adjust text size
}

// Default language is Marathi
setLanguage("mr");

// section 4
$(".sec4owl-carousel").owlCarousel({
  autoplay: true,
  slideTransition: "linear",
  autoplayTimeout: 3000,
  autoplaySpeed: 3000,

  stagePadding: 50,
  loop: true,
  margin: 10,
  // navText: [nextImg4, prevImg4],

  nav: false,
  dots: false,
  responsive: {
    320: {
      items: 1,
    },
    500: {
      items: 1.5,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 3,
    },
    1300: {
      items: 3,
    },
    1400: {
      items: 4,
    },
  },
});
$(".sec4owl-carouselb").owlCarousel({

  items:4,
  loop:true,
  margin:10,
  autoplay:true,
  autoplayTimeout:10000,
  autoplayHoverPause:false,


  autoplaySpeed: 5000,
  // animateOut: "fadeOut",
  // stagePadding: 50,
  loop: true,
  // margin: 10,
  // navText: [nextImg4, prevImg4],

  nav: false,
  dots: false,
  responsive: {
    320: {
      items: 1,
    },
  },
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

// Get all toggle links and corresponding divs
const toggleLinks = document.querySelectorAll(".toggle-link");
const toggleDivs = document.querySelectorAll(".toggle-div");

toggleLinks.forEach((link, index) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default link behavior

    // Hide all divs first
    toggleDivs.forEach((div, i) => {
      if (i !== index) {
        div.classList.remove("index_visible");
        div.classList.add("index_hide");
      }
    });

    // Toggle the clicked div
    toggleDivs[index].classList.toggle("index_hide");
    toggleDivs[index].classList.toggle("index_visible");
  });
});

//********************************* */
