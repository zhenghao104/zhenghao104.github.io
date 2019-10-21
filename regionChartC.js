var central = [
    {
        name: "Fish Fillet-Central",
        data: [281619, 288586, 280523, 290533, 300695, 299149, 305238, 325990, 313830, 315738, 322006, 299960, 335816, 346582, 340153, 333820, 345348, 349916, 342962, 372372, 348303, 357638, 368888, 379492, 371758, 394944, 371698, 383213, 411381, 383726, 395865, 385962, 380019, 341113, 362978, 340130, 358696, 368463, 343966, 362020, 360401, 351858, 341534, 340279, 345807]
    },
    {
        name: "Hamburger-Central",
        data: [1126476, 1109076, 1167894, 1116560, 1155612, 1149673, 1220954, 1252825, 1255322, 1213425, 1288024, 1199842, 1290590, 1386331, 1307257, 1335282, 1381392, 1344775, 1318052, 1431076, 1450080, 1374453, 1475555, 1517969, 1547730, 1517826, 1486792, 1532852, 1580994, 1474712, 1583461, 1543848, 1520076, 1364454, 1451913, 1360520, 1434785, 1416053, 1375864, 1448080, 1500448, 1407434, 1366136, 1416674, 1383228]
    },
    {
        name: "Chicken Fillet-Central",
        data: [450958, 462115, 486622, 465233, 481505, 479030, 508730, 543317, 502539, 526230, 515630, 499934, 537745, 554985, 566922, 556367, 553008, 583193, 549188, 620620, 604200, 572688, 590704, 632487, 644887, 632427, 595202, 638688, 685635, 639543, 659775, 669525, 659216, 546227, 604963, 566883, 597827, 614105, 596676, 603366, 625187, 563433, 546901, 590281, 599869]
    }
];

// Configuration about the plot
var title = {
    text: 'Item sales in Central Region'   
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
json.series = central;

// We need to couple the chart data structure with the chartPlaceHolder div
var someVar = document.getElementById("regionChartC");
Highcharts.chart(someVar, json);