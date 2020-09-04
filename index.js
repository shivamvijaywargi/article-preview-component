function toggleVisibility() {
  const button = document.querySelector('.share-more');
  if (button.style.visibility === 'hidden') {
    button.style.visibility = 'visible';
  } else {
    button.style.visibility = 'hidden';
  }
}
