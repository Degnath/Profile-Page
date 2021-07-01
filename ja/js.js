function reverse(arr){
    for(var i = 0; i < arr.length/2; i++) {
        var temp = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = temp;
    }
        return arr;
}

console.log(reverse(["a", "b", "c", "d", "e"]));


function fizzBuzz() {
    		var result = "";
    		for(var i = 1; i <= 100; i++) {
    			result = result + (i % 15 == 0 ? "FizzBuzz\n":
    				(i % 5 ==0)? "Buzz\n": (i%3==0) ? "Fizz\n": ""+i +"\n");
    		}
    		console.log(result);
    	}
        fizzBuzz(1,100);