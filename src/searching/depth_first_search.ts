import Graph from '../data_structures/graph';
import Stack from '../data_structures/stack';

export function printDFS<T>(graph: Graph<T>, source: T): void {
	const stack = new Stack<T>();
	const visited = new Set();

	stack.push(source);
	visited.add(source);

	while (stack.length > 0) {
		const current = stack.pop();
		const currentNode = graph.getNode(current!);

		console.log(current);

		currentNode?.edges
			.filter((neighbor) => !visited.has(neighbor))
			.forEach((neighbor) => {
				stack.push(neighbor);
				visited.add(neighbor);
			});
	}
};

export function printDFSRec<T>(graph: Graph<T>, source: T): void {
	const dfs = (node: T, visited: Set<T>): void => {
		const currentNode = graph.getNode(node);

		console.log(node);
		visited.add(node);

		currentNode?.edges
			.filter((neighbor) => !visited.has(neighbor))
			.forEach((neighbor) => {
				dfs(neighbor, visited);
			});
	};

	dfs(source, new Set());
};
