import Queue from "./../../src/data_structures/queue";

describe("Queue", () => {
	it("should be an instance of Queue", () => {
		const queue = new Queue<number>();
		expect(queue instanceof Queue).toBeTruthy();
	});

	it("should add an item to the Queue", () => {
		const queue = new Queue<number>();
		const item1 = 123;
		queue.enqueue(item1);
		expect(queue.length).toBe(1);
	});

	it("should remove an item from the Queue", () => {
		const queue = new Queue<number>();
		const item1 = 123;
		queue.enqueue(item1);
		const removedItem = queue.dequeue();
		expect(queue.length).toBe(0);
		expect(removedItem).toBe(item1);
	});

	it("should return the first item without removing it from the Queue", () => {
		const queue = new Queue<number>();
		const item1 = 123;
		const item2 = 456;
		queue.enqueue(item1);
		queue.enqueue(item2);
		const firstItem = queue.peek();
		expect(firstItem).toBe(item1);
	});
});
