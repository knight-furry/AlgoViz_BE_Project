// var cars = ["Saab", "Volvo", "BMW"];
let arr = [
    'Enqueue: Adds an item to the queue. If the queue is full, then it is said to be an Overflow condition.' ,
    'Dequeue: Removes an item from the queue. The items are popped in the same order in which they are pushed.' ,
    'O(1), pronounced ‘Oh of one’, or constant complexity' ,
    'Usually a binary tree will not be perfectly balanced, so we will need an algorithm to determine its size' ,
    'O(2n), ‘Oh of two to the en’, or exponential complexity' ,
    'The time complexity of the binary search algorithm is O(log n). ' ,
    'Linear search does the sequential access whereas Binary search access data randomly',
    'Time complexity of linear search -O(n)',
    'selection sort has an O(n2) time complexity'

];


function new_quote() {  
    var random_num = Math.floor(Math.random() * (arr.length));
    document.getElementById('quote_display').innerHTML = arr[random_num];
}