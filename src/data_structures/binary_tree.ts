export class BinaryTreeNode<T> {
	value: T;
	leftChild: BinaryTreeNode<T> | null;
	rightChild: BinaryTreeNode<T> | null;

	constructor(value: T) {
		this.value = value;
		this.leftChild = null;
		this.rightChild = null;
	}

	get isLeaf(): boolean {
		return this.leftChild === null && this.rightChild === null;
	}

	get hasChildren(): boolean {
		return this.leftChild !== null || this.rightChild !== null;
	}

	get hasOnlyLeftChild(): boolean {
		return this.leftChild !== null && this.rightChild === null;
	}

	get hasOnlyRightChild(): boolean {
		return this.rightChild !== null && this.leftChild === null;
	}

	get hasBothChildren(): boolean {
		return this.leftChild !== null && this.rightChild !== null;
	}
}

export interface IBinaryTree<T> {
	root: BinaryTreeNode<T> | null;

	addChild(value: T): void;
	removeChild(value: T): void;
	minValue(root: BinaryTreeNode<T> | null): T;
}
