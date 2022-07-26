

# Project title: Landing page Project


## Project Description
landing page has four section and every section has a button in navbar to specify to each section with scroll down smoothly
## resources
[MDN](https://developer.mozilla.org/en-US/)
# Table of contents
- [landing page](#landing-page)
- [Demo-Preview](https://github.com/mido777283/landing-page)
- [Table of contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)

# Installation
no need to install just download files and open index.html in your browser
[(Back to top)](#table-of-contents)

# Usage
dynamic navbar and section navigate to each section dynamically by clicking on navbar button
[(Back to top)](#table-of-contents)

# Development
i used `getBoundingClientRect()` function instead of `IntersectionObserver()`
`let options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: 1.0
}
let observer = new IntersectionObserver(callback, options);`
[(Back to top)](#table-of-contents)


















