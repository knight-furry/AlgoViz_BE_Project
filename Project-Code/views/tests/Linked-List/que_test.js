// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Which of the following is not a disadvantage to the usage of array?",
    answer: "Accessing elements at specified positions",
    options: [
      "Fixed size",
      "There are chances of wastage of memory space if elements inserted in an array are lesser than the allocated size",
      "Insertion based on position",
      "Accessing elements at specified positions"
    ]
  },
    {
    numb: 2,
    question: "What is the time complexity of inserting at the end in dynamic arrays?",
    answer: "O(n)",
    options: [
      "O(1)",
       "O(n)",
       "O(logn)",
       "Either O(1) or O(n)"
    ]
  },
    {
    numb: 3,
    question: "What is the space complexity for deleting a linked list?",
    answer: "O(1)",
    options: [
      "O(1)",
       "O(n)",
       "Either O(1) or O(n)",
       "O(logn)"
    ]
  },
    {
    numb: 4,
    question: " Which of these is not an application of a linked list?",
    answer: "Random Access of elements",
    options: [
      "To implement file systems",
      "For separate chaining in hash-tables",
      "To implement non-binary trees",
      "Random Access of elements",
    ]
  },
    {
    numb: 5,
    question: "What is a memory efficient double linked list?",
    answer: "Each node has only one pointer to traverse the list back and forth",
    options: [
      "Each node has only one pointer to traverse the list back and forth",
      "The list has breakpoints for faster traversal",
      "An auxiliary singly linked list acts as a helper list to traverse through the doubly linked list",
      "A doubly linked list that uses bitwise AND operator for storing addresses"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

    {
    numb: 6,
    question: "How do you calculate the pointer difference in a memory efficient double linked list?",
    answer: "pointer to previous node xor pointer to next node",
    options: [
      "head xor tail",
       "pointer to previous node xor pointer to next node",
       "pointer to previous node – pointer to next node",
       "pointer to next node – pointer to previous node"
    ]
  },

    {
    numb: 7,
    question: "What is the worst case time complexity of inserting a node in a doubly linked list?",
    answer: "O(n)",
    options: [
      "O(nlogn)",
       "O(logn)",
       "O(n)",
       "O(1)"
    ]
  },

    {
    numb: 8,
    question: "What is the time complexity of searching for an element in a circular linked list?",
    answer: "O(n)",
    options: [
      "O(n)",
       "O(nlogn)",
       "O(1)",
       "O(n2)"
    ]
  },

    {
    numb: 9,
    question: "Which of the following application makes use of a circular linked list?",
    answer: "Allocating CPU to resources",
    options: [
      "Undo operation in a text editor",
      "Recursive function calls",
      "Allocating CPU to resources",
      "Implement Hash Tables"
    ]
  },

    {
    numb: 10,
    question: "Which of the following is false about a circular linked list?",
    answer: "Time complexity of inserting a new node at the head of the list is O(1)",
    options: [
      "Every node has a successor",
      "Time complexity of inserting a new node at the head of the list is O(1)",
      "Time complexity for deleting the last node is O(n)",
      "We can traverse the whole circular linked list by starting from any point"
    ]
  },
];