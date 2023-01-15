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
 
}