
var someVar = document.getElementById("regionChartDay");
Highcharts.chart(someVar, {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Average sales in each day of the week'
    },
    xAxis: {
        categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Average sales'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
    },
    series : [
        {
            name: "NorthEast",
            data: [63375.2, 62547.0, 62738.5, 62629.25, 64903.0, 59814.0, 58756.0]
        },
        {
            name: "SouthWest",
            data: [59841.4, 60272.25, 59319.25, 61150.5, 59837.25, 64433.0, 58117.0]
        },
        {
            name: "NorthWest",
            data: [58294.2, 61255.0, 60442.75, 61153.5, 60937.25, 61950.0, 59045.2]
        },
        {
            name: "SouthEast",
            data: [56822.6, 58164.5, 58320.5, 59346.75, 58514.0, 61971.4, 58740.6]
        },
        {
            name: "Central",
            data: [58241.0, 60925.0, 59202.25, 59679.5, 59538.25, 62418.6, 59675.0]
        },
    ]
});