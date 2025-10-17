const sidebarItems = document.querySelectorAll('.sidebar li');
const bars = document.querySelector('#bars');
const remove = document.querySelector('#remove');

const mediaQuery = window.matchMedia('(max-width: 991px)');

function handleMediaQuery(mediaQuery) {
  if (mediaQuery.matches) {
    
    sidebarItems.forEach(item => {
      item.addEventListener('click', () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.right = '-1000px';
        remove.style.display = 'none';
        bars.style.display = 'block';
      });
    });

    bars.addEventListener('click', () => {
      const sidebar = document.querySelector('.sidebar');
      sidebar.style.right = '0px';
      remove.style.display = 'block';
      bars.style.display = 'none';
    });

    remove.addEventListener('click', () => {
      const sidebar = document.querySelector('.sidebar');
      sidebar.style.right = '-1000px';
      remove.style.display = 'none';
      bars.style.display = 'block';
    });
  } else {
   
    remove.style.display = 'none';
    bars.style.display = 'none';
  }
}

handleMediaQuery(mediaQuery);
mediaQuery.addListener(handleMediaQuery);