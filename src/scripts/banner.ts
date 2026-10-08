// Closable demo banner (inner pages) and the phone bar on the start page.
export {};
const KEY = "pp-banner-closed";
const isClosed = () => { try { return sessionStorage.getItem(KEY) === "1"; } catch { return false; } };
const remember = () => { try { sessionStorage.setItem(KEY, "1"); } catch { /* not important */ } };

const topBar = document.querySelector<HTMLElement>("[data-topbanner]");
if (topBar && !isClosed()) {
  topBar.hidden = false;
  topBar.querySelector("[data-topbanner-close]")?.addEventListener("click", () => { topBar.hidden = true; remember(); });
}

const bar = document.querySelector<HTMLElement>("[data-stickybar]");
if (bar && !isClosed()) {
  let dismissed = false;
  let formVisible = false;
  const update = () => { bar.hidden = dismissed || formVisible || window.scrollY < window.innerHeight * 0.9; };
  bar.querySelector("[data-stickybar-close]")?.addEventListener("click", () => { dismissed = true; remember(); update(); });
  const target = document.getElementById("demo-starten");
  if (target && "IntersectionObserver" in window) {
    new IntersectionObserver((e) => { formVisible = e.some((x) => x.isIntersecting); update(); }).observe(target);
  }
  window.addEventListener("scroll", update, { passive: true });
  update();
}
