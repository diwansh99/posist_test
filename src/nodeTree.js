const node = require('./node');

class node_tree{
	constructor(){
		this.GenesisNode = new node(
			this.getTimestamp(), // root timestamp(12st Sep 2018)
			1e10, // root node data
			0, // nodeNumber
			this.getNodeId(0), //root reference node id
			null, // empty reference node ID
			[], // child id arrays[]
			"Node:#GenesisNode", //root reference node id
			"Diwansh Gulyani" // root owner
		);

		this.nodes = [ this.GenesisNode ];

		// keeping track of total value of all nodes till current
		this.totalVal = 1e10;
	}

	addChildNode(value,  parentNodeNumber, owner){
		if(this.isValidChild(value, parentNodeNumber)){
			console.log('Add node, child node valid ');
			// adding node to nodes[]
			const childNode = this.createChildNode(value, parentNodeNumber, owner);
			this.nodes.push(childNode);
			// updating parent childReferenceNodeId[]
			this.nodes[parentNodeNumber].childReferenceNodeId.push(childNode.nodeId);
			//updating totalVal;
			this.totalVal += value;
			console.log('Node added to Tree.\n');
		}
	}


	createChildNode(value, parentNodeNumber, owner){
		return new node(
			Math.floor(Date.now()/1000), // timestamp(current)
			value, // root node data
			this.nodes.length, // nodeNumber
			this.getNodeId(this.nodes.length), // nodeId
			this.nodes[parentNodeNumber].nodeId, // parent reference node ID
			[], // child id array[]
			"Node:#GenesisNode", //root reference node id
			owner
		);
	}

	editNodeValue(nodeNumber, newValue){
		let parentNodeNumber = this.getNodefromID(this.nodes[nodeNumber].referenceNodeId);
		if(newValue < this.nodes[parentNodeNumber].value){
			//checking the new value is valid before editing
			this.nodes[nodeNumber].value = newValue;

			//updating data
			this.nodes[nodeNumber].data = newValue;
		}else{
			console.log("New node value invalid...Edit cancellled.\n")
		}
	}

	changeOwner(nodeNumber, newOwner){
		this.nodes[nodeNumber].owner = newOwner;
	}

	// checking the node value is valid or not
	isValidChild(value, parentNodeNumber){
		if(value <= this.nodes[parentNodeNumber].value){
			return value <= this.totalVal;
		}else{
			console.log("Invalid Node: Rejected!!!!");
			return false;
		}
	}

	//Helping functions

	//displays  in bfs pattern
	getTree(){
		// TO-DO - implementing bfs
		let sequence = 'Root::Node:#GenesisNode';
		this.nodes.forEach((node)=>{
			sequence = sequence + ' -> ' + node.nodeId;
		});
		return sequence;
	}

	getTimestamp(){
		return Math.floor(Date.now()/1000);
	}

	getNodefromID(nodeId){
		if(nodeId == 'Node:#GenesisNode'){
			return 0;
		}
		return parseInt(nodeId.slice(6,nodeId.length), 10);
	}

	getNodeId(_nodeNumber){
		if(_nodeNumber == 0){
			return "Node:#GenesisNode"
		}else{
			return `Node:#${_nodeNumber}`;
		}
	}

}

module.exports = node_tree;
