class Stack<T> {
	stack: Array<T>;

	constructor() {
		this.stack = [];
	}

	get length(): number {
		return this.stack.length;
	}

	push(item: T): void {
		this.stack.push(item);
	}

	pop(): T | undefined {
		return this.stack.pop();
	}

	peek(): T | undefined {
		return this.stack[this.stack.length - 1];
	}

	isEmpty(): boolean {
		return this.length === 0;
	}
}

export default Stack;
