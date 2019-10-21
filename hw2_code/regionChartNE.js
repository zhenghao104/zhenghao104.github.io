var northEast = [
    {
        name: "Fish Fillet-Northeast",
        data: [285238, 293882, 296881, 296648, 305637, 321358, 321106, 330837, 334213, 333140, 343235, 320075, 345253, 355715, 359344, 357365, 353755, 357365, 354989, 380674, 369478, 366626, 393154, 397166, 409773, 422190, 378264, 422380, 435180, 405816, 401540, 413707, 417929, 361700, 387871, 347515, 379785, 375948, 379785, 387381, 383468, 357594, 364594, 360912, 379476]
    },
    {
        name: "Hamburger-NorthEast",
        data: [1140955, 1175529, 1235995, 1186592, 1272450, 1235025, 1284426, 1323348, 1284426, 1280303, 1319100, 1280303, 1381012, 1480936, 1381012, 1429463, 1472779, 1487808, 1419956, 1522698, 1538236, 1466507, 1572618, 1588665, 1574815, 1688763, 1574816, 1623266, 1672456, 1559609, 1671717, 1654831, 1606160, 1380063, 1551486, 1446801, 1581146, 1503795, 1519140, 1488760, 1596480, 1488759, 1458378, 1502572, 1458379]
    },
    {
        name: "Chicken Fillet-Northeast",
        data: [494802, 489804, 494802, 514593, 530187, 535597, 535177, 551395, 535177, 555233, 572058, 533459, 575421, 617056, 598908, 572252, 589593, 619920, 615797, 634457, 615797, 611044, 655257, 661944, 656173, 703651, 656173, 676361, 725300, 676361, 669233, 717656, 696549, 579193, 621101, 579193, 632975, 626581, 608152, 620316, 665200, 620316, 583828, 601520, 607658]
    }
];

// Configuration about the plot
var title = {
    text: 'Item sales in NorthEast Region'   
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
json.series = northEast;

// We need to couple the chart data structure with the chartPlaceHolder div
var someVar = document.getElementById("regionChartNE");
Highcharts.chart(someVar, json);

