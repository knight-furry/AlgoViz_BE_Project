function Node(val,x,y)
{
  this.left=null;
  this.right=null;
  this.data=val;
  
  this.distance=2;
  this.x=x;
  this.y=y;
}

Node.prototype.search = function(val)
{
    console.log(val);
    if(this.data == val)
    {
        
        return this;
    }
    else if(val<this.data && this.left!=null)
    {
        return this.left.search(val);
    }
    else if(this.data< val && this.right!=null)
    {
        return this.right.search(val);
    }
    return null;
}
Node.prototype.inorder = function(parent,l1)
{
    if(this.left!=null)
    {
        this.left.inorder(this);
    }
    console.log(this.data);
    fill(255);
    noStroke();
    textAlign(CENTER);
    text(this.data,this.x,this.y);
    stroke(255);
    noFill();
    ellipse(this.x,this.y,35,35);
    stroke(100);
    line(parent.x,parent.y,this.x,this.y);
    if(this.right!=null)
    {
        this.right.inorder(this);
    }
}

Node.prototype.preorder = function()
{
    console.log(this.data);
    if(this.left!=null)
    {
        this.left.preorder();
    }
    if(this.right!=null)
    {
        this.right.preorder();
    }
}

Node.prototype.postorder = function()
{
    if(this.left!=null)
    {
        this.left.postorder();
    }
    if(this.right!=null)
    {
        this.right.postorder();
    }
    console.log(this.data);
}

Node.prototype.reverseOrder = function()
{
    if(this.right!=null)
    {
        this.right.reverseOrder();
    }
    console.log(this.data);
    if(this.left!=null)
    {
        this.left.reverseOrder();
    }
}

Node.prototype.addNode = function(node)
{
  if(node.data<this.data)
  {
    if(this.left==null)
    {
      this.left=node;
      this.left.x = this.x - (width / pow(2, node.distance));
      this.left.y = this.y + 40;
    }
    else{
        node.distance++;
      this.left.addNode(node);
    }
  }
  else if(node.data>this.data)
  {
    if(this.right==null)
    {
      this.right=node;
      this.right.x = this.x +  (width / pow(2, node.distance));
      this.right.y = this.y + 40;
    }
    else
    {
      node.distance++;
      this.right.addNode(node);
    }
  }
}