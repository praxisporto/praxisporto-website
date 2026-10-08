// The demo runs on the practice PC. On phones and small touch tablets every link to
// the demo leads to the page with the tour and "Demo-Link per E-Mail" instead.
const mobile = window.matchMedia("(max-width: 700px), (pointer: coarse) and (max-width: 1024px)");
const route = () => {
  for (const a of document.querySelectorAll<HTMLAnchorElement>("a[data-demo]")) {
    a.href = mobile.matches ? "/demo-am-computer/" : "/demo/";
  }
};
route();
mobile.addEventListener("change", route);
