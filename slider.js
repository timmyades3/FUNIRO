let next = document.querySelector('.next')

next.addEventListener('click', function(){
    let items =document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

