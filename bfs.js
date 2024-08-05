class Node{
  constructor(val){
   this.val=val;
   this.left=null;
   this.right=null;
  }
 }
 class Bt{
   constructor(){
     this.root=null;
   }
   insert(val){
     let node=new Node(val);
     if(this.root==null){
       return this.root=node
     }else{
       let current=this.root;
       while(true){
         if(current.val>val){
           if(current.left==null){
             current.left=node;
             return this;
           }else{
             current=current.left
           }
         }else if(current.val<val){
           if(current.right==null){
             current.right=node;
             return this
           }else{
             current=current.right
           }
         
         }
       }
 
     }
   }
 }
 let bt1=new Bt();
 bt1.insert(10);
 bt1.insert(15);
 bt1.insert(54);
 bt1.insert(55);
 bt1.insert(5);
 
 
 console.log(bt1)