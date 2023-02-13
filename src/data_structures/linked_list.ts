class ItemNode<T> {
	value: T;
	next: ItemNode<T> | null;

	constructor(value: T) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList<T> {
	head: ItemNode<T> | null;
	tail: ItemNode<T> | null;
	length: number;

	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	/* Take in a value and add a node to the end of the linked list */
	push(value: T): void {
		const newNode = new ItemNode(value);

		if (this.isEmpty()) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			if (this.tail) {
				this.tail.next = newNode;
			}

			this.tail = newNode;
		}

		this.length++;
	}

	/* Remove the node at the tail*/
	pop(): ItemNode<T> | null {
		if (this.isEmpty()) {
			return null;
		} else if (this.length === 1) {
			const nodeToRemove = this.head;
			this.head = null;
			this.tail = null;
			this.length--;
			return nodeToRemove;
		} else {
			let currentNode: ItemNode<T> | null = this.head;
			const nodeToRemove = this.tail;

			while (currentNode) {
				if (currentNode.next === nodeToRemove) {
					break;
				}
				currentNode = currentNode.next;
			}

			if (currentNode) {
				currentNode.next = null;
			}

			this.tail = currentNode;
			this.length--;
			return nodeToRemove;
		}
	}

	get(index: number): ItemNode<T> | null {
		if (index < 0 || index >= this.length) {
			return null;
		} else if (index === 0) {
			return this.head;
		} else if (index === this.length - 1) {
			return this.tail;
		} else {
			let currentNode: ItemNode<T> | null = this.head;
			let iterator = 0;
			while (iterator < index) {
				iterator++;
				if (currentNode) {
					currentNode = currentNode.next;
				}
			}
			return currentNode;
		}
	}

	isEmpty(): boolean {
		return this.length === 0;
	}
}

export default LinkedList;
