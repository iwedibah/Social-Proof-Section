# Frontend Mentor - Social proof section solution

This is a solution to the [Social proof section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the section depending on their device's screen size
- See hover states for all interactive elements on the page
- Experience smooth animations and transitions
- Navigate the site using keyboard controls
- View the site on any device with proper responsiveness

### Screenshot

![](./design/desktop-preview.jpg)

### Links

- Solution URL: [Frontend Mentor Solution](https://www.frontendmentor.io/profile/iwedibah)
- Live Site URL: [Add your live site URL here]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox and CSS Grid for layout
- CSS Animations and Transitions
- Vanilla JavaScript for interactivity
- Mobile-first workflow
- Intersection Observer API
- BEM methodology for CSS naming
- Accessibility best practices

### What I learned

This project helped me strengthen my skills in several areas:

1. Advanced CSS Animations:
```css
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}
```

2. Intersection Observer for scroll animations:
```js
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
});
```

3. Custom cursor effects:
```js
const moveCursor = (e) => {
    const mouseY = e.clientY;
    const mouseX = e.clientX;
    cursor.style.transform = `translate3d(${mouseX - 10}px, ${mouseY - 10}px, 0)`;
};
```

4. Responsive background patterns:
```css
body::before,
body::after {
    content: '';
    position: absolute;
    z-index: -1;
}
```

### Continued development

Areas I want to focus on in future projects:

- Implementing more complex animations and transitions
- Enhancing accessibility features
- Optimizing performance for animations
- Exploring more advanced JavaScript interactions
- Implementing better touch device interactions

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org) - Comprehensive documentation for HTML, CSS, and JavaScript
- [CSS-Tricks](https://css-tricks.com) - Great resource for CSS Grid and Flexbox
- [Web.dev](https://web.dev) - Helpful for understanding web performance and best practices
- [A11Y Project](https://www.a11yproject.com) - Essential resource for web accessibility

## Author

- Frontend Mentor - [@iwedibah](https://www.frontendmentor.io/profile/iwedibah)
- Website - [Henry Iwediba](https://www.frontendmentor.io/profile/iwedibah)
