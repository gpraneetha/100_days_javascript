// View Transition API - transition any visual dom change from
// one state to next
// eg. toggling a content, navigating from one page to another
// takes a screenshot of current dom before calling 
// startViewTransition callback 
if (document.startViewTransition) {
    document.addEventListener('click', function (event) {
      if (event.target.matches('summary')) {
        event.preventDefault()
        const details = event.target.closest('details')
        // callback updates the dom to the new state
        document.startViewTransition(() => 
          details.toggleAttribute('open'))
      }
    })
}