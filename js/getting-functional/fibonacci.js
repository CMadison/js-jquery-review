// Return the nth number of the Fibonacci sequence.

// http://en.wikipedia.org/wiki/Fibonacci_number

// Example Input 7

var Fib = function(n) {
  if (n <= 1)
    return n;
  return Fib(n-1) + Fib(n-2);
}
Fib(7);

// Example Output 13
