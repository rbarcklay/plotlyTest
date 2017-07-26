/**
 * Created by rachelbarcklay on 7/24/17.
 */
Plotly.d3.csv('outFile_beijing_weather2.csv', function(rows){

    var trace = {
        type: 'scatter',                    // set the chart type
        mode: 'lines',                      // connect points with lines
        x: rows.map(function(row){
            var year = row['YEARMODA'];// set the x-data
            var stringDate = year.toString();
            var year= parseInt(stringDate.slice(0,4));
            var month= parseInt(stringDate.slice(4, 6));
            var day= parseInt(stringDate.slice(6, 8));
            var date = new Date(year, month, day);
            return date ;
        }),
        y: rows.map(function(row){          // set the y-data
            return row['TEMP'];
        }),
        line: {                             // set the width of the line.
            width: 1
        },
        /*error_y: {
            array: rows.map(function(row){    // set the height of the error bars
                return row['10 Min Std Dev'];
            }),
            thickness: 0.5,                   // set the thickness of the error bars
            width: 0
        }*/
    };


    console.log(trace.x);
    console.log(trace.y);

    var layout = {
        yaxis: {title: "Wind Speed"},       // set the y axis title
        xaxis: {
            showgrid: false,                  // remove the x-axis grid lines
            tickformat: "%B, %Y"              // customize the date format to "month, day"
        },
        margin: {                           // update the left, bottom, right, top margin
            l: 40, b: 10, r: 10, t: 20
        }
    };

    Plotly.plot(document.getElementById('wind-speed'), [trace], layout, {showLink: false});
});