var southEast = [
    {
        name: "Fish Fillet-SouthEast",
        data: [273758, 280311, 295045, 283441, 291857, 292491, 296609, 316857, 319799, 320920, 327313, 316554, 329151, 337662, 331055, 339726, 350587, 341280, 349535, 376537, 352561, 350417, 374507, 384386, 377330, 402082, 362463, 402903, 400289, 372841, 385116, 409598, 384032, 333551, 368819, 345917, 364722, 372693, 349094, 368111, 367637, 342772, 347707, 360838, 363665]
    },
    {
        name: "Hamburger-SouthEast",
        data: [1095034, 1167009, 1133899, 1133767, 1215080, 1217717, 1186438, 1319163, 1279199, 1233342, 1257908, 1266216, 1316604, 1405780, 1378270, 1358906, 1347357, 1420841, 1343314, 1447084, 1467806, 1401670, 1439282, 1537545, 1570926, 1545259, 1509031, 1611615, 1601156, 1491366, 1603342, 1574144, 1536130, 1334204, 1417422, 1383670, 1518435, 1432313, 1453373, 1414702, 1470550, 1371090, 1336287, 1386752, 1397616]
    },
    {
        name: "Chicken Fillet-SouthEast",
        data: [456264, 486254, 472458, 491684, 506283, 487485, 494349, 528096, 532999, 534868, 545521, 527590, 570976, 562771, 574279, 544006, 561398, 568801, 582559, 627562, 611586, 607867, 599701, 615520, 628883, 670138, 628762, 645172, 667148, 621402, 641861, 682664, 666178, 555918, 590592, 576529, 607870, 596797, 581824, 613518, 637738, 571287, 556786, 601397, 606109]
    }
];

// Configuration about the plot
var title = {
    text: 'Item sales in SouthEast Region'   
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
json.series = southEast;

// We need to couple the chart data structure with the chartPlaceHolder div
var someVar = document.getElementById("regionChartSE");
Highcharts.chart(someVar, json);