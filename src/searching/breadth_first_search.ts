import Graph from '../data_structures/graph';
import Queue from '../data_structures/queue';

export function printBFS<T>(graph: Graph<T>, source: T): void {
	const queue = new Queue<T>();
	const visited = new Set();

	queue.enqueue(source);
	visited.add(source);

	while (queue.length > 0) {
		const current = queue.dequeue();
		const currentNode = graph.getNode(current!);

		console.log(current);

		currentNode?.edges
			.filter((neighbor) => !visited.has(neighbor))
			.forEach((neighbor) => {
				queue.enqueue(neighbor);
				visited.add(neighbor);
			});
	}
};
