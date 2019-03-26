'use strict'

$(document).ready(function() {

    let $mainMenuItems = $("#main_menu ul").children("li");
    let totalMainMenuItems = $mainMenuItems.length;
    let openedIndex = 2;

    let init = function() {
        bindEvents();
        if(valideIndex(openedIndex)) {
            animateItem($mainMenuItems.eq(openedIndex), true);
        }
    },

    bindEvents = function() {
        $mainMenuItems.children(".images").click(function() {
            let newIndex = $(this).parent().index();
            checkAndAnimateItem(newIndex);
        });

        $(".bouton").hover(
            function() {
                $(this).addClass("hovered");
        }, function() {
                $(this).removeClass("hovered");
        }
        );

        $(".bouton").click(function() {
            let newIndex = $(this).index();
            checkAndAnimateItem(newIndex);
        });
    },

    valideIndex = function(indexToCheck) {
        return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);
    },

    animateItem = function($item, toOpen) {
        let $colorImage = $item.find(".couleur");
        let itemParam = toOpen ? {width: "500px"}:{width: "230px"};
        let colorImageParam = toOpen ? {left: "0px"}:{left: "230px"};
    
        $colorImage.animate(colorImageParam,0);
        $item.animate(itemParam,100);
    },

    checkAndAnimateItem = function(indexToCheckAndAnimate) {
        if(openedIndex === indexToCheckAndAnimate) {
            animateItem($mainMenuItems.eq(indexToCheckAndAnimate), false);
            openedIndex = -1;
        } else {
            if(valideIndex(indexToCheckAndAnimate)) {
                animateItem($mainMenuItems.eq(openedIndex), false);
                openedIndex = indexToCheckAndAnimate; 
                animateItem($mainMenuItems.eq(openedIndex), true);
            }
        }
    };

    init();

});