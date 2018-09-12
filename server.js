const node = require('./src/node');
const node_tree = require('./src/nodeTree');
const express = require('express');
const port = 5000;


let tree = new node_tree();
tree.addChildNode(46, 0, "Name1");
tree.addChildNode(90, 0, "Name2");
tree.addChildNode(999, 0, "Name3");
tree.addChildNode(550, 3, "Diwansh Gulyani");

const app = express();

app.get('/' , (req ,res) =>{
  res.send("<div><h1> Tree API</h1><br><h2>Route of:</h2><br><ul><li><h3>/tree</h3></li><li><h3>/tree/:nodeNumber</h3></li></ul></div>");
})

app.get('/tree',(req,res) =>{
  res.send(tree.nodes);
})

app.get('/tree/:nodeNumber', (req, res)=>{
	res.send(tree.nodes[req.params.nodeNumber]);
});

app.get('/tree/:nodeNumber/nodeId', (req, res)=>{
	res.send(tree.nodes[req.params.nodeNumber].nodeId);
});

app.listen(port, ()=>{
  console.log("Server is running on "+ port +" port");
});
