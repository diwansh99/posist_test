const node = require('./src/node');
const node_tree = require('./src/nodeTree');

let tree = new node_tree();

console.log("Starting Tree: ", tree.getTree(), '\n');

tree.addChildNode(46, 0, "Name1");
tree.addChildNode(90, 0, "Name2");
tree.addChildNode(999, 0, "Name3");

console.log("New Tree containing 3 nodes added to root: ", tree.getTree(), '\n');

tree.addChildNode(550, 3, "Diwansh Gulyani");

console.log("New Tree containing a node added to node: 0x1: ", tree.getTree(), '\n');

console.log("trying to add an invalid node: ");
tree.addChildNode(5000, 3, "Diwansh Gulyani ");

console.log("\n edit node:#1: ...");
tree.editNodeValue(1, 55);

console.log("\nchanging ownership of node:#4: ");
tree.changeOwner(3, "NameABCD");

console.log("Final Tree with a node 1 value edited: ", tree.getTree(), '\n');
