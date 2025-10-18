const sidebarItems = document.querySelectorAll('.sidebar li, .ham');
const bars = document.querySelector('#bars');
const remove = document.querySelector('#remove');

const mediaQuery = window.matchMedia('(max-width: 1024px)');

function handleMediaQuery(mediaQuery) {
  if (mediaQuery.matches) {

    sidebarItems.forEach(item => {
      item.addEventListener('click', () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.right = '-200vw';
        remove.style.display = 'none';
        bars.style.display = 'block';
      });
    });

    bars.addEventListener('click', () => {
      const sidebar = document.querySelector('.sidebar');
      sidebar.style.right = '2vw';
      remove.style.display = 'block';
      bars.style.display = 'none';
    });

    remove.addEventListener('click', () => {
      const sidebar = document.querySelector('.sidebar');
      sidebar.style.right = '-200vw';
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