// =========================
// NAVBAR SCROLL EFFECT
// =========================

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if(!navbar){
    return;
  }

  if(window.scrollY > 50){
    navbar.style.background = "#ffffffee";
    navbar.style.backdropFilter = "blur(10px)";
    navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.05)";
  }
  else{
    navbar.style.background = "#ffffffda";
    navbar.style.backdropFilter = "blur(10px)";
    navbar.style.boxShadow = "none";
  }
});


// =========================
// PRODUCT FILTER
// =========================

const filterButtons = document.querySelectorAll(".filter-buttons button");
const productCards = document.querySelectorAll(".product-card");

if(filterButtons.length && productCards.length){
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      button.classList.add("active");
      const filter = button.getAttribute("data-filter");

      productCards.forEach((card) => {
        if(filter === "all" || card.classList.contains(filter)){
          card.style.display = "block";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 100);
        }
        else{
          card.style.opacity = "0";
          card.style.transform = "translateY(40px)";
          setTimeout(() => {
            card.style.display = "none";
          }, 300);
        }
      });
    });
  });
}


// =========================
// FADE IN ANIMATION
// =========================

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.classList.add("show");

    }

  });

},{
  threshold:0.15
});


const hiddenElements = document.querySelectorAll(
  ".product-card, .luxury-banner, .newsletter, .faq-item"
);

hiddenElements.forEach((el) => observer.observe(el));

// =========================
// FAQ TOGGLE
// =========================

const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach((btn) => {

  btn.addEventListener("click", () => {

    const item = btn.closest(".faq-item");

    if(!item){
      return;
    }

    const alreadyActive = item.classList.contains("active");

    document.querySelectorAll(".faq-item").forEach((faq) => {

      faq.classList.remove("active");

      const icon = faq.querySelector("i");

      if(icon){
        icon.classList.remove("fa-chevron-up");
        icon.classList.add("fa-chevron-down");
      }

    });

    if(!alreadyActive){

      item.classList.add("active");

      const activeIcon = item.querySelector("i");

      if(activeIcon){
        activeIcon.classList.remove("fa-chevron-down");
        activeIcon.classList.add("fa-chevron-up");
      }

    }

  });

});
