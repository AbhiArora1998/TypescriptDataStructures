import { LinkedList } from '../LinkedList/LinkedList'

class Stack<T> {
    private stackList : LinkedList<T>

    constructor(){
        
        this.stackList = new LinkedList();
    }
    size(){
        return this.stackList.size()
    }
    isEmpty(){
        return this.stackList.isEmpty()
    }
    clear(){
        this.stackList.clear();
    }

    push(element: T){
        this.stackList.addBack(element);
    }
    pop(){
        return this.stackList.removeBack();
    }
    get(value:number){
        return this.stackList.get(value);
    }
 
}

const stack  = new Stack()
stack.push(5);
stack.push(7);
console.log(stack.get(1))