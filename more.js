document.addEventListener("DOMContentLoaded", (event) => {
  const elements = [
    "Mechanical engineering",
    "Civil engineering",
    "Electrical engineering",
    "Electronics engineering",
    "MERN STACK ",
    "Cyber Security",
    "Artificial intelligence",
    "Machine learning",
    "Plastic Engg",
  ];
  let currentIndex = 0;
  const typewriterElement = document.getElementById("typewriter");
  let currentText = "";
  let isDeleting = false;
  let timer;

  function type() {
    const fullText = elements[currentIndex];

    if (isDeleting) {
      currentText = fullText.substring(0, currentText.length - 1);
    } else {
      currentText = fullText.substring(0, currentText.length + 1);
    }

    typewriterElement.textContent = currentText;

    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => {
        isDeleting = true;
        type();
      }, 1000);
    } else if (isDeleting && currentText === "") {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % elements.length;
      timer = setTimeout(type, 500);
    } else {
      timer = setTimeout(type, isDeleting ? 50 : 150);
    }
  }

  type();
});

$(".container").click(function () {
  $(".container").removeClass("active");
  $(this).addClass("active");
});
document.addEventListener("DOMContentLoaded", function () {
  const communitySection = document.querySelector(".community");

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function onScroll() {
    if (isInViewport(communitySection)) {
      communitySection.classList.add("in-view");
    } else {
      communitySection.classList.remove("in-view");
    }
  }

  window.addEventListener("scroll", onScroll);
  onScroll(); // Run the function initially in case the element is already in view
});
// Get elements
const downloadBtn = document.getElementById("downloadBtn");
const popupForm = document.getElementById("popupForm");
const closeBtn = document.querySelector(".close");
const downloadForm = document.getElementById("downloadForm");

// Show the popup when the download button is clicked
downloadBtn.addEventListener("click", () => {
  popupForm.style.display = "block";
});

// Hide the popup when the close button is clicked
closeBtn.addEventListener("click", () => {
  popupForm.style.display = "none";
});

// Hide the popup when the user clicks outside of the popup content
window.addEventListener("click", (event) => {
  if (event.target === popupForm) {
    popupForm.style.display = "none";
  }
});

// Handle form submission
downloadForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Perform any necessary validation or data processing here

  // Trigger the download
  const link = document.createElement("a");
  link.href = "gradtechsession.pdf";
  link.download = "gradtechsession.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Hide the popup after form submission
  popupForm.style.display = "none";
});

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion, index) => {
  const header = accordion.querySelector(".accordion__header");
  const content = accordion.querySelector(".accordion__content");
  const icon = accordion.querySelector("#accordion-icon");

  header.addEventListener("click", () => {
    const isOpen = content.style.height === `${content.scrollHeight}px`;

    accordions.forEach((a, i) => {
      const c = a.querySelector(".accordion__content");
      const ic = a.querySelector("#accordion-icon");

      c.style.height = i === index && !isOpen ? `${c.scrollHeight}px` : "0px";
      ic.classList.toggle("ri-add-line", i !== index || !isOpen);
      ic.classList.toggle("ri-subtract-fill", i === index && !isOpen);
    });
  });
});
