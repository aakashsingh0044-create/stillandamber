const announcement = document.querySelector(".announcement");
const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector(".mobile-nav");
const bagCount = document.querySelector(".bag-button span");
const toast = document.querySelector(".toast");
let count = 0;

if (announcement) {
  announcement.querySelector("button").addEventListener("click", () => {
    announcement.remove();
    if (mobileNav) mobileNav.style.top = "76px";
  });
}

if (menuButton && mobileNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelectorAll(".quick-add").forEach((button) => {
  button.addEventListener("click", () => {
    count = 1;
    if (bagCount) bagCount.textContent = "!";
    if (toast) {
      toast.classList.add("show");
      window.setTimeout(() => toast.classList.remove("show"), 1800);
    }
  });
});

document.querySelectorAll(".swatches button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".swatches button.active").classList.remove("active");
    button.classList.add("active");
  });
});

const newsletterForm = document.querySelector(".newsletter form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = event.currentTarget.querySelector("input");
    document.querySelector(".form-message").textContent = "Welcome to the studio.";
    input.value = "";
  });
}

document.querySelectorAll(".contact-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = form.querySelector(".form-message");
    if (message) message.textContent = "Thank you. We will be in touch shortly.";
    form.reset();
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
