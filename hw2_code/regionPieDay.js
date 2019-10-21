var someVar = document.getElementById("regionPieDay");
Highcharts.chart(someVar, {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Average sales each day of the week'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Average sales each day of the week',
        colorByPoint: true,
        data: [{
            name: "Sunday",
            y: 296574.4
        }, {
            name: 'Monday',
            y: 303163.75
        }, {
            name: 'Tuesday',
            y: 300023.25
        }, {
            name: 'Wednesday',
            y: 303959.5
        },{
            name: 'Thursday',
            y: 303729.75
        },{
            name: 'Friday',
            y: 310587.0
        },{
            name: 'Saturday',
            y: 294333.4
        },]
    }]
});
