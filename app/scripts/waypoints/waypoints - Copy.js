//
// home
//
var waypoint = new Waypoint({
    element: document.getElementById('home'),
    handler: function (up) {
        var allImages = document.getElementsByClassName("whg-section__image");
        for (var i = 0; i < allImages.length; i++) {
            allImages[i].classList.remove("otherclass");
        }
        document.getElementById('home').getElementsByClassName("whg-section__image")[0].classList.add("otherclass");
    },
    offset: 'bottom-in-view'
})
var waypoint = new Waypoint({
    element: document.getElementById('home'),
    handler: function () {
        var allImages = document.getElementsByClassName("whg-section__image");
        for (var i = 0; i < allImages.length; i++) {
            allImages[i].classList.remove("otherclass");
        }
        document.getElementById('home').getElementsByClassName("whg-section__image")[0].classList.add("otherclass");
    },
    offset: '50%'
})
//
// section 1
//
var waypoint = new Waypoint({
    element: document.getElementById('section-1'),
    handler: function (up) {
        var allImages = document.getElementsByClassName("whg-section__image");
        for (var i = 0; i < allImages.length; i++) {
            // PERFORM STUFF ON THE ELEMENT
            allImages[i].classList.remove("otherclass");
        }
        document.getElementById('section-1').getElementsByClassName("whg-section__image")[0].classList.add("otherclass");
    },
    offset: 'bottom-in-view'
})
var waypoint = new Waypoint({
    element: document.getElementById('section-1'),
    handler: function (down) {
        var allImages = document.getElementsByClassName("whg-section__image");
        for (var i = 0; i < allImages.length; i++) {
            // PERFORM STUFF ON THE ELEMENT
            allImages[i].classList.remove("otherclass");
        }
        document.getElementById('section-1').getElementsByClassName("whg-section__image")[0].classList.add("otherclass");
    },
    offset: '50%'
})
var waypoint = new Waypoint({
    element: document.getElementById('section-2'),
    handler: function (up) {
        var allImages = document.getElementsByClassName("whg-section__image");
        for (var i = 0; i < allImages.length; i++) {
            // PERFORM STUFF ON THE ELEMENT
            allImages[i].classList.remove("otherclass");
        }
        document.getElementById('section-2').getElementsByClassName("whg-section__image")[0].classList.add("otherclass");
    },
    offset: 'bottom-in-view'
})
var waypoint = new Waypoint({
    element: document.getElementById('section-2'),
    handler: function (down) {
        var allImages = document.getElementsByClassName("whg-section__image");
        for (var i = 0; i < allImages.length; i++) {
            // PERFORM STUFF ON THE ELEMENT
            allImages[i].classList.remove("otherclass");
        }
        document.getElementById('section-2').getElementsByClassName("whg-section__image")[0].classList.add("otherclass");
    },
    offset: '50%'
})
var waypoint = new Waypoint({
    element: document.getElementById('section-3'),
    handler: function (up) {
        var allImages = document.getElementsByClassName("whg-section__image");
        for (var i = 0; i < allImages.length; i++) {
            // PERFORM STUFF ON THE ELEMENT
            allImages[i].classList.remove("otherclass");
        }
        document.getElementById('section-3').getElementsByClassName("whg-section__image")[0].classList.add("otherclass");
    },
    offset: 'bottom-in-view'
})
var waypoint = new Waypoint({
    element: document.getElementById('section-3'),
    handler: function (down) {
        var allImages = document.getElementsByClassName("whg-section__image");
        for (var i = 0; i < allImages.length; i++) {
            // PERFORM STUFF ON THE ELEMENT
            allImages[i].classList.remove("otherclass");
        }
        document.getElementById('section-3').getElementsByClassName("whg-section__image")[0].classList.add("otherclass");
    },
    offset: '50%'
})
var waypoint = new Waypoint({
    element: document.getElementById('section-4'),
    handler: function (up) {
        var allImages = document.getElementsByClassName("whg-section__image");
        for (var i = 0; i < allImages.length; i++) {
            // PERFORM STUFF ON THE ELEMENT
            allImages[i].classList.remove("otherclass");
        }
        document.getElementById('section-4').getElementsByClassName("whg-section__image")[0].classList.add("otherclass");
    },
    offset: 'bottom-in-view'
})
var waypoint = new Waypoint({
    element: document.getElementById('section-4'),
    handler: function (down) {
        var allImages = document.getElementsByClassName("whg-section__image");
        for (var i = 0; i < allImages.length; i++) {
            // PERFORM STUFF ON THE ELEMENT
            allImages[i].classList.remove("otherclass");
        }
        document.getElementById('section-4').getElementsByClassName("whg-section__image")[0].classList.add("otherclass");
    },
    offset: '50%'
})