import { LinkedList } from "../LinkedList/LinkedList";

class Queue<T>{
    private queue: LinkedList<T>;
    constructor(){
        this.queue = new LinkedList<T>();
    }

    size(){
        return this.queue.size();
    }

    isempty(){
        return this.queue.isEmpty();
    }
    enqueue(element:T){
        this.queue.addBack(element);
    }
    dequeue(){
        return this.queue.removeFront();
    }
}