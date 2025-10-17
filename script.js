// media queries

if (window.matchMedia('(max-width: 1285px)').matches) {
    document.querySelector('#product-8').style.display = "none";
    document.querySelector('#product-7').style.display = "none";
} else if(window.matchMedia('(min-width: 1286px)').matches){
    document.querySelector('#product-8').style.display = 'block';
    document.querySelector('#product-7').style.display = "block";
}

if (window.matchMedia('(max-width: 1024px)').matches){
    document.querySelector("#product-5").style.display = "none"
    document.querySelector("#product-6").style.display = "none"
} else if (window.matchMedia('(min-width:1025px)').matches){
     document.querySelector("#product-5").style.display = "block"
    document.querySelector("#product-6").style.display = "block"
} 