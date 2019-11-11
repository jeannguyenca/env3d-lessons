let workspace = Component.Components.blockly.workspace;
// setURLParam("lesson", "lesson1");

const imgDir = "./lessons/img/";

function getBlock(block) {
  return `<img src="${imgDir}${block}" alt="aBlock" class="blocks"/>`;
}

const object = getBlock("object.png"),
      addObj_3dobj = getBlock("addObj_3dobj.png"),
      fourSeasons = getBlock("module3/fourSeasons.png"),
      world = getBlock("world.png"),
      outdoor = getBlock("outdoor.png"),
      vehicles = getBlock("module3/vehicles.png"),
      boat = getBlock("module3/boat.png"),
      addObj = getBlock("addobj.png"),
      addobj_dis = getBlock("addobj_disable.png"),
      threeDObj = getBlock("3dobj.png"),
      variables = getBlock("variables.png"),
      createVariable = getBlock("createVar.png"),
      setVariableBoat = getBlock("module3/setmyBoat.png"),
      aVariableBoat = getBlock("module3/myBoat.png"),
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
    title: "Let's create an environment object",
    text: [
      `Choose ${ object } then ${ addObj_3dobj }`,
      `Choose model ${ fourSeasons }`
    ],
    condition: () => {
      let blocks = workspace.getTopBlocks();

      if (blocks.length > 0) {
        let inputModel =
          blocks[0].childBlocks_[0].inputList[4].fieldRow[1].text_;
        let inputObj = blocks[0].childBlocks_[0].inputList[4].fieldRow[2].text_;

        if (blocks.length == 1 && blocks[0].type == "env3d_addObject") {
          if (inputModel === "FourSeasons") return true;
        }
      }

      return false;
    }
  },
  {
    title: "Add the sky to the world",
    text: [
      `From ${ world } choose ${ outdoor }`,
      `Drag and drop the ${ outdoor } block and attach it above ${ addObj_3dobj }`, 
      `Explore different sky options`
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
    title: "Explore the 3d environmnet object",
    text: [
      `For the purpose of the tutorial, try to achieve the view below <img src="./lessons/module3/imgs/fourseasons_riverview.png" alt="Environment screenshot" />`
      // (this will be implement with new UI) - position 50 2 30 - rotation 0 240 0`
    ],
    condition: () => {
      return true;
    }
  },
  {
    title: "Let's get a boat",
    text: [
      `Choose ${ object } then ${ addObj_3dobj }`, 
      `Drag it below to the existing blocks but don't plug it to the other blocks`,
      `Choose model ${ vehicles } and ${ boat }`,
      `Choose a boat that you like`,
    ],
    condition: () => {
      let blocks = workspace.getTopBlocks();

      if (blocks.length > 0) {
        let inputModel =
          blocks[1].childBlocks_[0].inputList[4].fieldRow[1].text_;
        let inputObj = blocks[1].childBlocks_[0].inputList[4].fieldRow[2].text_;
        console.log(blocks, inputObj);
        if (blocks.length == 2 && blocks[1].type == "env3d_addObject") {
          if (inputModel === "Vehicles" && inputObj === "boat") return true;
        }
      }

      return false;
    }
  },
  {
    title: "Now let make a variable",
    text: [
      `In order to animate this boat, we need to use a <a videoId="dejkw2aHDOI">variable</a>`,
      `Detach ${ addObj } and ${ threeDObj } of the boat`
    ],
    condition: () => {
      let objectBlock = workspace.getTopBlocks();

      for (let aBlock of objectBlock) {
        console.log("aBlock", aBlock);

        if (
          aBlock.type == "env3d_addObject" &&
          aBlock.childBlocks_.length === 0
        ) {
          return true;
        }
      }
      return false;
    }
  },
  {
    title: "",
    text: [
      `From ${ variables } choose ${ createVariable }`, 
      `Name it myBoat`,
      `Attach ${ setVariableBoat } to ${ threeDObj }`,
    ],
    condition: () => {
      let objectBlock = workspace.getTopBlocks();
      let block = workspace.getVariable("myBoat");
      console.log("Blocks: objBlock", objectBlock);
      console.log("Blocks: ", block);
      if (block) {
        if (objectBlock.length === 3) {
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
      `Choose ${ variables } then ${ aVariableBoat }`,
      `Attach ${ aVariableBoat } to ${ addobj_dis }`,
      `Attach ${ addObj } below ${ setVariableBoat }`,
    ],
    condition: () => {
      let objectBlock = workspace.getTopBlocks();
      let spaceship = workspace.getVariable("myBoat");
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
    title: "Move the boat",
    text: [
      `From ${ animation } choose ${ move }`,
      `Change ${ aVariableTux } to ${ aVariableBoat }`,
      `Adjust time and length of the movement. Start with a small number such as 0.1 to 1.`
    ],
    condition: () => {
      let variable = workspace.getVariable("myBoat");
      let variableBlocks = workspace.getVariableUsesById(variable.getId());
      console.log("Variables: ", variableBlocks);
      for (const aVariableBlock of variableBlocks) {
        if (aVariableBlock.parentBlock_ !== null) {
          if (aVariableBlock.parentBlock_.type == "env3d_move") {
            return true;
          }
        }
      }
    }
  },
  {
    title: "",
    text: [
      `From ${ animation } choose ${ turn }`,
      `Change ${ aVariableTux } to ${ aVariableBoat } and attach it to ${ move_short }`,
      `Try to adjust time and length to the turn block`

    ],
    condition: () => {
      let variable = workspace.getVariable("myBoat");
      let variableBlocks = workspace.getVariableUsesById(variable.getId());
      console.log("Variables: ", variableBlocks);
      for (const aVariableBlock of variableBlocks) {
        if (aVariableBlock.parentBlock_ !== null) {
          if (aVariableBlock.parentBlock_.type == "env3d_turn") {
            return true;
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
      `Change ${ aVariableTux }  to ${ aVariableBoat }`,
      `Drag the block to cover ${ sequence }`,
      `<a videoId="ctRUmHQqB0I">Watch how to do it in a video</a>`
    ],
    condition: () => {
      let blocks = workspace.getTopBlocks();
      let variable = workspace.getVariable("myBoat");
      let variableBlocks = workspace.getVariableUsesById(variable.getId());

      let id;

      for (let aBlock of variableBlocks) {
        if (
          aBlock.parentBlock_ !== null &&
          aBlock.parentBlock_.type === "env3d_event_lookat"
        ) {
          id = aBlock.parentBlock_.id;
        }
      }

      for (let aBlock of blocks) {
        if (aBlock.type === "env3d_event_lookat" && id == aBlock.id) {
          if (aBlock.childBlocks_.length > 1) {
            return true;
          }
        }
      }
    }
  },
  {
    title: "C3D.io Challenge",
    text: [
      "Move the boat around the river by adding more animation blocks"
    ],
    condition: () => {
      return true;
    }
  },
  {
    title: "",
    text: [
      "Checking the workspace and make sure there is no lone block"
    ],
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
