import Stack from "./../../src/data_structures/stack";

describe("Stack", () => {
	it("should be an instance of Stack", () => {
		const stack = new Stack<string>();
		expect(stack instanceof Stack).toBeTruthy();
	});

	it("should add an item to the Stack", () => {
		const stack = new Stack<string>();
		const item1 = "First item";
		stack.push(item1);
		expect(stack.length).toBe(1);
	});

	it("should remove an item from the Stack", () => {
		const stack = new Stack<string>();
		const item1 = "First item";
		stack.push(item1);
		const removedItem = stack.pop();
		expect(stack.length).toBe(0);
		expect(removedItem).toBe(item1);
	});

	it("should return the item at the top without removing it from the Stack", () => {
		const stack = new Stack<string>();
		const item1 = "First item";
		const item2 = "Second item";
		const item3 = "Third item";
		stack.push(item1);
		stack.push(item2);
		stack.push(item3);
		const topItem = stack.pop();
		expect(topItem).toBe(item3);
	});
});
