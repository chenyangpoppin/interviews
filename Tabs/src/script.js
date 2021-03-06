/**
 * Tab Switch Component
 * 
 * @Date 2020-05-30
 */

;(function(win, undefined) {
  'use strict';

  let doc = window.document;

  let initTabs = function() {
    let oTabs        = doc.getElementsByClassName('tab');
    let oTabContents = doc.getElementsByClassName('tab-content');
    let activeClass  = 'active';

    for (let i = 0, len1 = oTabs.length; i < len1; i++) {
      oTabs[i].addEventListener('click', function(e) {
        for (let j = 0, len2 = oTabs.length; j < len2; j++) {
          oTabs[j].classList.remove(activeClass);
          oTabContents[j].classList.remove(activeClass);
        }

        this.classList.add(activeClass);
        oTabContents[i].classList.add(activeClass);
      }, false);
    }
  };

  win.onload = initTabs;
})(window);