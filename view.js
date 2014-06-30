// View.js

var model, view, d3;
model = model || {};


/* Setting the Canvas */
var width = window.innerWidth - 40,
    height = 300,
    barWidth = width / model.values.length;

var x, y, xAxis, yAxis, svg;

x = d3.scale.linear()
        .range([0, width])
        .domain([1, d3.max(model.values)]);

y = d3.scale.linear()
        .range([height, 0])
        .domain([0, d3.max(model.values)]);

xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

svg = d3.select("#container")
    .attr("width", width)
    .attr("height", height);

/* Main D3 function, updates view from model data */
function update(data, i, j) {
    var rect = svg.selectAll('rect').data(data);

    /* Update */
    rect.attr("y", function (d) { return y(d); })
        .attr("height", function (d) { return height - y(d); })
        .attr("class", function (d, index) {
            if (index === i) {
                return "selector";
            }
            if (index > j) {
                return "done";
            }
            return "bar";
        });

    /* Remove */
    rect.exit().remove();

    /* Add */
    rect.enter().append("rect")
        .attr("x", function (d, i) { return i * barWidth; })
        .attr("y", function (d) { return y(d); })
        .attr("height", function (d) { return height - y(d); })
        .attr("width", barWidth - 1)
        .attr("class", "bar");
}
