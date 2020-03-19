let workspace = Component.Components.blockly.workspace;
// setURLParam("lesson", "lesson1");

const imgDir = "./lessons/img/";

function getBlock(block) {
  return `<img src="${imgDir}${block}" alt="aBlock" class="blocks"/>`;
}

const object = getBlock("object.png"),
      addObj_3dobj = getBlock("addObj_3dobj.png"),
      tutorial = getBlock("module1/tutorial.png"),
      ap_tutorial_spaceship = getBlock("module1/ap_tutorial_spaceship.png"),
      addObj = getBlock("addobj.png"),
      addObj_dis = getBlock("addobj_disable.png"),
      threeDObj = getBlock("3dobj.png"),
      variables = getBlock("variables.png"),
      createVariable = getBlock("createVar.png"),
      setVariableSpaceship = getBlock("module1/setspaceship.png"),
      aVariableSpaceship = getBlock("module1/spaceship.png"),
      animation = getBlock("animation.png"),
      move = getBlock("move.png"),
      aVariableTux = getBlock("tux.png"),
      turn = getBlock("turn.png"),
      sequence = getBlock("doinsequence.png"),
      move_short = getBlock("move_short.png"),
      turn_short = getBlock("turn_short.png"),
      events = getBlock("events.png"),
      whenlookat = getBlock("whenlookat.png");



