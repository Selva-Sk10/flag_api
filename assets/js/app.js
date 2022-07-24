fetch("https://restcountries.com/v3.1/all")
.then(res =>{
    return res.json();
})
.then(data =>{
    allData(data);
})

const countryNames = document.querySelector(".right");
const flagImg = document.querySelector(".flag img");
const countryContent = document.querySelector(".left .box .content");

function allData(dataArr){
    const arr = dataArr.map(country =>{
        return (
            `<p>${country.name.common}</p>`
        );
    });

    const initObj = dataArr.find(item =>{
        return item.name.common == "India";
    });

    countryInfo(initObj);

    countryNames.addEventListener("click", (e) =>{
        const parEnt = e.target.parentElement;
        const childRen = Array.from(parEnt.children);
        childRen.forEach(i =>{
            i.classList.remove("active");
        });

        if(e.target.matches("p")){
            e.target.classList.add("active");
            
            const obj = dataArr.find(item =>{
                return item.name.common == e.target.innerText;
            });

            countryInfo(obj);
        }
    });
    countryNames.innerHTML = arr.sort().join("");
}

function countryInfo(dataObj){
    flagImg.src = dataObj.flags.svg;
    countryContent.innerHTML = 
    `<h1>Country Name: ${dataObj.name.official}</h1>
    <p>Region: ${dataObj.region}</p>
    <p>Car: ${dataObj.car.side} hand drive</p>
    <p>Population: ${dataObj.population}</p>`;
}