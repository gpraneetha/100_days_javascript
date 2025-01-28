// View Transition API - transition any visual dom change from one
// state to next
// eg. toggling a content, navigating from one page to another
// takes a screenshot of current dom before calling 
// startViewTransition callback 
let mainSrc = '';
if (document.startViewTransition) {
    document.addEventListener('click', function (event) {
      if (event.target.matches('img')) {
        event.preventDefault()
        console.log(event);
        mainSrc = event.target.src;
        // callback updates the dom to the new state
        document.startViewTransition(() => {
            displayNewImage();
        })
      }
    })
}

const displayNewImage = () => {
    const galleryImg = document.querySelector('.gallery-view img');
    galleryImg.src = mainSrc;
};