[
  {
    title: "",
    text: [
      `<iframe
        style="margin:auto"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/TioD-yBDEsg?rel=0&enablejsapi=1"
        frameborder="0"
        allowfullscreen/>`
    ]
  },
  {
    text: ["Make sure your workspace is clear"],
    condition: () => {
      return workspace.getTopBlocks().length == 0;
    }
  },
  {
    title: "Let's get a spaceship",
    text: [
      `From ${ object } choose ${ addObj_3dobj }`,
      `Choose ${ tutorial } and ${ ap_tutorial_spaceship }`
    ],
    condition: () => {
      let blocks = workspace.getTopBlocks();

      if (blocks.length > 0) {
        let inputModel =
          blocks[0].childBlocks_[0].inputList[4].fieldRow[1].text_;
        let inputObj = blocks[0].childBlocks_[0].inputList[4].fieldRow[2].text_;

        if (blocks.length == 1 && blocks[0].type == "env3d_addObject") {
          if (inputModel === "Tutorial" && inputObj === "ap_Tutorial/spaceship")
            return true;
        }
      }

      return false;
    }
  },
  {
    title: "Now let's make a variable",
    text: [
      `In order to animate this spaceship, we need to use a <a videoId="dejkw2aHDOI">variable</a>`, 
      `Detach ${ addObj } and ${ threeDObj }`
    ],
    condition: () => {
      let objectBlock = workspace.getTopBlocks();
      // console.log(
      //   "Blocks: " + objectBlock[0].outputConnection + " " + objectBlock.length
      // );
      return (
        objectBlock.length === 2 && objectBlock[0].outputConnection === null
      );
    }
  },
  {
    title: "",
    text: [
      `From ${ variables } choose ${ createVariable }`,
      `Name it "spaceship"`,
      `Attach ${ setVariableSpaceship } to ${ threeDObj }`
    ],
    condition: () => {
      let objectBlock = workspace.getTopBlocks();

      let block = workspace.getVariable("spaceship");

      if (block) {
        if (objectBlock.length === 2) {
          var setBlock = false,
            getBlock = false;

          for (let aBlock of objectBlock) {
            if (
              aBlock.type == "variables_set" &&
              aBlock.childBlocks_.length == 1
            ) {
              setBlock = true;
            }
            if (
              aBlock.type == "env3d_addObject" &&
              aBlock.childBlocks_.length == 0
            ) {
              getBlock = true;
            }
          }

          if (setBlock && getBlock) {
            return true;
          }
        }
      }
    }
  },
  {
    title: "",
    text: [
      `Attach ${ addObj_dis } below ${ setVariableSpaceship }`,
      `From ${ variables } choose ${ aVariableSpaceship }.`,
      `Attach ${ addObj_dis } to ${ aVariableSpaceship }`
    ],
    condition: () => {
      let objectBlock = workspace.getTopBlocks();

      let spaceship = workspace.getVariable("spaceship");
      let blocks = spaceship
        ? workspace.getVariableUsesById(spaceship.getId())
        : null;

      if (blocks && blocks.length == 2 && objectBlock.length == 1) {
        let t = ["variables_set", "variables_get"];
        for (let i = 0; i < t.length; i++) {
          if (blocks[i].type != t[i]) return false;
          if (i == 1 && blocks[i].outputConnection.targetConnection == null) {
            return false;
          }
        }
        return true;
      }
      return false;
    }
  },
  {
    title: "",
    text: ["Experiment with different positions"],
    condition: () => {
      return true;
    }
  },
  {
    title: "",
    text: [
      `From ${ animation } choose ${ move }`,
      `Change ${ aVariableTux } to ${ aVariableSpaceship }`,
      `Adjust time and length of the movement. Start with a small number such as 0.1 to 1.`
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
    title: "",
    text: [
      `From ${ animation } choose ${ turn }`,
      `Change ${ aVariableTux }  to ${ aVariableSpaceship } and attach it to ${ move_short }`,
      `Try to adjust time and length to the turn block`
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
    title: "Let's make it a sequential animation!",
    text: [
      `From ${ animation } choose ${ sequence }`,
      `Drag ${ sequence } to cover ${ move_short } and ${ turn_short } blocks`,
      `<a videoId="Vr1sVvlua1Q">Watch how to do it in a video</a>`
      
    ],
    condition: () => {
      let blocks = workspace.getTopBlocks();
      let spaceship = workspace.getVariable("spaceship");
      let variableBlocks = workspace.getVariableUsesById(spaceship.getId());
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
    title: "",
    text: ["Explore the world by adding more move and turn blocks"],
    condition: () => {
      return true;
    }
  },
  {
    title: "Let's make an interactive animation!",
    text: [
      `From ${ events } choose ${ whenlookat }`,
      `Change ${ aVariableTux }  to ${ aVariableSpaceship }`,
      `Drag the block to cover ${ sequence }`,
      `<a videoId="ctRUmHQqB0I">Watch how to do it in a video</a>`
      
    ],
    condition: () => {
      let blocks = workspace.getTopBlocks();
      let spaceship = workspace.getVariable("spaceship");
      let variableBlocks = workspace.getVariableUsesById(spaceship.getId());
      console.log("Variables: ", variableBlocks);

      if (blocks.length === 2 && blocks[1].type === "env3d_event_lookat") {
        for (let aBlock of variableBlocks) {
          console.log(
            aBlock.parentBlock_ !== null ? aBlock.parentBlock_.type : "null"
          );
          if (
            aBlock.parentBlock_ !== null &&
            aBlock.parentBlock_.type === "env3d_event_lookat"
          ) {
            return true;
          }
        }
      }
    }
  },
  {
    title: "C3D.io Challenge",
    text: [
      "Try adding a planet as a new object and try to take the spaceship to the planet"
    ],
    condition: () => {
      return true;
    }
  },
  {
    title: "",
    text: ["Checking the workspace and make sure there is no lone block"],
    condition: () => {
      return true;
    }
  },
  {
    title: "Let's see the world in VR!",
    text: [
      "Time to use your phone and VR headset to see the 3D world you created in real Virtual Reality",
      `<a videoId="EnTllUEWkj0">Watch the video for the instruction</a>`
      
    ],
    condition: () => {
      return true;
    }
  },
  {
    title: "Congratulations!",
    text: [
      `You've completed this module`,
      `Click the cardboard icon and click "Fullscreen URL" to see the URL of your world`, 
      `You can copy the URL and share it with your family and friends`,
    ],
    condition: () => {
      return true;
    }
  }
];
