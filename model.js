/* All of the Model Work */

var model = {
	values: [],
	numBars: 140,
	// Creates an Array of random values
	initialize: function(){
		for(var i = 0;i < this.numBars; i++){
			this.values.push(Math.floor(Math.random() * this.numBars));
		}
		this.randomize();
	},
	// Future Use for the Clock Transition
	time: function(){
		return new Date();
	},
	// Shuffles the Array
	randomize: function(){
		for(var i = 0; i < this.values.length; i++){
			var j = Math.floor(Math.random() * this.values.length);
			var jVal = this.values[j];
			this.values[j] = this.values[i];
			this.values[i] = jVal;
		}
	},
	// Bubble Sorts the array
	bubbleSort: function(){
		var i = 0, id, sorted = false, j = model.values.length - 1;
		var frame = setInterval(function(){
			if(i < j){
				if(model.values[i] > model.values[i+1]){
					var temp = model.values[i];
					model.values[i] = model.values[i+1];
					model.values[i+1] = temp;
				}
				i++;
			} 
			else{
				i = 0;
				j--;
				if(j == 0){
					clearInterval(frame);
				}
			}
			update(model.values, i, j);
		}, 10);
	}
	/* Add other Sorting Algorithms */
};

model.initialize();