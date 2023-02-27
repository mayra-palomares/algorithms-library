import { BinaryTreeNode, IBinaryTree } from './binary_tree';

class BinarySearchTree<T> implements IBinaryTree<T> {
	root: BinaryTreeNode<T> | null;

	constructor() {
		this.root = null;
	}

	addChild(value: T): void {
		if (this.root === null) {
			const node: BinaryTreeNode<T> = new BinaryTreeNode<T>(value);
			this.root = node;
		} else {
			let currentNode: BinaryTreeNode<T> = this.root;
			let added = false;

			while (!added && currentNode) {
				//Avoid duplicate values
				if (currentNode.value === value) {
					return;
				}

				if (value < currentNode.value) {
					if (currentNode.leftChild === null) {
						// Add new node if it's free
						const node = new BinaryTreeNode<T>(value);
						currentNode.leftChild = node;
						added = true;
					} else {
						//Find the next free spot
						currentNode = currentNode.leftChild;
					}
				} else if (value > currentNode.value) {
					if (currentNode.rightChild === null) {
						// Add new node if it's free
						const node = new BinaryTreeNode<T>(value);
						currentNode.rightChild = node;
						added = true;
					} else {
						//Find the next free spot
						currentNode = currentNode.rightChild;
					}
				}
			}
		}
	}

	removeChild(value: T): void {
		this.root = this.removeChildRec(this.root, value);
	}

	private removeChildRec(
		root: BinaryTreeNode<T> | null,
		value: T
	): BinaryTreeNode<T> | null {
		if (root === null) {
			return root;
		}

		if (value < root.value) {
			root.leftChild = this.removeChildRec(root.leftChild, value);
		} else if (root.value < value) {
			root.rightChild = this.removeChildRec(root.rightChild, value);
		} else if (root.value === value) {
			//if value is found
			if (!root.hasChildren) {
				return null;
			}

			if (root.hasOnlyLeftChild) {
				return root.leftChild;
			} else if (root.hasOnlyRightChild) {
				return root.rightChild;
			} else if (root.hasBothChildren) {
				// if root has two children
				root.value = this.minValue(root.rightChild!); //get smallest value in right child tree
				root.rightChild = this.removeChildRec(root.rightChild, root.value); //remove value in rigth child tree
			}
		}

		return root;
	}

	minValue(root: BinaryTreeNode<T>): T {
		let minVal = root.value;
		while (root.leftChild !== null) {
			minVal = root.leftChild.value;
			root = root.leftChild;
		}
		return minVal;
	}

	*inOrderTraversal(
		node: BinaryTreeNode<T> = this.root!
	): IterableIterator<BinaryTreeNode<T>> {
		if (node.leftChild) yield* this.inOrderTraversal(node.leftChild);
		yield node;
		if (node.rightChild) yield* this.inOrderTraversal(node.rightChild);
	}

	*preOrderTraversal(
		node: BinaryTreeNode<T> = this.root!
	): IterableIterator<BinaryTreeNode<T>> {
		yield node;
		if (node.leftChild) yield* this.preOrderTraversal(node.leftChild);
		if (node.rightChild) yield* this.preOrderTraversal(node.rightChild);
	}

	*postOrderTraversal(
		node: BinaryTreeNode<T> = this.root!
	): IterableIterator<BinaryTreeNode<T>> {
		if (node.leftChild) yield* this.postOrderTraversal(node.leftChild);
		if (node.rightChild) yield* this.postOrderTraversal(node.rightChild);
		yield node;
	}

	getInOrderNodes(): Array<T> {
		const nodes: Array<T> = [];
		if (this.root) {
			this.inOrder(this.root, nodes);
		}
		return nodes;
	}

	private inOrder(currentNode: BinaryTreeNode<T>, nodes: Array<T>) {
		if (!currentNode) return;
		if (currentNode.leftChild) this.inOrder(currentNode.leftChild, nodes);
		nodes.push(currentNode.value);
		if (currentNode.rightChild) this.inOrder(currentNode.rightChild, nodes);
	}

	getPreOrderNodes(): Array<T> {
		const nodes: Array<T> = [];
		if (this.root) {
			this.preOrder(this.root, nodes);
		}
		return nodes;
	}

	private preOrder(currentNode: BinaryTreeNode<T>, nodes: Array<T>) {
		if (!currentNode) return;
		nodes.push(currentNode.value);
		if (currentNode.leftChild) this.preOrder(currentNode.leftChild, nodes);
		if (currentNode.rightChild) this.preOrder(currentNode.rightChild, nodes);
	}

	getPostOrderNodes(): Array<T> {
		const nodes: Array<T> = [];
		if (this.root) {
			this.postOrder(this.root, nodes);
		}
		return nodes;
	}

	private postOrder(currentNode: BinaryTreeNode<T>, nodes: Array<T>) {
		if (!currentNode) return;
		if (currentNode.leftChild) this.postOrder(currentNode.leftChild, nodes);
		if (currentNode.rightChild) this.postOrder(currentNode.rightChild, nodes);
		nodes.push(currentNode.value);
	}
}

export default BinarySearchTree;
