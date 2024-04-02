// Load your images on page-load
function preloader() {
    const imagesList = [
       "./img/img-1.jpg",
       "./img/img-2.jpg",
       "./img/img-3.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};    
window.addEventListener("load", preloader);

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

let content1 = document.getElementById("content1");
let content2 = document.getElementById("content2");
let content3 = document.getElementById("content3");

btn1.addEventListener('click', ()=>{
    content1.innerHTML = "<h2>Solar</h2>";
    content2.innerHTML = '<img src="img/solar.png" alt="solar panels" class="image">';
    content3.innerHTML = "<p>Solar energy is a powerful source of energy that can be used to heat, cool, and light homes and businesses. More energy from the sun falls on the earth in one hour than is used by everyone in the world in one year. <br><br> A variety of technologies convert sunlight to usable energy for buildings. The most commonly used solar technologies for homes and businesses are solar photovoltaics for electricity, passive solar design for space heating and cooling, and solar water heating.</p>";
})

btn2.addEventListener('click', ()=>{
    content1.innerHTML = "<h2>Wind</h2>";
    content2.innerHTML = '<img src="img/wind.png" alt="wind turbines" class="image">';
    content3.innerHTML = "<p>Wind is the largest source of renewable energy in the United States, providing clean electricity from land and offshore to individual homes, remote farms, small communities and large cities alike. Wind energy is old—so old that ancient Egyptians used this bountiful, blustery resource, according to the U.S. Energy Information Administration, to propel their boats down the Nile River. The first wind turbines (or windmills, as they were originally called) were made from abundant materials, such as wood or reeds, which were woven into tight blades and spun to pump water for farms, grind grain, and, eventually, power entire communities.</p>";
})

btn3.addEventListener('click', ()=>{
    content1.innerHTML = "<h2>Thermal</h2>";
    content2.innerHTML = '<img src="img/thermal.png" alt="hot springs" class="image">';
    content3.innerHTML = "<p>Geothermal energy is the heat from the earth. This heat is used for bathing, to heat buildings, and to generate electricity. The word geothermal comes from the Greek words geo (earth) and therme (heat), and geothermal energy is a renewable energy source because heat is continuously produced inside the earth, which allows them to be used on both large and small scales. A utility can use the hot water and steam from reservoirs to drive generators and produce electricity for its customers. Other applications apply the heat produced from geothermal directly to various uses in buildings, roads, agriculture, and industrial plants.</p>";
})