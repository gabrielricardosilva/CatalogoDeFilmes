const c = (el) => document.querySelector(el)
const cs = (el) => document.querySelectorAll(el)

cakeJson.map((item,index) =>{

    
    let cakeItem = document.querySelector('.models .cake-item').cloneNode(true)
    cakeItem.setAttribute('data-key',index)
    cakeItem.querySelector('.cake-item--name').innerHTML = item.name
    cakeItem.querySelector('.cake-item--desc').innerHTML = item.description
    cakeItem.querySelector(".cake-item--price").innerHTML = `R$ ${item.price.toFixed(2)}`
    cakeItem.querySelector('.cake-item--img img').src = item.img

    // colocando evento para abrir a janela

    cakeItem.querySelector('a').addEventListener('click', (grue)=>{
        let key = grue.target.closest('.cake-item').getAttribute('data-key')
        grue.preventDefault()


        c('.cakeWindowArea').style.opacity = 0
        c('.cakeWindowArea').style.display = "flex"
        c('.cakeInfo h1').innerHTML = cakeJson[key].name
        c('.cakeBig img').src = cakeJson[key].img
        c('.cakeInfo--desc').innerHTML = cakeJson[key].description
        

        cs('.cakeInfo--size').forEach((size,sizeIndex)=>{
            size.querySelector('span').innerHTML = cakeJson[key].sizes[sizeIndex]
        })

        setTimeout(()=>{
            c('.cakeWindowArea').style.opacity = 1
        },200)
        

    })
        cs('.cakeInfo--cancelButton, .cakeInfo--cancelMobileButton').forEach((item)=>{
            item.addEventListener('click',closeModal)
    })
        

    
    c('.cake-area').append(cakeItem)
})

//Eventos do modal

function closeModal(){
    c('.cakeWindowArea').style.opacity = 0
    setTimeout(() => {
    c('.cakeWindowArea').style.display = "none"
    },300);
}