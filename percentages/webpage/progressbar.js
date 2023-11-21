fetch('https://us-central1-joysteem.cloudfunctions.net/recworks-progress-mean')
  .then(response => customElements.define('prog-bar', response))