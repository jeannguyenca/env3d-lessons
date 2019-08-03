let workspace = Component.Components.blockly.workspace;
setURLParam("lesson", "lesson3");

[
  {
    title: ["Lesson 3: Interactive animation"],
    text: []
  },
  {
    title: "Add event block",
    text: [
      "Event > When you look at spaceship\n",
      "Drag and attach to do in sequence block and change the variable to “spaceship”",
      `<iframe 
      style="margin:auto" 
      width="100%" 
      height="100%" src="https://www.youtube.com/embed/DuJOUE9WQlY?rel=0"
      frameborder="0" 
      allowfullscreen/>`
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
    title: "Challenge",
    text: [
      "Try adding a planet as a new object and try to take the spaceship to the planet (You can skip this step)"
    ],
    condition: () => {
      return true;
    }
  },
  {
    title: "Review",
    text: ["Checking the workspace and make sure there is no lone block"],
    condition: () => {
      return true;
    }
  },
  {
    title: "Check with VR glasses",
    text: [
      "Use VR glasses and see the world",
      `<iframe 
      style="margin:auto" 
      width="100%" 
      height="100%" src="https://www.youtube.com/embed/EnTllUEWkj0?rel=0"
      frameborder="0" 
      allowfullscreen/>`
    ],
    condition: () => {
      return true;
    }
  },
  {
    title: "Share the world",
    text: ["Share the URL and have fun with your friends"],
    condition: () => {
      return true;
    }
  }
];
