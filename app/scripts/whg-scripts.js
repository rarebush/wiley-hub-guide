/// scrolling times
$(document).ready(function () {
    // bind click event to all internal page anchors
    $('a[href*="#"]').on('click', function (e) {

        if (!(this.hasAttribute("data-toggle"))) {
            // prevent default action and bubbling
            e.preventDefault();
            e.stopPropagation();
            // set target to anchor's "href" attribute
            var target = $(this).attr('href');
            // scroll to each target
            $(target).velocity('scroll', {
                duration: 500,
                offset: -40,
                easing: 'ease-in-out'
            });
        }

    });
});

/// menu drawer function
function toggleDrawer() {
    var drawer = document.getElementById("whg-menu-drawer");
    if (drawer.classList.contains("whg-menu-drawer--closed")) {
        drawer.classList.remove("whg-menu-drawer--closed");
        document.body.classList.add("noscroll");
    } else {
        drawer.classList.add("whg-menu-drawer--closed");
        document.body.classList.remove("noscroll");
    }
}

//// get quick start form array and save as csv

function exportToCsv(filename, rows) {
    var processRow = function (row) {
        var finalVal = '';
        for (var j = 0; j < row.length; j++) {
            var innerValue = row[j] === null ? '' : row[j].toString();
            if (row[j] instanceof Date) {
                innerValue = row[j].toLocaleString();
            };
            var result = innerValue.replace(/"/g, '""');
            if (result.search(/("|,|\n)/g) >= 0)
                result = '"' + result + '"';
            if (j > 0)
                finalVal += ',';
            finalVal += result;
        }
        return finalVal + '\n';
    };

    var csvFile = '';
    for (var i = 0; i < rows.length; i++) {
        csvFile += processRow(rows[i]);
    }

    var blob = new Blob([csvFile], {
        type: 'text/csv;charset=utf-8;'
    });
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, filename);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", filename);
            link.style = "visibility:hidden";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}

function downloadCSV() {

    var fields = $(":input").serializeArray();

    //create CSV header labels
    var exportData = [['name', 'value']];

    //prepare a JSON element for CSV export
    jQuery.each(fields, function (i, currentRow) {
        exportData.push([currentRow.name, currentRow.value]);
    });

    //create a date/time string to be used in the file name
    var now = new Date();
    var currentDateTimeString = now.getMonth() + 1 + '-' + now.getDate() + '-' + now.getFullYear() + '-' + now.getHours() + now.getMinutes() + now.getSeconds();

    //generate file
    exportToCsv('hub-' + currentDateTimeString + '.csv', exportData);

}

//activate functions

window.onload = function () {
    document.getElementById("whg-menu-toggle").onclick = function activateToggle() {
        toggleDrawer();
    }
    document.getElementById("whg-menu-toggle__close-button").onclick = function activateToggle() {
        toggleDrawer();
    }
    document.getElementById("whg-menu-drawer__overlay").onclick = function activateToggle() {
        toggleDrawer();
    }
    var drawerItem = {};
    var drawerItems = document.getElementById("whg-menu-drawer").getElementsByTagName("a");
    for (var k = 0; k < drawerItems.length; k++) {
        drawerItem = drawerItems[k]
        drawerItem.onclick = function activateToggle() {
            toggleDrawer();
        }
    }


}


/// change logo

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {

            var logoImages = document.getElementsByClassName("logo-placeholder");

            for (var i = 0; i < logoImages.length; i++) {
                logoImages[i].src = e.target.result;
                if (logoImages[i].hasAttribute("xlink:href")) {
                    logoImages[i].setAttribute("xlink:href", e.target.result);
                }
            }
        }

        reader.readAsDataURL(input.files[0]);
    }
}




////colour stuff

var options = {
    valueElement: null,
    width: 200,
    height: 120,
    sliderSize: 20,
    position: 'bottom',
    borderColor: '#CCC',
    insetColor: '#CCC',
    backgroundColor: '#e8e8e8'
};

var pickers = {};

pickers.bgcolor = new jscolor('bgcolor-button', options);
pickers.bgcolor.onFineChange = "update('bgcolor')";
pickers.bgcolor.fromString('A0C7E5');

pickers.fgcolor = new jscolor('fgcolor-button', options);
pickers.fgcolor.onFineChange = "update('fgcolor')";
pickers.fgcolor.fromString('E87700');

function update(id) {
    var primaryElements = document.getElementsByClassName('brand-primary');
    for (var i = 0; i < primaryElements.length; i++) {
        primaryElements[i].style.fill = pickers.bgcolor.toHEXString();
    }
    var secondaryElements = document.getElementsByClassName('brand-secondary');
    for (var j = 0; j < secondaryElements.length; j++) {
        secondaryElements[j].style.fill = pickers.fgcolor.toHEXString();
    }

    document.getElementById(id + '-rgb').value = pickers[id].toRGBString();
    document.getElementById(id + '-hex').value = pickers[id].toHEXString();
    document.getElementById(id + '-qshex').value = pickers[id].toHEXString();
}

function setHSV(id, h, s, v) {
    pickers[id].fromHSV(h, s, v);
    update(id);
}

function setRGB(id, r, g, b) {
    pickers[id].fromRGB(r, g, b);
    update(id);
}

function setString(id, str) {
    pickers[id].fromString(str);
    update(id);
}

update('bgcolor');
update('fgcolor');


//// sticky heading

var h = document.getElementById("site-heading");
var stuck = false;
var stickPoint = getDistance();

function getDistance() {
    var topDist = h.offsetTop;
    return topDist;
}

window.onscroll = function (e) {
    var distance = getDistance() - window.pageYOffset;
    var offset = window.pageYOffset;
    if ((distance <= -4) && !stuck) {
        h.style.position = 'fixed';
        h.style.top = '0px';
        h.classList.add('stuck');
        stuck = true;
    } else if (stuck && (offset <= stickPoint)) {
        h.style.position = 'absolute';
        h.classList.remove('stuck');
        stuck = false;
    }
}