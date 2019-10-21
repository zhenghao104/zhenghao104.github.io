var northWest = [
    {
        name: "Fish Fillet-NorthWest",
        data: [277904, 297009, 287914, 299021, 296894, 297791, 312783, 320998, 311072, 312657, 332200, 309186, 348938, 357086, 348336, 332251, 341872, 346472, 341959, 384175, 373128, 355243, 365028, 388445, 381143, 410157, 383000, 409561, 405637, 392311, 391671, 399283, 404600, 351612, 374943, 335935, 383642, 365108, 354262, 360552, 386770, 347520, 340200, 351250, 353659]
    },
    {
        name: "Hamburger-NorthWest",
        data: [1111618, 1188037, 1151657, 1149180, 1187579, 1239785, 1202069, 1283993, 1295077, 1301675, 1276693, 1287225, 1341018, 1428344, 1393347, 1329007, 1367489, 1442457, 1367838, 1536702, 1433985, 1478973, 1519708, 1492847, 1586799, 1640630, 1532001, 1574000, 1622550, 1569245, 1566687, 1662321, 1618403, 1351293, 1440957, 1343743, 1534569, 1460434, 1474888, 1442209, 1547080, 1446819, 1416344, 1462348, 1472377]
    },
    {
        name: "Chicken Fillet-NorthWest",
        data: [482079, 475603, 499443, 498369, 494824, 496319, 500862, 534997, 518454, 521095, 553667, 515310, 558757, 571804, 557794, 576355, 593043, 601024, 593195, 640292, 597493, 592072, 633211, 647408, 661166, 656788, 638333, 655833, 676062, 653852, 679430, 692634, 647890, 586020, 600398, 559893, 639403, 608514, 590437, 600920, 619337, 579200, 567000, 585417, 589432]
    }
];

// Configuration about the plot
var title = {
    text: 'Item sales in NorthWest Region'   
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
json.series = northWest;

// We need to couple the chart data structure with the chartPlaceHolder div
var someVar = document.getElementById("regionChartNW");
Highcharts.chart(someVar, json);