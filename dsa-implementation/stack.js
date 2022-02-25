// Stack Implementation 
// Author : @incogGod

class Stack{
    constructor(){
        this.items = [];
    }
    add(item){
        this.items.push(item);
        console.log('item added: ' + item);
    }
    remove(){
        this.items.pop();
        console.log('item removed');
    }
    empty(){
        this.items = [];
        console.log('stack emptied');
    }
    display(){
        console.log(this.items)
    }
}

let stack = new Stack;
stack.add(1);
stack.add(2);
stack.add(3);
stack.remove();
stack.display();
stack.empty();
stack.display();
