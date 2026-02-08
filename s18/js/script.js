

const data = [
{
albumId: 1,
id: 1,
title: "accusamus beatae ad facilis cum similique qui sunt",
url: "https://via.placeholder.com/600/92c952",
thumbnailUrl: "https://via.placeholder.com/150/92c952"
},
{
albumId: 1,
id: 2,
title: "reprehenderit est deserunt velit ipsam",
url: "https://via.placeholder.com/600/771796",
thumbnailUrl: "https://via.placeholder.com/150/771796"
},
{
albumId: 1,
id: 3,
title: "officia porro iure quia iusto qui ipsa ut modi",
url: "https://via.placeholder.com/600/24f355",
thumbnailUrl: "https://via.placeholder.com/150/24f355"
},
{
albumId: 1,
id: 4,
title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
url: "https://via.placeholder.com/600/d32776",
thumbnailUrl: "https://via.placeholder.com/150/d32776"
},
{
albumId: 1,
id: 5,
title: "natus nisi omnis corporis facere molestiae rerum in",
url: "https://via.placeholder.com/600/f66b97",
thumbnailUrl: "https://via.placeholder.com/150/f66b97"
},
{
albumId: 1,
id: 6,
title: "accusamus ea aliquid et amet sequi nemo",
url: "https://via.placeholder.com/600/56a8c2",
thumbnailUrl: "https://via.placeholder.com/150/56a8c2"
},
{
albumId: 1,
id: 7,
title: "officia delectus consequatur vero aut veniam explicabo molestias",
url: "https://via.placeholder.com/600/b0f7cc",
thumbnailUrl: "https://via.placeholder.com/150/b0f7cc"
},
{
albumId: 1,
id: 8,
title: "aut porro officiis laborum odit ea laudantium corporis",
url: "https://via.placeholder.com/600/54176f",
thumbnailUrl: "https://via.placeholder.com/150/54176f"
},
{
albumId: 1,
id: 9,
title: "qui eius qui autem sed",
url: "https://via.placeholder.com/600/51aa97",
thumbnailUrl: "https://via.placeholder.com/150/51aa97"
},
{
albumId: 1,
id: 10,
title: "beatae et provident et ut vel",
url: "https://via.placeholder.com/600/810b14",
thumbnailUrl: "https://via.placeholder.com/150/810b14"
},
{
albumId: 1,
id: 11,
title: "nihil at amet non hic quia qui",
url: "https://via.placeholder.com/600/1ee8a4",
thumbnailUrl: "https://via.placeholder.com/150/1ee8a4"
},
{
albumId: 1,
id: 12,
title: "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
url: "https://via.placeholder.com/600/66b7d2",
thumbnailUrl: "https://via.placeholder.com/150/66b7d2"
}
]


/*
<div class="col-4 p-3">
                <div class="border border-2 border-success rounded">
                    <img src="../s4/images/back.jpg" class="img-fluid">
                    <div class="p-3">
                        <h3>accusamus beatae ad facilis cum similique qui sunt</h3>
                        <button class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
*/

// const dataWrap = document.querySelector("#data"), serKey = document.querySelector("#searchKey")

// const createMyElement = (parent , ele, classes, txt, src) =>{
//     const newEle = document.createElement(ele)
//     if(classes)newEle.className = classes
//     parent.appendChild(newEle)
//     if(txt) newEle.textContent = txt
//     if(src) newEle.setAttribute("src", src)
//     return newEle
// }

// const drawElement = (d)=>{
// let div = createMyElement(dataWrap, "div", "col-4 p-3", null, false)
//     const innerDiv = createMyElement(div, "div", "border border-2 border-success rounded")
//     createMyElement(innerDiv, "img", "img-fluid", false, "../s4/images/back.jpg")
//     const div1 = createMyElement(innerDiv, "div", "p-3")
//     createMyElement(div1, "h3", "h5", d.title)
//     const delBtn = createMyElement(div1, "button", "btn btn-danger" , "delete")
//     delBtn.addEventListener("click", function(){
//         div.remove()
//     })
// }

// const drawAllData = (data) =>{
//     dataWrap.innerHTML = ""
//     if(!data.length) {
//         createMyElement(dataWrap, "div", "alert alert-danger", "no data found")
//     }
//     data.forEach(d=>{ drawElement(d) })
// }


// serKey.addEventListener("input", function(){
//     let serchKeyword = serKey.value
//     console.log(serchKeyword)
//     let result = data.filter(d=> d.title.includes(serchKeyword))
//     drawAllData(result)
// })


// drawAllData(data)
let d = document.querySelector("div")
window.addEventListener("scroll", function(){
    console.log(window.scrollX, window.scrollY)
    if(window.scrollY< 150) 
        // console.log('test')
        d.classList.add("d-none")
    else
        d.classList.remove("d-none")
})

// window.scrollTo(0,100)
// window.scrollBy()