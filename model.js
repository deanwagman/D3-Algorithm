/* Main Model */

var model = {
	values: [],
	numBars: 100,
	initialize: function(){
		for(var i = 0;i < this.numBars; i++){
			this.values.push(Math.floor(Math.random() * this.numBars));
		}
		this.randomize();
	},
	/* For future clock functionality */
	time: function(){
		return new Date();
	},
	/* Shuffles Array */
	randomize: function(){
		for(var i = 0; i < this.values.length; i++){
			var j = Math.floor(Math.random() * this.values.length);
			var jVal = this.values[j];
			this.values[j] = this.values[i];
			this.values[i] = jVal;
		}
	},
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
		}, 1000/60);
	},
	/* IN PROGRESS
	mergeSort: function(){
		var left =  0, 
			right = this.values.length / 2;
		var frame = setInterval(function(){
			if(right < this.values.length){
				if(this.values[right] < this.values[left]){
					var temp = this.values[left];
					this.values[left] = this.values[right];
					this.values[right] = temp;
				}
			}
		}, 1000/60);
	} */
	/* Todo: Add other Sorting algorithms */
};

model.initialize();
