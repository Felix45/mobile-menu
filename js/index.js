document.querySelector('.menu-bars').addEventListener('click', () => {
  const menuStyle = document.querySelector('#desktop-nav').style.display;

  if (menuStyle === 'none' || menuStyle === '') {
    document.querySelector('#desktop-nav').style.display = 'block';
    document.querySelector('#desktop-nav ul').style.display = 'block';
  } else {
    document.querySelector('#desktop-nav').style.display = 'none';
    document.querySelector('#desktop-nav ul').style.display = 'none';
  }
});