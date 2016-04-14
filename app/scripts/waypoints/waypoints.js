var allWaypointElements = document.getElementsByTagName("section")
for (var i = 0; i < allWaypointElements.length; i++) {
    new Waypoint({
        element: allWaypointElements[i],
        handler: function () {
            var allImages = document.getElementsByClassName("whg-section__image");
            for (var i = 0; i < allImages.length; i++) {
                allImages[i].classList.remove("otherclass");
            }
            this.element.getElementsByClassName("whg-section__image")[0].classList.add("otherclass");
        },
        offset: 'bottom-in-view'
    })
    new Waypoint({
        element: allWaypointElements[i],
        handler: function () {
            var allImages = document.getElementsByClassName("whg-section__image");
            for (var i = 0; i < allImages.length; i++) {
                allImages[i].classList.remove("otherclass");
            }
            this.element.getElementsByClassName("whg-section__image")[0].classList.add("otherclass");
        },
        offset: '50%'
    })
}