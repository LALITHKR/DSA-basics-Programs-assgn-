
// Write a program to find the smallest number using a stack.

class Stack10{
    constructor(){
      this.items = []
      this.length = 0
      this.push = (element) => {
        this.items.push(element)
        this.length+=1
      }
      this.pop = () => {
        if(this.length==0){
          return -1;
        }
        this.length-=1
        return this.items.pop()
      }
      this.peek = () => {
        if(this.length==0){
          return -1;
        }
        return this.items[this.length-1]
      }
    }
  }
  let stack10=new Stack10();
 
  stack10.push(3534)
  stack10.push(1454)
  stack10.push(3543)
  stack10.push(3563)
  stack10.push(6436)
  stack10.push(2664)
  stack10.push(2475)
  stack10.push(1234)
  let smallest=stack10.pop(),temp10;
  
  let nk=stack10.length;
  for(i=0;i<nk-1;i++){
    temp10=stack10.peek();
    if(temp10<smallest)smallest=temp10
    stack10.pop()
  }
  console.log("smallest from stack is ---" + smallest)