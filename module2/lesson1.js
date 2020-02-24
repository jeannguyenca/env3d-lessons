let workspace = Component.Components.blockly.workspace;
// setURLParam("lesson", "lesson1");

const imgDir = "./lessons/img/";

function getBlock(block) {
  return `<img src="${imgDir}${block}" alt="aBlock" class="blocks"/>`;
}

const object = getBlock("object.png"),
      addObj_3dobj = getBlock("addObj_3dobj.png"),
      vehicles = getBlock("module2/vehicles.png"),
      car = getBlock("module2/car.png"),
      world = getBlock("world.png"),
      outdoor = getBlock("outdoor.png"),
      addObj = getBlock("addobj.png"),
      addObj_dis = getBlock("addobj_disable.png"),
      threeDObj = getBlock("3dobj.png"),
      variables = getBlock("variables.png"),
      createVariable = getBlock("createVar.png"),
      setVariableCar = getBlock("module2/setmyCar.png"),
      aVariableCar = getBlock("module2/myCar.png"),
      animation = getBlock("animation.png"),
      move = getBlock("move.png"),
      aVariableTux = getBlock("tux.png"),
      turn = getBlock("turn.png"),
      sequence = getBlock("doinsequence.png"),
      move_short = getBlock("move_short.png"),
      turn_short = getBlock("turn_short.png"),
      events = getBlock("events.png"),
      whenlookat = getBlock("whenlookat.png"),
      roadAndSign = getBlock("module2/roadsandsigns.png");

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
    title: "Let's get a car",
    text: [
      `From ${ object } choose ${ addObj_3dobj }`,
      `Choose model ${ vehicles } and ${ car }`,
      `Choose a car that you like.`,
    ],
    condition: () => {
      let blocks = workspace.getTopBlocks();

      if (blocks.length > 0) {
        let inputModel =
          blocks[0].childBlocks_[0].inputList[4].fieldRow[1].text_;
        let inputObj = blocks[0].childBlocks_[0].inputList[4].fieldRow[2].text_;

        if (blocks.length == 1 && blocks[0].type == "env3d_addObject") {
          if (inputModel === "Vehicles" && inputObj === "car") return true;
        }
      }

      return false;
    }
  },
  {
    title: "Let's create a background",
    text: [
      `From ${ world } choose ${ outdoor } block to the workspace`,
      `Attach it above ${ addObj_3dobj } block`,
      `Change the sky and terrain as you like`
    ],
    condition: () => {
      let objectBlock = workspace.getTopBlocks();
      console.log(objectBlock);

      return (
        objectBlock.length == 1 && objectBlock[0].type == "env3d_outdoor_inputs"
      );
    }
  },
  {
    title: "Now let make a variable",
    text: [
      `In order to animate this car, we need to use a <a videoId="dejkw2aHDOI">variable</a>`,
      `Detach ${ addObj } and ${ threeDObj }`,
    ],
    condition: () => {
      let objectBlock = workspace.getTopBlocks();

      return (
        objectBlock.length === 2 &&
        objectBlock[0].childBlocks_[2].type === "env3d_addObject" &&
        objectBlock[0].childBlocks_[2].outputConnection === null
      );
    }
  },
  {
    title: "",
    text: [
      `From ${ variables } choose ${ createVariable }`,
      `Name it myCar`,
      `Attach ${ setVariableCar } to ${ threeDObj }`,
    ],
    condition: () => {
      let objectBlock = workspace.getTopBlocks();

      let block = workspace.getVariable("myCar");

      console.log("Blocks: objBlock", objectBlock);
      console.log("Blocks: ", block);

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
              aBlock.type == "env3d_outdoor_inputs" &&
              aBlock.childBlocks_.length == 3
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
      `Detach ${ addObj } from ${ outdoor }`,
      `Attach ${ addObj_dis } below ${ setVariableCar }`,
      `From ${ variables } choose ${ aVariableCar }`,
      `Attach ${ aVariableCar } to ${ addObj_dis }`,
    ],
    condition: () => {
      let objectBlock = workspace.getTopBlocks();

      let spaceship = workspace.getVariable("myCar");
      let blocks = spaceship
        ? workspace.getVariableUsesById(spaceship.getId())
        : null;

      if (blocks && blocks.length == 2 && objectBlock.length == 2) {
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
    text: [`Attach ${ outdoor } above ${ setVariableCar }`],
    condition: () => {
      let objectBlock = workspace.getTopBlocks();
      console.log("Blocks: ", objectBlock);
      return (
        objectBlock[0].type == "env3d_outdoor_inputs" &&
        objectBlock[0].childBlocks_.length == 3
      );
    }
  },
  {
    title: "",
    text: [
      "Let's add road and road signs!",
      `From ${ object } choose ${ addObj_3dobj }`,
      `Choose ${ roadAndSign }`,
      `To move object to different position, change coordinate`, `<a videoId="usEAwJ0UkZY">Watch video instruction "What is 3D coordinates?"</a>`
      
    ],
    condition: () => {
      return true;
    }
  },
  {
    title: "Let's move the car!",
    text: [
      `From ${ animation } choose ${ move }`,
      `Change ${ aVariableTux } to ${ aVariableCar }`,
      `Adjust time and length of the movement. Start with a small number such as 0.1 to 1.`,
    ],
    condition: () => {
      // let blocks = workspace.getTopBlocks();
      let variable = workspace.getVariable("myCar");
      let variableBlocks = workspace.getVariableUsesById(variable.getId());
      console.log("Variables: ", variableBlocks);

      for (const aVariableBlock of variableBlocks) {
        if (aVariableBlock.parentBlock_ !== null) {
          if (aVariableBlock.parentBlock_.type == "env3d_move") {
            return true;
          }
        }
      }
      // if (blocks.length === 2 && blocks[1].childBlocks_ !== null) {
      // }
    }
  },
  {
    title: "",
    text: [
      `From ${ animation } choose ${ turn }`,
      `Change ${ aVariableTux } to ${ aVariableCar } and attach it to ${ move_short }`,
      `Try to adjust time and length to the turn block`,
    ],
    condition: () => {
      // let blocks = workspace.getTopBlocks();
      let variable = workspace.getVariable("myCar");
      let variableBlocks = workspace.getVariableUsesById(variable.getId());
      console.log("Variables: ", variableBlocks);

      for (const aVariableBlock of variableBlocks) {
        if (aVariableBlock.parentBlock_ !== null) {
          if (aVariableBlock.parentBlock_.type == "env3d_turn") {
            return true;
          }
        }
      }
      // if (blocks.length === 2 && blocks[1].childBlocks_ !== null) {
      // }
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
      console.log("Blocks: ", blocks);

      for (const aBlock of blocks) {
        if (aBlock.type === "env3d_loop_sequence") {
          return true;
        }
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
      `Change ${ aVariableTux }  to ${ aVariableCar }`,
      `Drag the block to cover ${ sequence }`,
      `<a videoId="ctRUmHQqB0I">Watch how to do it in a video</a>`
    ],
    condition: () => {
      let blocks = workspace.getTopBlocks();
      let variable = workspace.getVariable("myCar");
      let variableBlocks = workspace.getVariableUsesById(variable.getId());
      console.log("Variables: ", variableBlocks);

      for (let aBlock of variableBlocks) {
        if (
          aBlock.parentBlock_ !== null &&
          aBlock.parentBlock_.type === "env3d_event_lookat"
        ) {
          return true;
        }
      }

    }
  },
  {
    title: "C3D.io Challenge",
    text: [
      "Try animating the car on the road",
      "You can add more road blocks"
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
      "You've completed this module",
      `Click the cardboard icon and click "Fullscreen URL" to see the URL of your world. You can copy the URL and share it with your family and friends`,
    ],
    condition: () => {
      return true;
    }
  }
];
