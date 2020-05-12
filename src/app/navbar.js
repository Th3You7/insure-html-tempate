const toggle = () => {
  const open = document.getElementById("open");
  const close = document.getElementById("close");
  const nav = document.getElementById("nav");

  open.addEventListener("click", (e) => {
    e.target.classList.add("hidden");
    close.classList.remove("hidden");

    nav.classList.add("active");
  });

  close.addEventListener("click", (e) => {
    e.target.classList.add("hidden");
    open.classList.remove("hidden");

    nav.classList.remove("active");
  });
};

export default toggle;
