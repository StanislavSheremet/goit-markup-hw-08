(() => {
  const refs = {
    openNavBtn: document.querySelector("[data-nav-open]"),
    closeNavBtn: document.querySelector("[data-nav-close]"),
    nav: document.querySelector("[data-nav]"),
  };

  refs.openNavBtn.addEventListener("click", toggleNav);
  refs.closeNavBtn.addEventListener("click", toggleNav);

  function toggleNav() {
    refs.nav.classList.toggle("is-hidden");
  }
})();
