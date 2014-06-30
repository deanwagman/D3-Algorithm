/* Main Model */

var model = {
    values: [],
    numBars: 120,
    initialize: function () {
        var i;
        for (i = 0; i < this.numBars; i++) {
            this.values.push(Math.floor(Math.random() * this.numBars));
        }
        this.randomize();
    },
    /* For future clock functionality */
    time: function () {
        return new Date();
    },
    /* Shuffles Array */
    randomize: function () {
        var i, j, jVal; // Left, Right, Temporary Value
        for (i = 0; i < this.values.length; i++) {
            j = Math.floor(Math.random() * this.values.length);
            jVal = this.values[j];
            this.values[j] = this.values[i];
            this.values[i] = jVal;
        }
    },
    bubbleSort: function () {
        var i, j;
        i = 0; // Left
        j = model.values.length - 1; // Right
        function step() {
            var temp;
            if (i < j) {
                if (model.values[i] > model.values[i + 1]) {
                    temp = model.values[i];
                    model.values[i] = model.values[i + 1];
                    model.values[i + 1] = temp;
                }
                i++;
            } else {
                i = 0;
                j--;
                if (j === 0) {
                    update(model.values, i, j);
                    return true;
                }
            }
            update(model.values, i, j);
        }
        d3.timer(step, 1000);
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
