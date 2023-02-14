class Queue<T> {
	queue: Array<T>;

	constructor() {
		this.queue = [];
	}

	get length(): number {
		return this.queue.length;
	}

	enqueue(item: T): void {
		this.queue.push(item);
	}

	dequeue(): T | undefined {
		return this.queue.shift();
	}

	peek(): T | undefined {
		return this.queue[0];
	}

	isEmpty(): boolean {
		return this.length === 0;
	}
}

export default Queue;
