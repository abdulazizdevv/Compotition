let elList = document.querySelector(".carsList");
let elAllBtns = document.querySelector(".js-btns");
let elSearch = document.querySelector(".js-input");
let elCompact = document.querySelector(".js-compact");
let elVans = document.querySelector(".js-vans");
let elSport = document.querySelector(".js-sport");
let elView = document.querySelector(".view");
let elBtns = document.querySelector(".dark-light");
let elcard = document.querySelectorAll(".cards__all__one");

let theme = false;

elBtns.addEventListener("click", (evt) => {
  theme = !theme;
  const newBg = theme ? "dark" : "light";
  window.localStorage.setItem("theme", newBg);
  newTheme();
});

let newTheme = () => {
  if (window.localStorage.getItem("theme") == "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
};

newTheme();

elSearch.addEventListener("input", (evt) => {
  evt.preventDefault();
  newArr = [];

  let inputVal = elSearch.value;

  cars.forEach((el) => {
    if (el.name.toLocaleLowerCase().includes(inputVal)) {
      newArr.push(el);
    }
  });
  renderCars(newArr, elList);
});

// const localData = JSON.parse(window.localStorage.getItem("cars"));

function renderCars(cars) {
  window.localStorage.setItem("cars", JSON.stringify(cars));

  let res = "";
  for (i of cars) {
    res += `
    <div class="card" style=" background-color: #F5F5F5; ">
    <div style=" margin-left:24px; padding-top:30px;">
        <h3 class="card-title">${i.name}</h3>
        <p style="margin-top:8px;" class="card-text">${i.type}</p>
    </div>
    <img src="${i.img}" class="card-img-top" alt="car">

    <div style="display: flex; justify-content: space-between;">
      <div style="display: flex;">
          <img style="margin-left: 27px; width:13px; height:14px;" src="${i.imgSite}"
              class="card-img" alt="car">
          <p style="margin-left: 14px;">5 Seats</p>
      </div>
      <div style="display: flex;margin-right: 89px; ">
          <img src="${i.imgAuto}" class="card-img" alt="car">
          <p style="margin-left: 12px; margin-right:8px;">Automatic</p>
      </div>
  </div>

  <div style="display: flex; justify-content: space-between;margin-top:24px;">
      <div style="display: flex;">
          <img style="margin-left: 27px;" src="${i.imgYears}" class="card-img" alt="car">
          <p style="margin-left: 14px;">21+ Years</p>
      </div>
      <div style="display: flex;margin-right: 89px; ">
          <img style="width:10.5; height:13.5px;" src="${i.imgOil}" class="card-img" alt="car">
          <p style="margin-left: 14px; ">1-lit / 2.5 km</p>
      </div>
  </div>
</div>
    
        `;
  }

  elList.innerHTML = res;

  return res;
}

elView.addEventListener("click", (evt) => {
  evt.preventDefault();
  renderCars(cars);
});

let newsplice = cars.slice(0, 6);
renderCars(newsplice);

elAllBtns.addEventListener("click", (evt) => {
  evt.preventDefault();

  if (evt.target.matches(".js-compact")) {
    elCompact.classList.add("active");
    let filterdCars = cars.filter((el) => el.compacts == "compact");
    renderCars(filterdCars);
  } else {
    elCompact.classList.remove("active");
  }
  if (evt.target.matches(".js-sport")) {
    elSport.classList.add("active");
    let filterdCars = cars.filter((el) => el.sport == "sport");
    renderCars(filterdCars);
  } else {
    elSport.classList.remove("active");
  }
  if (evt.target.matches(".js-vans")) {
    elVans.classList.add("active");
    let filterdCars = cars.filter((el) => el.vans == "vans");
    renderCars(filterdCars);
  } else {
    elVans.classList.remove("active");
  }
});

// let elList = document.querySelector(".carsList");
// let elAllBtns = document.querySelector(".js-btns");
// let elSearch = document.querySelector(".js-input");
// let elCompact = document.querySelector(".js-compact");
// let elVans = document.querySelector(".js-vans");
// let elSport = document.querySelector(".js-sport");
// let elView = document.querySelector(".view");

// elSearch.addEventListener("input", (evt) => {
//   evt.preventDefault();
//   newArr = [];

//   let inputVal = elSearch.value;

//   cars.forEach((el) => {
//     if (el.name.toLocaleLowerCase().includes(inputVal)) {
//       newArr.push(el);
//     }
//   });
//   renderCars(newArr, elList);
// });

// console.log(cars);
// // const localData = JSON.parse(window.localStorage.getItem("cars"));

// function renderCars(cars) {
//   // window.localStorage.setItem("cars", JSON.stringify(cars));

//   let res = "";
//   for (i of cars) {
//     res += `
//     <div class="card" style=" background-color: #F5F5F5; ">
//     <div style=" margin-left:24px; padding-top:30px;">
//         <h3 class="card-title">${i.name}</h3>
//         <p style="margin-top:8px;" class="card-text">${i.type}</p>
//     </div>
//     <img src="${i.img}" class="card-img-top" alt="car">

//     <div style="display: flex; justify-content: space-between;">
//       <div style="display: flex;">
//           <img style="margin-left: 27px; width:13px; height:14px;" src="${i.imgSite}"
//               class="card-img" alt="car">
//           <p style="margin-left: 14px;">5 Seats</p>
//       </div>
//       <div style="display: flex;margin-right: 89px; ">
//           <img src="${i.imgAuto}" class="card-img" alt="car">
//           <p style="margin-left: 12px; margin-right:8px;">Automatic</p>
//       </div>
//   </div>

//   <div style="display: flex; justify-content: space-between;margin-top:24px;">
//       <div style="display: flex;">
//           <img style="margin-left: 27px;" src="${i.imgYears}" class="card-img" alt="car">
//           <p style="margin-left: 14px;">21+ Years</p>
//       </div>
//       <div style="display: flex;margin-right: 89px; ">
//           <img style="width:10.5; height:13.5px;" src="${i.imgOil}" class="card-img" alt="car">
//           <p style="margin-left: 14px; ">1-lit / 2.5 km</p>
//       </div>
//   </div>
// </div>

//         `;
//   }

//   elList.innerHTML = res;

//   return res;
// }
// elView.addEventListener("click", (evt) => {
//   evt.preventDefault();
//   renderCars(cars);
// });

// let newsplice = cars.slice(0, 6);
// renderCars(newsplice);

// elAllBtns.addEventListener("click", (evt) => {
//   evt.preventDefault();

//   if (evt.target.matches(".js-compact")) {
//     elCompact.classList.add("active");
//     let filterdCars = cars.filter((el) => el.compacts == "compact");
//     renderCars(filterdCars);
//   } else {
//     elCompact.classList.remove("active");
//   }
//   if (evt.target.matches(".js-sport")) {
//     elSport.classList.add("active");
//     let filterdCars = cars.filter((el) => el.sport == "sport");
//     renderCars(filterdCars);
//   } else {
//     elSport.classList.remove("active");
//   }
//   if (evt.target.matches(".js-vans")) {
//     elVans.classList.add("active");
//     let filterdCars = cars.filter((el) => el.vans == "vans");
//     renderCars(filterdCars);
//   } else {
//     elVans.classList.remove("active");
//   }
// });
