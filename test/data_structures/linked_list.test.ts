import LinkedList from "./../../src/data_structures/linked_list";

describe("Linked List", () => {
	it("should be an instance of Linked List", () => {
		const linkedList = new LinkedList<string>();
		expect(linkedList instanceof LinkedList).toBeTruthy();
	});

	it("should add an item to the Linked List", () => {
		const linkedList = new LinkedList<string>();
		const item1 = "Item 1";
		linkedList.push(item1);
		expect(linkedList.length).toBe(1);
	});

	it("should remove an item from the Linked List", () => {
		const linkedList = new LinkedList<string>();
		const item1 = "Item 1";
		linkedList.push(item1);
		const removedItem = linkedList.pop();
		expect(linkedList.length).toBe(0);
		expect(removedItem?.value).toBe(item1);
	});

	it("should return an item given an index", () => {
		const linkedList = new LinkedList<string>();
		const item1 = "Item 1";
		const item2 = "Item 2";
		const item3 = "Item 3";
		linkedList.push(item1);
		linkedList.push(item2);
		linkedList.push(item3);
		const returnedItem = linkedList.get(1);
		expect(returnedItem?.value).toBe(item2);
	});
});
