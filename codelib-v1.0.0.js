class sorting{
    constructor(){
        this.bubbleSort =(array)=> {
        var first;
        var second;
        for (var i = 0; i < array.length; i++) {
            for (var j = 0; j < array.length; j++) {
                first = array[j];
                second = array[j + 1];
                if (first > second) {
                    array[j] = second;
                    array[j + 1] = first;
                }
            }
        }
        return array;
        }
    }
}
const Sorting = new sorting();