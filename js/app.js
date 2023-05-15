let carts= document.querySelectorAll('.add-to-cart');
let products= [
    {
        productTitle: "Wollen shirt",
        ProductDescription:"Lorem ipusm dolor sit elit ipsum do.",
        price: 1500,
        incart:0,
    }
]


for(let i=0; i<carts.length; i++)
{
    carts[i].addEventListener('click',()=>{
        cartNumbers();
    })
}

function onloadCartNumbers()
{
    let prouductNumbers = localStorage.getItem('cartNumbers');

    if (prouductNumbers){
        document.querySelector('.cart span div').textContent= prouductNumbers;
    }
}

function cartNumbers()
{
    let prouductNumbers = localStorage.getItem('cartNumbers');
    prouductNumbers = parseInt(prouductNumbers);
    if(prouductNumbers){
        localStorage.setItem('cartNumbers', prouductNumbers + 1);
        document.querySelector('.cart span div').textContent= prouductNumbers + 1;
    }
    else
    {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span div').textContent=1;
    }
}

onloadCartNumbers()


// ----------------product detail-----------------

let largeImage = document.querySelector('.large-image');
let smallImage = document.querySelectorAll('.small-image');



for(let i=0; i<smallImage.length; i++)
{
    smallImage[i].addEventListener('click', ()=>{
        largeImage.src = smallImage[i].src;
    })
}

// --------------------burger--------

// const mainMenu = document.querySelector('.menu');
// const closeMenu = document.querySelector('.close-menu');
// const burger = document.querySelector('.burger');



// burger.addEventListener('click',show);
// closeMenu.addEventListener('click',close);


// function show()
// {
//     mainMenu.style.display='flex';
//     mainMenu.style.top='0';
// }
// function close()
// {
//     mainMenu.style.top='-100%';
// }

// -----------collection-----------

// let collectionCaption = document.querySelectorAll('.collection-caption');
// let collectionImage = document.querySelectorAll('.collection-img');


// for(i=0; i<=collectionCaption.length; i++){
//     collectionImage[i].addEventListener('mouseover', ()=>{
//         collectionCaption[i].style.display = 'block';
//     });
// }
