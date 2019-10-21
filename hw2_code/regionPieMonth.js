var someVar = document.getElementById("regionPieMonth");
Highcharts.chart(someVar, {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Average sales each month'
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
        name: 'Average sales each month',
        colorByPoint: true,
        data: [{
            name: "Jan",
            y: 11537605.5
        }, {
            name: 'Feb',
            y: 11783336.5
        }, {
            name: 'Mar',
            y: 11503497.5
        }, {
            name: 'Apr',
            y: 11653009.0
        },{
            name: 'May',
            y: 12023085.75
        },{
            name: 'Jun',
            y: 11647872.75
        },{
            name: 'Jul',
            y: 11671713.5
        },{
            name: 'Aug',
            y: 12234701.5
        },{
            name: 'Sep',
            y: 12016076.0
        },{
            name: 'Oct',
            y: 11319166.0
        },{
            name: 'Nov',
            y: 11911041.0
        },{
            name: 'Dec',
            y: 11624733.0
        },]
    }]
});
