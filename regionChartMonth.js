
var someVar = document.getElementById("regionChartMonth");
Highcharts.chart(someVar, {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Average sales in each month of the year'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
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
            data: [2364337.0, 2433462.5, 2370818.0, 2393844.25, 2500621.25, 2416382.0, 2420185.25, 2498651.75, 2460869.5, 2311269.67, 2471960.0, 2385040.33]
        },
        {
            name: "SouthWest",
            data: [2324299.5, 2397355.0, 2332546.0, 2383959.0, 2438008.75, 2346838.25, 2365844.0, 2491582.0, 2431271.75, 2296108.67, 2439570.67, 2362647.33]
        },
        {
            name: "NorthWest",
            data: [2326759.0, 2364878.5, 2302853.0, 2306814.5, 2384784.25, 2353198.75, 2320009.5, 2463602.5, 2403892.5, 2283546.67, 2365601.67, 2293330.67]
        },
        {
            name: "SouthEast",
            data: [2277488.25, 2314767.25, 2267388.25, 2301887.75, 2354270.0, 2274843.25, 2280975.75, 2407673.0, 2379420.0, 2224252.33, 2307021.67, 2317975.67]
        },
        {
            name: "Central",
            data: [2244721.75, 2272873.25, 2229892.25, 2266503.5, 2345401.5, 2256610.5, 2284699.0, 2373192.25, 2340622.25, 2203988.67, 2326887.0, 2265739.0]
        },
    ]
});