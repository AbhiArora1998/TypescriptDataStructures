"use strict";
exports.__esModule = true;
var LinkedList_1 = require("../LinkedList/LinkedList");
var Stack = /** @class */ (function () {
    function Stack() {
        this.stackList = new LinkedList_1.LinkedList();
    }
    Stack.prototype.size = function () {
        return this.stackList.size();
    };
    Stack.prototype.isEmpty = function () {
        return this.stackList.isEmpty();
    };
    Stack.prototype.clear = function () {
        this.stackList.clear();
    };
    Stack.prototype.push = function (element) {
        this.stackList.addBack(element);
    };
    Stack.prototype.pop = function () {
        return this.stackList.removeBack();
    };
    Stack.prototype.get = function (value) {
        return this.stackList.get(value);
    };
    return Stack;
}());
var stack = new Stack();
stack.push(5);
stack.push(7);
console.log(stack.get(1));
