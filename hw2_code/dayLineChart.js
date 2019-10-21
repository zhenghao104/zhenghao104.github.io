var week = [
    {
        name: "Sales",
        data: [19771.63, 20210.92, 20001.55, 20263.97, 20248.65, 20705.8, 19622.23]
    }
];

// Configuration about the plot
var title = {
    text: 'Average sales on different day of the week in Jan16'   
 };

 var xAxis =  {
    categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    plotLines: [{
        color: '#FF0000', // Red
        width: 2,
        value: 32.95
    }]
};

 var yAxis = {
    title: {
       text: 'Average sales'
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
json.series = week;

// We need to couple the chart data structure with the chartPlaceHolder div
var someVar = document.getElementById("dayLineChart");
Highcharts.chart(someVar, json);