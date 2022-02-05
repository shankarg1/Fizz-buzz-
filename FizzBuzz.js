var output = [];   // defining Empty array
var count = 1      // initializing count = 1


function fizzbuzz() {


    if (count % 3 === 0 && count % 5 === 0) {    // if count variable is purely divisible by both 3 and 5 it would print fizz buzz
        output.push("fizzbuzz");
    }

    if (count % 3 === 0) {                      // if count variable is purely divisible by  3 then would print fizz 
        output.push("fizz");
    }
    else if (count % 5 === 0) {                // if count variable is purely divisible by  5 then would print buzz 
        output.push("buzz")
    }
    else {
        output.push(count);                  // if count variable is not  divisible by  3 or 5  then would print the original numerical value 
    }
    count = count + 1     // incrementing value by 1


    console.log(output);  // outputting the value to console
}
// calling the function
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
