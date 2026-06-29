const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("menu-open", open);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      document.body.classList.remove("menu-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const form = document.querySelector(".application-form");

if (form) {
  const steps = [...form.querySelectorAll(".form-step")];
  const progressLabel = form.querySelector(".form-progress b");
  const progressBar = form.querySelector(".form-progress i");
  const routes = {
    auto: { title: "Автомобільний сектор", url: "auto.html" },
    business: { title: "Мікробізнес і самозайнятість", url: "business.html" },
    agro: { title: "Мале агровиробництво", url: "agro.html" },
    diagnostic: { title: "Діагностичний маршрут", url: "programs.html" },
  };
  let current = 0;

  function showStep(index) {
    current = index;
    steps.forEach((step, stepIndex) => step.classList.toggle("active", stepIndex === index));
    if (progressLabel) progressLabel.textContent = String(index + 1);
    if (progressBar) progressBar.style.width = `${(index + 1) * 33.33}%`;
  }

  function validStep() {
    const fields = [...steps[current].querySelectorAll("[required]")];
    for (const field of fields) {
      if (!field.checkValidity()) {
        field.reportValidity();
        return false;
      }
    }
    return true;
  }

  function normalize(value) {
    return String(value || "").trim().toLowerCase();
  }

  function getRecommendedRoute() {
    const track = normalize(form.elements.interestedTrack?.value);
    const need = normalize(form.elements.mainNeed?.value);
    if (track === "auto" || need.includes("робота") || need.includes("професія")) return routes.auto;
    if (track === "business" || need.includes("власна справа")) return routes.business;
    if (track === "agro" || need.includes("агровиробництво")) return routes.agro;
    return routes.diagnostic;
  }

  form.querySelectorAll(".form-next").forEach((button) => {
    button.addEventListener("click", () => {
      if (validStep()) showStep(Math.min(current + 1, steps.length - 1));
    });
  });

  form.querySelectorAll(".form-back").forEach((button) => {
    button.addEventListener("click", () => showStep(Math.max(current - 1, 0)));
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!validStep()) return;

    const route = getRecommendedRoute();
    steps.forEach((step) => step.classList.remove("active"));
    form.querySelector(".form-progress").style.display = "none";
    form.querySelector(".route-result b").textContent = route.title;
    form.querySelector(".route-link").href = route.url;
    form.querySelector(".form-success").classList.add("show");
  });

  form.querySelector(".form-reset")?.addEventListener("click", () => {
    form.reset();
    form.querySelector(".form-success").classList.remove("show");
    form.querySelector(".form-progress").style.display = "block";
    showStep(0);
  });
}
