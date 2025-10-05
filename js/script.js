/**
 * js/script.js
 * Minimal JavaScript for a static resume site.
 * Used here primarily for modern best practice (having a JS file)
 * and simple, non-essential enhancements.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Feature: Add a simple class to body when JS is loaded
    document.body.classList.add('js-loaded');
    
    // Example of a useful print-related prompt (optional):
    // const printButton = document.createElement('button');
    // printButton.textContent = 'Print Resume';
    // printButton.id = 'print-btn';
    // document.querySelector('.header').appendChild(printButton);
    
    // printButton.addEventListener('click', () => {
    //     window.print();
    // });

    console.log("Resume content loaded successfully.");
});
