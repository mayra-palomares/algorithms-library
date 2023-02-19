class ItemNode<T> {
	value: T;
	edges: Array<ItemNode<T>>;

	constructor(value: T) {
		this.value = value;
		this.edges = [];
	}
}

class Graph<T> {
    directed: boolean;
    nodes: Array<ItemNode<T>>;

    constructor(directed: boolean = false){
        this.directed = directed;
        this.nodes = [];
    }

    getNode(value: T): ItemNode<T> | undefined {
        return this.nodes.find(node => node.value === value);
    }

    addNode(value: T): void {
        const node = new ItemNode<T>(value);
        this.nodes.push(node);
    }

    removeNode(value: T): void {
        this.nodes = this.nodes.filter(node => node.value !== value);
        this.nodes.forEach(node => {
            node.edges = node.edges.filter(edge => edge.value !== value);
        })
    }

    addEdge(value1: T, value2: T): void {
        const node1 = this.getNode(value1);
        const node2 = this.getNode(value2);

        if(node1 && node2){
            node1.edges.push(node2);

            if(!this.directed){
                node2.edges.push(node1);
            }
        }
    }
}

export default Graph;