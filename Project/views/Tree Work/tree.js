function Tree()
{
  this.root=null;
}

Tree.prototype.addValue = function(val)
{
  var node = new Node(val);
  if(this.root==null)
  {
    this.root=node;
    this.root.x=width/2;
    this.root.y=50;
  }
  else
  {
    this.root.addNode(node);
  } 
}

Tree.prototype.search = function(val)
{
    return this.root.search(val);
    
}

Tree.prototype.Traverse = function()
{
  this.root.inorder(this.root);
}