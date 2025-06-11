var tree;
var l1=[];
function setup() {
  createCanvas(600,300);
  background('#434343');
  textAlign(CENTER);

  tree=new Tree();
  for(let i=0;i<10;i++)
  {
    l1.push(int(prompt('Enter node value to add')));
  }
  for(var i=0;i<10;i++)
  {
    console.log(i);
    tree.addValue(l1[i]);
  }
  console.log(tree);
  tree.Traverse();
}
function setup3() {
  createCanvas(600,300);
  background(51);
  textAlign(CENTER);
  tree=new Tree();
  for(var i=0;i<10;i++)
  {
    tree.addValue(floor(random(0,100)));
  }
  console.log(tree);
  tree.Traverse();
}
function setup1() {
  createCanvas(600,300);
  background(51);
  textAlign(CENTER);
  tree.Traverse();
  var s=prompt('Enter value to search in a binary search tree: ');
  var result=tree.search(s);
   if(result!=null)
   {
    document.getElementById("status").innerHTML =`${s} is present in binary search tree`;
   }
   else{
    document.getElementById("status").innerHTML =`${s} is not present in binary search tree`;
   }
}
function setup2()
{
  createCanvas(600,300);
  background(51);
  textAlign(CENTER);
  tree.Traverse();
  console.log(l1);
  l1.sort();
  document.getElementById("status").innerHTML =`Inorder Traversal of BST<br>${l1}`;
}




