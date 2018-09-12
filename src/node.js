const sha256 = require('js-sha256');

class Node{

	constructor(
		timestamp,
		data,
		nodeNumber,
		nodeId,
		referenceNodeId,
		childReferenceNodeId,
		genesisReferenceNodeId,
		owner
	){
		this.timestamp = timestamp;
		this.data = this.encrypt(data, owner);
		this.nodeNumber = nodeNumber;
		this.nodeId = nodeId;
		this.referenceNodeId = referenceNodeId;
		this.childReferenceNodeId = childReferenceNodeId;
		this.genesisReferenceNodeId = genesisReferenceNodeId;
		this.HashValue = this.getHash();
		this.owner = owner;
		this.value = data;
	}

	getHash(){
		return sha256(
			JSON.stringify(this.timestamp + this.nodeNumber) + this.data + this.nodeId + this.referenceNodeId + this.childReferenceNodeId + this.genesisReferenceNodeId
		)
	}

  //encrypts data using sha256
  	// here using data value as an additional key
	encrypt(data, owner){
		return sha256(owner + JSON.stringify(data));
	}

}

module.exports = Node;
