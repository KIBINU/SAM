let shoes =[{image:'images/Maleshoe1.jpeg', Name:'Blue and White Air Jordan', price:4000, itemcode:'ms001'},
            {image:'images/maleshoe3.jpg',Name:'Red-and-black Air Jordan 1s',price:3500,itemcode:'ms003'},
            {image:'images/maleshoe2.jpg',Name:'Black Nike',price:3000,itemcode:'ms002'},
            {image:'images/maleshoe4.jpg',Name:'white-and-blue Air Jordan 1s',price:4500,itemcode:'ms004'},
            {image:'images/maleshoe5.jfif',Name:'sport sneakers',price:3500,itemcode:'ms005'},
            {image: 'images/femaleshoe1.jpg',Name:'heels',price:15000,itemcode:'fs001'},
            {image:'images/femaleshoe2.jpg',Name:'heels',price:15000,itemcode:'fs002'},
            {image:'images/femaleshoe3.jpg',Name:'heels',price:15000,itemcode:'fs003'},
            {image:'images/femaleshoe4.jpg',Name:'heels',price:15000,itemcode:'fs004'},
            {image:'images/femaleshoe5.jpg',Name:'heels',price:15000,itemcode:'fs005'},

]

let shoecontainer = document.getElementById('item')

shoecontainer.innerHTML = shoes.map((shoe)=>
    `
    <div>
    <img src="${shoe.image}"></img> 
    <p class="p3"> ${shoe.Name}</p>
    <p class="p3">ksh.${shoe.price}</p>
    <p class="p3">${shoe.itemcode}</p>
   <button onclick = 'view("${shoe.itemcode}")'>view shoe</button>
    
    </div>`
)

function view(code){
    window.open(`select.html?${code}`,'_blank')
}

