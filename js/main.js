let elList = document.querySelector(".carsList");
let elAllBtns = document.querySelector(".js-btns");
let elCompact = document.querySelector(".js-compact");
let elVans = document.querySelector(".js-vans");

function renderCars(cars) {
  let res = "";
  for (i of cars) {
    res += `
    <div class="card" style="width: 387px;  background-color: #F5F5F5; ">
    <div style="margin-left:24px; padding-top:30px;">
        <h3 class="card-title">${i.name}</h3>
        <h6 style="" class="card-text">${i.type}</h6>
    </div>
    <img src="${i.img}" class="card-img-top" alt="pokemons">

    <div style="display: flex; justify-content: space-between;">
        <div style="display: flex;">
            <img style="margin-left: 27px;" src="${i.imgSite}" class="card-img-top" alt="pokemons">
            <p style="margin-left: 14px;">5 Seats</p>
        </div>
        <div style="display: flex;margin-right: 27px;">
            <img src="${i.imgAuto}" class="card-img-top" alt="pokemons">
            <p style="margin-left: 14px;">Automatic</p>
        </div>
    </div>

    <div style="display: flex; justify-content: space-between;margin-top:24px;">
        <div style="display: flex;">
            <img style="margin-left: 27px;" src="${i.imgYears}" class="card-img-top" alt="pokemons">
            <p style="margin-left: 14px;">21+ Years</p>
        </div>
        <div style="display: flex;margin-right: 27px;">
            <img src="${i.imgOil}" class="card-img-top" alt="pokemons">
            <p style="margin-left: 14px;">1-lit / 2.5 km</p>
        </div>
    </div>
</div>
        `;
  }

  elList.innerHTML = res;
  return res;
}
renderCars(cars);
