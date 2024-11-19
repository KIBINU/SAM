let pickeditem = decodeURIComponent(window.location.search)
console.log(pickeditem)

let pickeditemCode = pickeditem.substring(1)
console.log(pickeditemCode)
 let shoe =shoes.find(p=>p.itemcode === pickeditemCode)
if(shoe){
    
        document.getElementById("shoeimage").src = shoe.image
        document.getElementById("shoeName").innerHTML = shoe.Name;
        document.getElementById("shoeprice").innerHTML = `Kes ${shoe.price};`
        document.getElementById("shoecode").innerHTML = shoe.itemcode;
    
        let cost = shoe.price
        calCulate(cost) 
}




function calCulate(cost){
 let input = document.getElementById('quantity')
 input.value = 1
 let quantity = parseint(input.value)
 let total = quantity * cost
 document.getElementById('total').innerHTML = `Kes ${total}`

 console.log(total)
 deliveryTotal(total)
    input.addEventListener("keyup", () => {
        let quantity = input.value
        if(quantity > 0){
         let total = quantity * cost
        document.getElementById('total').innerHTML = `Kes ${total}`

        console.log(total)
        deliveryTotal(total)

        }
        
        
})
}

function deliveryTotal(total){
    let delivery = document.getElementById('destination')
    delivery.addEventListener('change', () =>{
    let deliveryCost
    if(delivery.value === 'Nairobi'){
        deliveryCost = 1200
    } else if(delivery.value === 'Mombasa'){
        deliveryCost = 2300
    } else if(delivery.value === 'Kisumu'){
        deliveryCost = 3250
    } else if(delivery.value === "Nakuru"){
        deliveryCost = 4400
    } else {
        deliveryCost = 0
    }
    document.getElementById("price").innerHTML = ` Total shoes price = Kes: ${total}`
    document.getElementById("fee").innerHTML = ` Delivery cost = Kes: ${deliveryCost}`
    let finalCost = total + deliveryCost
    document.getElementById("total").innerHTML = `Total cost = Kes: ${finalCost}`
    console.log(finalCost)
})
}