const Node = require('./Node');

class LinkedList {
	constructor() {
		this.head = null;
	}

	addToHead(data) {
		const currentHead = this.head;
		this.head = new Node(data);
		if (currentHead) {
			this.head.setNextNode(currentHead);
		}
	}

	addToTail(data) {
		if (!this.head) {
			this.head = new Node(data);
			return;
		}

		let tail = this.head;

		while (tail.getNextNode() !== null) {
			tail = tail.getNextNode();
		}

		tail.setNextNode(new Node(data));
	}

	removeHead() {
		const removedHead = this.head;

		if (!removedHead) {
			return;
		}

		this.head = removedHead.getNextNode();
		return removedHead.data;
	}

	printList() {
		let currentNode = this.head;
		let output = '<head> ';
		while (currentNode !== null) {
			output += currentNode.data + ' ';
			currentNode = currentNode.getNextNode();
		}
		output += '<tail>';
		console.log(output);
	}

	removeData(data) {
		let prevNode = null;
		let currentNode = this.head;

		while(currentNode) {
			if (currentNode.data === data) {
				if (!prevNode) this.removeHead();
				else prevNode.setNextNode(currentNode.getNextNode());
			} else prevNode = currentNode;

			currentNode = currentNode.getNextNode();
		}
	}
}

module.exports = LinkedList;
