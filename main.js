// ==UserScript==
// @name         Auto bot-hosting.net
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  auto claims credit @ bot-hosting.net
// @author       Skearch
// @match        https://bot-hosting.net/panel/earn*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log("Auto bot hosting loaded.");

    function clickButtonUntilHidden() {
        var button = document.evaluate(
            '/html/body/div[1]/div/section/section/article/div/main/div[1]/div/div[1]/div/div/button',
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        ).singleNodeValue;

        if (button) {
            button.click();
        }

        setTimeout(function() {
            clickButtonUntilHidden();

            var adModal = document.evaluate(
                '//*[@id="adModal"]/div/span',
                document,
                null,
                XPathResult.FIRST_ORDERED_NODE_TYPE,
                null
            ).singleNodeValue;

            if (adModal) {
                adModal.click();
            } else {
                var newButton = document.evaluate(
                    '/html/body/div[2]/div/div[4]/div/button',
                    document,
                    null,
                    XPathResult.FIRST_ORDERED_NODE_TYPE,
                    null
                ).singleNodeValue;

                if (newButton) {
                    newButton.click();
                }
            }
        }, 1000);
    }

    clickButtonUntilHidden();
})();
