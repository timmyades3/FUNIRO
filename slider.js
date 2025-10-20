let next = document.querySelector('.next')

next.addEventListener('click', function(){
    let items =document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})


let discs = document.querySelectorAll('.disc-container')
discs.forEach(disc => {
    disc.addEventListener('click', function(){
        discs.forEach(d => d.classList.remove('active-disc'));
        this.classList.add('active-disc');

        let targetIndex = parseInt(this.getAttribute('data-index'), 10);
        let slideContainer = document.querySelector('.slide');
        let items = Array.from(document.querySelectorAll('.item'));
        if (!items.length) return;

        // rotate so the clicked index (1-based) becomes the first item
        let shift = (targetIndex - 1) % items.length;
        if (shift < 0) shift += items.length;

        for (let i = 0; i < items.length; i++) {
            slideContainer.appendChild(items[(shift + i) % items.length]);
        }
    })
})





