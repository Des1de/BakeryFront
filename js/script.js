const documentReady = () => {
    const header = document.querySelector(".header");
  
    const documentScroll = () => {
      header.classList.toggle("header--scroll", window.scrollY > 0);
    };
  
    document.addEventListener("scroll", documentScroll);
  };
  document.addEventListener("DOMContentLoaded", documentReady);