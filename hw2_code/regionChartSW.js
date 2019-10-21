var southWest = [
    {
        name: "Fish Fillet-SouthWest",
        data: [281141, 288369, 293148, 291505, 312421, 303477, 317371, 326218, 330162, 328780, 337129, 313813, 339137, 362897, 353379, 352762, 363004, 353491, 362118, 374781, 365704, 376954, 385543, 392687, 386113, 399437, 387918, 401404, 410552, 399356, 413024, 406276, 410538, 342805, 366208, 341023, 374906, 384415, 375873, 381022, 391937, 352518, 344824, 355578, 372419]
    },
    {
        name: "Hamburger-SouthWest",
        data: [1124565, 1200559, 1220454, 1213616, 1249686, 1213908, 1269486, 1358134, 1268860, 1315120, 1348519, 1306490, 1356550, 1451591, 1358087, 1411049, 1395077, 1471677, 1391670, 1560316, 1462819, 1448688, 1542173, 1570750, 1607493, 1597750, 1551672, 1605619, 1709237, 1534783, 1587310, 1625106, 1642152, 1351220, 1524624, 1419772, 1499626, 1537661, 1444534, 1524090, 1506271, 1410073, 1379296, 1422314, 1431260]
    },
    {
        name: "Chicken Fillet-SouthWest",
        data: [468568, 480616, 508522, 485843, 520702, 505795, 508209, 565889, 528691, 526477, 561883, 523023, 565229, 604829, 588966, 564881, 581282, 589151, 603530, 650131, 634386, 603620, 617373, 628813, 643522, 665729, 621175, 669008, 684253, 665594, 688374, 704765, 657397, 594662, 635260, 591571, 650348, 615567, 626456, 635037, 627613, 587530, 598164, 616820, 620699]
    }
];

// Configuration about the plot
var title = {
    text: 'Item sales in SouthWest Region'   
 };

 var xAxis =  {
    categories: ['Jan-16',
    'Feb-16',
    'Mar-16',
    'Apr-16',
    'May-16',
    'Jun-16',
    'Jul-16',
    'Aug-16',
    'Sep-16',
    'Oct-16',
    'Nov-16',
    'Dec-16',
    'Jan-17',
    'Feb-17',
    'Mar-17',
    'Apr-17',
    'May-17',
    'Jun-17',
    'Jul-17',
    'Aug-17',
    'Sep-17',
    'Oct-17',
    'Nov-17',
    'Dec-17',
    'Jan-18',
    'Feb-18',
    'Mar-18',
    'Apr-18',
    'May-18',
    'Jun-18',
    'Jul-18',
    'Aug-18',
    'Sep-18',
    'Oct-18',
    'Nov-18',
    'Dec-18',
    'Jan-19',
    'Feb-19',
    'Mar-19',
    'Apr-19',
    'May-19',
    'Jun-19',
    'Jul-19',
    'Aug-19',
    'Sep-19'],
    plotLines: [{
        color: '#FF0000', // Red
        width: 2,
        value: 32.95
    }]
};

 var yAxis = {
    title: {
       text: 'Total sales'
    },
    plotLines: [{
       value: 0,
       width: 1,
       color: '#808080'
    }]
 }; 

 var legend = {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
    borderWidth: 0
 };

 // Data structure to hold all the configurations together
 var json = {};

  // Tying all the configurations
json.title = title;
json.xAxis = xAxis;
json.yAxis = yAxis;
json.legend = legend;

// Tying the data as the series data
json.series = southWest;

// We need to couple the chart data structure with the chartPlaceHolder div
var someVar = document.getElementById("regionChartSW");
Highcharts.chart(someVar, json);