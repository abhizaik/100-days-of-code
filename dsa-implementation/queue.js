// Queue Implementation 
// Author : @incogGod

class Queue{
    constructor(){
        this.items = [];
    }
    add(item){
        this.items.push(item);
        console.log('item added: ' + item);
    }
    remove(){
        this.items.shift();
        console.log('item removed');
    }
    empty(){
        this.items = [];
        console.log('queue emptied');
    }
    display(){
        console.log(this.items)
    }
}

let queue = new Queue;
queue.add(1);
queue.add(2);
queue.add(3);
queue.remove();
queue.display();
queue.empty();
queue.display();
