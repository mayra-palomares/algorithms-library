import Graph from "./../../src/data_structures/graph";

describe("Graph", () => {
	it("should be an instance of Graph", () => {
		const graph = new Graph<string>();
		expect(graph instanceof Graph).toBeTruthy();
	});

	it("should add a node to the Graph", () => {
		const graph = new Graph<string>();
		const item1 = "Mayra";
		graph.addNode(item1);
		expect(graph.nodes.length).toBe(1);
	});

	it("should remove a node from the Graph", () => {
		const graph = new Graph<string>();
		const item1 = "Mayra";
		graph.addNode(item1);
		graph.removeNode(item1);
		expect(graph.nodes.length).toBe(0);
	});

	it("should return a node given a value", () => {
		const graph = new Graph<string>();
		const item1 = "Mayra";
		const item2 = "Alejandra";
		const item3 = "Gerson";
		graph.addNode(item1);
		graph.addNode(item2);
		graph.addNode(item3);
		const returnedNode = graph.getNode("Alejandra");
		expect(returnedNode?.value).toBe(item2);
	});

    it("should add an edge to a directed Graph", () => {
		const graph = new Graph<string>(true);
		const item1 = "Mayra";
        const item2 = "Alejandra";
		graph.addNode(item1);
        graph.addNode(item2);
        graph.addEdge(item1, item2);
        const node1 = graph.getNode(item1);
        const node2InEdge = node1?.edges.find(edge => edge.value  === item2);
        const node2 = graph.getNode(item2);
        const node1InEdge = node2?.edges.find(edge => edge.value  === item1);
		expect(node2InEdge).toBeDefined();
        expect(node2InEdge?.value).toBe(item2);
        expect(node1InEdge).toBeUndefined();
	});

    it("should add an edge to an undirected Graph", () => {
		const graph = new Graph<string>(false);
		const item1 = "Mayra";
        const item2 = "Alejandra";
		graph.addNode(item1);
        graph.addNode(item2);
        graph.addEdge(item1, item2);
        const node1 = graph.getNode(item1);
        const node2InEdge = node1?.edges.find(edge => edge.value  === item2);
        const node2 = graph.getNode(item2);
        const node1InEdge = node2?.edges.find(edge => edge.value  === item1);
		expect(node2InEdge).toBeDefined();
        expect(node2InEdge?.value).toBe(item2);
        expect(node1InEdge).toBeDefined();
        expect(node1InEdge?.value).toBe(item1);
	});
});
