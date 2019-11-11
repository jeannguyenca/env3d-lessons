let workspace = Component.Components.blockly.workspace;
setURLParam("lesson", "lesson2");

[
  {
    title: "Lesson 2: Animation",
    text: []
  },
  {
    title: "Move the boat",
    text: [
      `Choose "Animation" then "Move tux forward". Change "tux" to "myBoat"`,
      `<iframe 
      style="margin:auto" 
      width="100%" 
      height="100%" src="https://www.youtube.com/embed/BMKdAoSnKKQ?rel=0"
      frameborder="0" 
      allowfullscreen/>`
    ],
    condition: () => {
      // let variable = workspace.getVariable("myCar");
      // let variableBlocks = workspace.getVariableUsesById(variable.getId());
      // console.log("Variables: ", variableBlocks);

      // for (const aVariableBlock of variableBlocks) {
      //   if (aVariableBlock.parentBlock_ !== null) {
      //     if (aVariableBlock.parentBlock_.type == "env3d_move") {
      //       return true;
      //     }
      //   }
      // }
      // if (blocks.length === 2 && blocks[1].childBlocks_ !== null) {
      // }
    }
  },
  {
    title: "Turn object",
    text: [
      `Choose "Animation" then "Turn tux left". Change "tux" to "myBoat" and attach it to "Move object"`,
      `<iframe 
      style="margin:auto" 
      width="100%" 
      height="100%" src="https://www.youtube.com/embed/8juGkAHsQWo?rel=0"
      frameborder="0" 
      allowfullscreen/>`
    ],
    condition: () => {
      // let variable = workspace.getVariable("myCar");
      // let variableBlocks = workspace.getVariableUsesById(variable.getId());
      // console.log("Variables: ", variableBlocks);

      // for (const aVariableBlock of variableBlocks) {
      //   if (aVariableBlock.parentBlock_ !== null) {
      //     if (aVariableBlock.parentBlock_.type == "env3d_turn") {
      //       return true;
      //     }
      //   }
      // }

    }
  },
  {
    title: "Do in sequence",
    text: [
      `"Animation" work better inside "Do in Sequence"`,
      `Choose "Animation" then "Do in sequence", drag the block to cover "move" and "turn" blocks`,
      `<iframe 
      style="margin:auto" 
      width="100%" 
      height="100%" src="https://www.youtube.com/embed/A3YN3_MaEYU?rel=0"
      frameborder="0" 
      allowfullscreen/>`
    ],
    condition: () => {
      let blocks = workspace.getTopBlocks();
      console.log("Blocks: ", blocks)
      
      for (const aBlock of blocks) {
        if(aBlock.type === "env3d_loop_sequence") {
          return true
        }
      }
    }
  },
  {
    title: "Have fun with animation",
    text: ["Explore the world by adding more move and turn blocks"],
    condition: () => {
      return true;
    }
  },
  {
    title: "Next Step",
    text: [
      `Learn how to trigger an animation with an event and check your VR world with a VR headset.`,
      `<a href='#' onClick = 'Component.Components.lesson.fetchLesson("lessons/module2/lesson3.js")'>` +
        `Lesson 3: Interactive Animation` +
        `</a>`
    ],
    condition: () => {
      return true;
    }
  }
];
