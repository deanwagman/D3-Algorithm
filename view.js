/* Todo: */

/* Used for setting Canvas */
var width = window.innerWidth - 30,
	height = window.innerHeight - 30,
	barWidth = width / model.values.length;

/* d3 */
var x, y, xAxis, yAxis, svg;

x = d3.scale.linear()
		.range([0,width])
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
    .attr("height", height)

   
function update(data, i, j){
	var rect = svg.selectAll('rect').data(data);

	/* Update */
	rect.attr("y", function(d){ return y(d);})
			.attr("height", function(d){ return height - y(d);})
			.attr("class", function(d, index){
				if(index == i){
					return "selector";
				} else if(index > j){
					return "done";
				} else {
					return "bar";
				}
			});

	/* Remove */
	rect.exit().remove();

	/* Create */
	rect.enter().append("rect")
	  	.attr("x", function(d, i){ return i * barWidth;})
		.attr("y", function(d){ return y(d);})
		.attr("height", function(d){ return height - y(d);})
		.attr("width", barWidth - 1)
		.attr("class", "bar");
}




