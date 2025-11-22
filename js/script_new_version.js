// Ano dinâmico no rodapé
document.getElementById("year").textContent = new Date().getFullYear();

// Navbar link active no scroll
const sections = document.querySelectorAll("main section, header.hero");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

function onScroll() {
  const scrollPos = window.scrollY + 120;
  sections.forEach((section) => {
    const id = section.getAttribute("id");
    if (!id) return;
    const offsetTop = section.offsetTop;
    const offsetHeight = section.offsetHeight;

    if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === "#" + id);
      });
    }
  });
}

window.addEventListener("scroll", onScroll);
onScroll();

// Animação de entrada (IntersectionObserver)
const animatedItems = document.querySelectorAll(".js-animate");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

animatedItems.forEach((item) => observer.observe(item));

