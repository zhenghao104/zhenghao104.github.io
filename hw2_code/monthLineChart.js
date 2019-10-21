var month = [
    {
        name: "Sales",
        data: [759162.75, 771589.08, 755796.08, 767295.92, 784756.67, 758281.08, 760325.25, 802557.67, 793140.0, 741417.44, 769007.22, 772658.55]
    }
];

// Configuration about the plot
var title = {
    text: 'Average sales on different month of the year'   
 };

 var xAxis =  {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
json.series = month;

// We need to couple the chart data structure with the chartPlaceHolder div
var someVar = document.getElementById("monthLineChart");
Highcharts.chart(someVar, json);