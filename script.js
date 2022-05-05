document.addEventListener("DOMContentLoaded", () => {

  const burgerMenuBtn = document.querySelector(".header__burger-button");
  
  const headerList = document.querySelector(".header__list");
  
  const closeButton = document.querySelector(".header__burger-close-icon");
  
  const minus = document.querySelector(".xx-99-headphone-sell__minus");
  const value = document.querySelector(".xx-99-headphone-sell__value");
  const plus = document.querySelector(".xx-99-headphone-sell__plus");
  
  let money = document.querySelector(".xx-99-headphone-sell__money");
  

  burgerMenuBtn.addEventListener("click", () => {
    headerList.classList.toggle("open-menu");
  });
  
  let narx = 2.999;
  
  let num = 1;
  value.textContent = num;
  
  plus.addEventListener('click', (e) =>{
    e.preventDefault();
    let ramz = value.textContent = num++;
    let hisob = narx * ramz;
    money.textContent = "$ " + hisob.toFixed(3); 
  })
  
  minus.addEventListener('click', (e) =>{
    e.preventDefault();
    let ramz = value.textContent = num--;
    let hisob = narx * ramz;
    money.textContent = "$ " + hisob.toFixed(3);
  })

  
  
  const saleWrapper = document.querySelector(".sale-wrapper");
  
  const openCard = document.querySelector(".xx-99-headphone-sell__link");
  
  const closeCard = document.querySelector(".sale-wrapper__close-card");
  
  openCard.addEventListener("click", () =>{
    saleWrapper.style.display = "block"
    document.body.style.overflow = "hidden";
  });
  
  closeCard.addEventListener("click", () =>{
    saleWrapper.style.display = "none"
    document.body.style.overflow = ""
  })

  saleWrapper.addEventListener("click", (e) =>{
    if(e.target === saleWrapper){
      saleWrapper.style.display = "none";
      document.body.style.overflow = ""
    }
  })

  document.addEventListener("keydown", (e)=>{
    if(e.code === "Escape"){
      saleWrapper.style.display = "none"
      document.body.style.overflow = ""
    }
  })

  
  
  // time modal
  
  const date = new Date("May 01 2022")
  
  function count () {
    let now = new Date();
    let gap = date - now;
    
    let days = Math.floor(gap / 1000 / 60 / 60 / 24);
    let hours = Math.floor((gap / 1000 / 60 / 60) % 24);
    let minutes = Math.floor((gap / 1000 / 60) % 60);
    let seconds = Math.floor((gap / 1000) % 60);
    
    if(gap < 0) {
      document.querySelector(".group").textContent = "vaqt tugadi!"
    }
    
    document.getElementById("d").textContent = days;
    document.getElementById("h").textContent = hours;
    document.getElementById("m").textContent = minutes;
    document.getElementById("s").textContent = seconds;
  } // count
  
  setInterval(count, 1000);
  
  const buttonCloseTimeModal = document.querySelector(".modal-section__close-modal-button");
  const modalSection = document.querySelector(".modal-section");
  const modalWrapper = document.querySelector(".modal-section__modal-wrapper")
  
  function timeModalWrapper(){
    modalSection.style.cssText = "display: block;"
    modalWrapper.style.cssText = "margin-top: 100px"
    document.body.style.overflow = "hidden" 
  }
  setTimeout(timeModalWrapper, 5000);
  
  buttonCloseTimeModal.addEventListener("click", ()=>{
    modalSection.style.display = "none"
    document.body.style.overflow = ""
  })
  
  document.addEventListener("keydown", (e)=>{
    if(e.code === "Escape"){
      modalSection.style.display = "none"
      document.body.style.overflow = ""
    }
  })
  
  modalSection.addEventListener("click", (e) =>{
    if(e.target === modalSection){
      modalSection.style.display = "none"
      document.body.style.overflow = ""
    }
  })
  
}) // end