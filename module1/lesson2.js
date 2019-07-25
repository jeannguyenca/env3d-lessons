let workspace = Component.Components.blockly.workspace;
setURLParam("lesson", "lesson2");

[
  {
    title: "Lesson 2: Animation",
    text: []
  },
  {
    title: "Move object",
    text: [
      "Animation > Move ... forward. Change variable to spaceship",
      `<iframe 
      style="margin:auto" 
      width="100%" 
      height="100%" src="https://www.youtube.com/embed/BMKdAoSnKKQ?rel=0"
      frameborder="0" 
      allowfullscreen/>`
    ],
    condition: () => {
      let blocks = workspace.getTopBlocks();
      let spaceship = workspace.getVariable("spaceship");
      let variableBlocks = workspace.getVariableUsesById(spaceship.getId());
      console.log("Variables: ", variableBlocks);

      if (blocks.length === 2 && blocks[1].childBlocks_ !== null) {
        for (const aVariableBlock of variableBlocks) {
          if (aVariableBlock.parentBlock_ !== null) {
            if (aVariableBlock.parentBlock_.type == "env3d_move") {
              return true;
            }
          }
        }
      }
    }
  },
  {
    title: "Turn object",
    text: [
      `Animation > Turn... Change variable to spaceship and attach it to Move object block`,
      `<iframe 
      style="margin:auto" 
      width="100%" 
      height="100%" src="https://www.youtube.com/embed/8juGkAHsQWo?rel=0"
      frameborder="0" 
      allowfullscreen/>`
    ],
    condition: () => {
      let blocks = workspace.getTopBlocks();
      let spaceship = workspace.getVariable("spaceship");
      let variableBlocks = workspace.getVariableUsesById(spaceship.getId());
      console.log("Variables: ", variableBlocks);

      if (blocks.length === 2 && blocks[1].childBlocks_ !== null) {
        for (const aVariableBlock of variableBlocks) {
          if (aVariableBlock.parentBlock_ !== null) {
            if (aVariableBlock.parentBlock_.type == "env3d_turn") {
              return true;
            }
          }
        }
      }
    }
  },
  {
    title: "Do in sequence",
    text: [
      `Animation blocks work better inside "Do in Sequence" block`,
      "Animation > do in sequence, drag the block to cover move and turn block",
      `<iframe 
      style="margin:auto" 
      width="100%" 
      height="100%" src="https://www.youtube.com/embed/A3YN3_MaEYU?rel=0"
      frameborder="0" 
      allowfullscreen/>`
    ],
    condition: () => {
      let blocks = workspace.getTopBlocks();
      let spaceship = workspace.getVariable("spaceship");
      let variableBlocks = workspace.getVariableUsesById(spaceship.getId());
      console.log("Blocks: ", blocks);

      if (
        blocks.length === 2 &&
        (blocks[0].type === "env3d_loop_sequence" ||
          blocks[1].type === "env3d_loop_sequence")
      ) {
        return true;
      }
    }
  },
  {
    title: "Have fun with animation",
    text: ["Explore the world by adding more move and turn blocks"],
    condition: () => {
      // let blocks = workspace.getTopBlocks();

      // if (blocks.length === 2) {
      //   let b1 = workspace.newBlock("env3d_addObject");
      //   let b2 = workspace.newBlock("env3d_object_model");
      //   b2.inputList[1].fieldRow[1].setValue(5);
      //   b2.inputList[1].fieldRow[2].setValue(1);
      //   b2.inputList[1].fieldRow[3].setValue(5);

      //   console.log("input", b2.inputList[4])

      //   b2.inputList[4].fieldRow[1].setValue("Tutorial");
      //   b2.inputList[4].fieldRow[2].setValue("ap_Tutorial/planet2");

      //   Object.values(workspace.blockDB_).forEach(b => {
      //     b.initSvg();
      //     b.render();
      //   });

      //   b1.getInput("OBJECT").connection.connect(b2.outputConnection);
      // }

      return true;
    }
  },
  {
    title: "Next Step",
    text: [
      `Learn how to trigger an animation with an event and check your VR world with a VR headset.`,
      `<a href='#' onClick = 'Component.Components.lesson.fetchLesson("lessons/lesson3-gamify.js")'>` +
        `Lesson 3: Interactive Animation` +
        `</a>`
    ],
    condition: () => {
      return true;
    }
  }
];
