const LinkedList = require('./linkedList');

const testList = new LinkedList();
for (let i = 0; i < 10; i++) {
	testList.addToTail(i);
}

testList.printList();
swapNodes(testList, 2, 5);
testList.printList();

function swapNodes(list, data1, data2) {
	let node1 = list.head;
	let node2 = list.head;
	let node1prev;
	let node2prev;

	if (data1 === data2) return;

	while (node1 !== null) {
		if (node1.data === data1) break;
		node1prev = node1;
		node1 = node1.getNextNode();
	}

	while (node2 !== null) {
		if (node2.data === data2) break;
		node2prev = node2;
		node2 = node2.getNextNode();
	}

	if (!node1 || !node2) return;

	const tempNode = node2.getNextNode();

	if (!node1prev) list.head = node2;
	else node1prev.setNextNode(node2);
	
	node2.setNextNode(node1.getNextNode());
	
	if (!node2prev) list.head = node1;
	else node2prev.setNextNode(node1);

	node1.setNextNode(tempNode);

}

