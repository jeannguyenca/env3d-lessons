let workspace = Component.Components.blockly.workspace;
setURLParam("lesson", "lesson1");

[
  {
    title: "Lesson 1: Object",
    text: [
      `<iframe 
        style="margin:auto"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/5OcncLWnOsM?rel=0&enablejsapi=1" 
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
    title: "Create 3D object",
    text: [
      `Let's order a spaceship for him. From "Object" then "Add object: 3D Object"`,
      `Choose "Tutorial" then "Spaceship"`,
      `<iframe 
        style="margin:auto"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/Yng00T_kss0?rel=0" 
        frameborder="0"
        allowfullscreen/>`
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
    title: "Create a variable",
    text: [
      "Now let name our spaceship",
      `Detach "Add Object" and "3D Object"`,
      `<iframe
        style="margin:auto"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/M0JZwNLd9As?rel=0"
        frameborder="0"
        allowfullscreen
      />`
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
    title: "Set variable",
    text: [
      `Choose "Variables" then "Create variable". Name it "spaceship"`,
      `Attach "Set spaceship to..." to "3D object"`,
      `<iframe
        style="margin:auto"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/M0JZwNLd9As?rel=0"
        frameborder="0"
        allowfullscreen
      />`
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
    title: "Set variable",
    text: [
      `Now, to add spaceship varialbe to the world. Attach "Add object" below "Set variable"`,
      `Choose "Variables" then "spaceship". Attach "Add object" to "spaceship"`,
      `<iframe
        style="margin:auto"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/qNTjM8q2f9w?rel=0"
        frameborder="0"
        allowfullscreen
      />`
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
    title: "Experiment",
    text: [
      "Experiment with different positions",
      `<iframe
        style="margin:auto"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/usEAwJ0UkZY?rel=0"
        frameborder="0"
        allowfullscreen
      />`
    ],
    condition: () => {
      return true;
    }
  },
  {
    title: "Next Step",
    text: [
      `Learn how to animate an object`,
      `<a href='#' onClick = 'Component.Components.lesson.fetchLesson("lessons/lesson2-gamify.js")'>` +
        `Lesson 2: Animation` +
        `</a>`
    ],
    condition: () => {
      return true;
    }
  }
];
