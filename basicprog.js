//convert celcius to farenheit

function cToF(celsius) 
{
  var cel = celsius;
  var ctoFahr = cel * 9 / 5 + 32;
  var message = cel+' C is ' + ctoFahr + ' F.';
    console.log(message);
}

function fToC(fahrenheit) 
{
  var far = fahrenheit;
  var ftoCel = (far - 32) * 5 / 9;
  var message = far+' F is ' + ftoCel + ' C.';
    console.log(message);
} 
cToF(60);
fToC(45);

//reverse the string

function reverse(str) 
{
    return str.split("").reverse().join("");
}

console.log(reverse("Akshya"));

//capitalize the first letter

function capital(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

console.log(capital("program to capitalize each first letter"));

//convert minutes to time

function time(num)
 { 
  var hours = Math.floor(num / 60);  
  var minutes = num % 60;
  return hours + ":" + minutes;         
}

console.log(time(71));

//sort the letters of string

function order(str) { 

    return str.split("").sort().join("");
         
}

console.log(order("Software"));

//swap first and last number in array

function swap(num) {
    [num[0], num[num.length - 1]] = [num[num.length - 1], num[0]];
    return num;
}
console.log(swap([1, 2, 3, 4]));

//count digits of a number

function digits(num) {
    var ctr = 0;
    while (num) {
      ctr += 1;
      num = Math.floor(num / 10);
    }
    return ctr;
  }
  
  console.log(digits(123));

  //maximum difference between the adjacent digits in numy

  function difference(arr) {
	var max = -1;
    var temp;
	for (var i = 0; i < arr.length - 1; i++)
      {
		temp = Math.abs(arr[i] - arr[i + 1]);
		max = Math.max(max, temp);
	  }
	return max;
}

console.log(difference([1, 2, 3, 8, 9]))

//maximum occuring number in a array

function max_number(arr) {
    var ctr = [],
      ans = 0;
  
    for(var i = 0; i < 10; i++) {
      ctr.push(0);
    }
    for(var i = 0; i < arr.length; i++) {
      ctr[arr[i] - 1]++;
      if(ctr[arr[i] - 1] > ctr[ans]) {
        ans = arr[i] - 1;
      }
    }
    return ans + 1;  
  }
  console.log(max_number([1, 2, 3, 2, 2, 8, 1, 9]))