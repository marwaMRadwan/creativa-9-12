// let d1 = document.getElementById("one")
// console.log(d1);
// console.log(d1.textContent)
// d1.textContent =" session16"

// let d1  = document.getElementsByClassName("cone")
// console.log(d1);
// d1[0].textContent= "lllll"

// let d1 = document.getElementsByTagName("p")
// let d1 = document.querySelector("p")

// let d1 = document.querySelectorAll("p")
// console.log(d1);

// const d1 = document.querySelector(".cone")
// console.log(d1);
// if(d1){
    // d1.textContent = "<span class='text-success'>hello</span>"
    // d1.innerHTML = "<span class='text-success'>hello</span>"
    // d1.innerText = "<span class='text-success'>hello</span>"
    // console.log(d1.innerHTML)
    // console.log(d1.innerText)
    // console.log(d1.textContent)
    // console.log(d1.className)
    // d1.className = "alert alert-danger"
    // d1.classList.add("p-3")
    // d1.classList.remove("alert-danger")
    // console.log(d1.classList);
    
// }


const imgs = ["1.jpg", "2.jpg" , "3.jpg"]
// const slider = document.querySelector("#slider")
// const items = document.querySelectorAll(".carousel-item img")
// imgs.forEach((img, i) => {
//     items[i].src= img
// })

const slider = document.querySelector(".carousel-inner")
const btns = document.querySelector(".carousel-indicators")
imgs.forEach((img, i )=>{
    let active="", btnActive=""
    if(i==0){
         active = "active"
        btnActive = 'class="active" aria-current="true"'
    }
    slider.innerHTML += `<div class="carousel-item ${active}">
        <img src="images/${img}" class="d-block w-100" alt="...">
        </div>`
    btns.innerHTML+=`    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i}" ${btnActive} aria-label="Slide ${i+1}"></button>`
})


const data= [
{
userId: 1,
id: 1,
title: "delectus aut autem",
completed: false
},
{
userId: 1,
id: 2,
title: "quis ut nam facilis et officia qui",
completed: false
},
{
userId: 1,
id: 3,
title: "fugiat veniam minus",
completed: false
},
{
userId: 1,
id: 4,
title: "et porro tempora",
completed: true
},
{
userId: 1,
id: 5,
title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
completed: false
},
{
userId: 1,
id: 6,
title: "qui ullam ratione quibusdam voluptatem quia omnis",
completed: false
},
{
userId: 1,
id: 7,
title: "illo expedita consequatur quia in",
completed: false
},
{
userId: 1,
id: 8,
title: "quo adipisci enim quam ut ab",
completed: true
},
{
userId: 1,
id: 9,
title: "molestiae perspiciatis ipsa",
completed: false
},
{
userId: 1,
id: 10,
title: "illo est ratione doloremque quia maiores aut",
completed: true
}
]