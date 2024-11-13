# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.

## Answer 
Looking at each part of our code we can see that there is an outer loop, inner loop, check for an edge and add it to the list. 
- Outer Loop: Runs $n$ times
- Inner Loop: Runs $n$ times
- This nested loop give us $n \times n$ because we iterate through every cell in the $n \times n$ matrix
- Our final complexity is $O(n^{2})$

The complexity depends on the number of vertices. Since we need to check every vertex in the matrix regardless of wether or not the edge exists.  

“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”


