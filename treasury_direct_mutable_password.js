// ==UserScript==
// @name         TreasuryDirect Mutable Password Input
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  makes the password field mutable
// @author       Scott Conway
// @match        https://www.treasurydirect.gov/RS/PW-Display.do
// @grant        none
// ==/UserScript==

(function() {
    document.querySelectorAll('.pwordinput')[0].removeAttribute('readonly');
})();
