

var header = document.querySelector('header');
var section = document.querySelector('section');

let requestURL = './school.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var mySchool = request.response;
    populateHeader(mySchool);
    showtimeTable(mySchool);
}

function populateHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['schoolName'];
    header.appendChild(myH1);

    // var myPara = document.createElement('p');
    // myPara.textContent = '>> school Name: ' + jsonObj['schoolName'] + ' >> Formed: ' + jsonObj['city'] + ' >> year: ' + jsonObj['year'];
    // header.appendChild(myPara);
}

function showtimeTable(jsonObj) {
    var timeTable = jsonObj['days'];

    var tbl = document.createElement('table');
    for (i = 0; i < timeTable.length; i++) {
        // var myArticle = document.createElement('article');
        // var myH2 = document.createElement('h2');
        var tblTr = document.createElement('tr');
        var col0 = document.createElement('td');
        var col1 = document.createElement('td');
        var col2 = document.createElement('td');
        var col3 = document.createElement('td');
        var col4 = document.createElement('td');
        var col5 = document.createElement('td');
        var col6 = document.createElement('td');
        var col7 = document.createElement('td');

        col0.textContent = timeTable[i].index;
        col1.textContent = timeTable[i].day1;
        col2.textContent = timeTable[i].day2;
        col3.textContent = timeTable[i].day3;
        col4.textContent = timeTable[i].day4;
        col5.textContent = timeTable[i].day5;
        col6.textContent = timeTable[i].day6;
        col7.textContent = timeTable[i].day7;

        tbl.appendChild(tblTr);
        tblTr.appendChild(col0);
        tblTr.appendChild(col1);
        tblTr.appendChild(col2);
        tblTr.appendChild(col3);
        tblTr.appendChild(col4);
        tblTr.appendChild(col5);
        tblTr.appendChild(col6);
        tblTr.appendChild(col7);

        section.appendChild(tbl);
    }
}
