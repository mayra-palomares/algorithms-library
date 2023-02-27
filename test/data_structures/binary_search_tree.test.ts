import BinarySearchTree from '../../src/data_structures/binary_search_tree';

describe('Binary Search Tree', () => {
	it('should be an instance of Binary Search Tree', () => {
		const bst = new BinarySearchTree<number>();
		expect(bst instanceof BinarySearchTree).toBeTruthy();
	});

	it('should add a node to the Binary Search Tree', () => {
		const bst = new BinarySearchTree<number>();
		const node1 = 5;
		bst.addChild(node1);
		expect(bst.root).not.toBeNull();
	});

	it('should remove root node from the Binary Search Tree with one node', () => {
		const bst = new BinarySearchTree<number>();
		const node1 = 5;
		bst.addChild(node1);
		bst.removeChild(node1);
		expect(bst.root).toBeNull();
	});

	it('should remove root node from the Binary Search Tree with multiple nodes', () => {
		const bst = new BinarySearchTree<number>();
		const node1 = 5;
		const node2 = 2;
		const node3 = 6;
		const node4 = 3;
		const node5 = 8;
		bst.addChild(node1);
		bst.addChild(node2);
		bst.addChild(node3);
		bst.addChild(node4);
		bst.addChild(node5);
		bst.removeChild(node1);
		expect(bst.root?.value).toBe(node3);
	});

	it('should remove leaf node from the Binary Search Tree', () => {
		const bst = new BinarySearchTree<number>();
		const node1 = 5;
		const node2 = 2;
		const node3 = 6;
		bst.addChild(node1);
		bst.addChild(node2);
		bst.addChild(node3);
		bst.removeChild(node2);
		expect(bst.root?.leftChild).toBeNull();
	});
});
