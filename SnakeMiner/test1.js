const blocks = [
  {
    color : "#3a3",
    infinite : 0,
    onTouch : ()=>{
      
    },
  },
  {
    color : "#a53",
    infinite : 0,
    onTouch : ()=>{
      
    },
  },
  {
    color : "#aaa",
    infinite : 0,
    onTouch : ()=>{
      
    },
  },
  {
    color : "#ee7",
    infinite : 0,
    onTouch : ()=>{
      
    },
  },
];

const Biomes = [
  {
    "layer1" : blocks[0],
    "layer2" : blocks[1],
    "top_size" : 4,
    
    "tree" : true,
    "max_tree_size" : 6,
    "tree_leaves" : blocks[0],
    "tree_log" : blocks[1]
  },
  {
    "layer1" : blocks[2],
    "layer2" : blocks[1],
    "top_size" : 6,
    
    "tree" : false,
    "max_tree_size" : 0,
    "tree_leaves" : blocks[0],
    "tree_log" : blocks[1]
  },
  {
    "layer1" : blocks[3],
    "layer2" : blocks[2],
    "top_size" : 6,
    
    "tree" : false,
    "max_tree_size" : 0,
    "tree_leaves" : blocks[0],
    "tree_log" : blocks[1]
  },
];