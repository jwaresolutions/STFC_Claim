// ==UserScript==
// @name         STFC Auto Claim
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically clicks the Claim and DONE buttons
// @author       Jwaresolutions
// @require      https://raw.githubusercontent.com/jwaresolutions/STFC_Claim/refs/heads/mainline/STFCClaim.js
// @match        https://home.startrekfleetcommand.com/store
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Ensure the script only runs on the correct URL
    if (window.location.href !== 'https://home.startrekfleetcommand.com/store') {
        return;
    }

    // Function to click the claim button and then the done button with delays
    async function autoClick() {
        // Get all buttons with text 'Claim'
        const buttons = Array.from(document.querySelectorAll('button')).filter(button => button.textContent === 'Claim');
        
        // Validate that there is at least one claim button
        if (buttons.length === 0) {
            console.log('No "Claim" button found');
            return;
        }

        // Click the first "Claim" button
        buttons[0].click();
        console.log('Claim button clicked');
        
        // Wait for 3 seconds before proceeding to the next action
        await new Promise(resolve => setTimeout(resolve, 3000));

        // Get all buttons with text 'DONE'
        const doneButton = Array.from(document.querySelectorAll('button')).filter(button => button.textContent === 'DONE');
        
        // Validate that there is at least one DONE button
        if (doneButton.length === 0) {
            console.log('No "DONE" button found');
            return;
        }

        // Click the first "DONE" button
        doneButton[0].click();
        console.log('DONE button clicked');
    }

    // Run the autoClick function repeatedly every 3 seconds
    setInterval(autoClick, 3000); // 3000 ms = 3 seconds

})();
