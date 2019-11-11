let workspace = Component.Components.blockly.workspace;
setURLParam("lesson", "lesson3");

[
  {
    title: ["Lesson 3: Interactive animation"],
    text: []
  },
  {
    title: "Add an event",
    text: [
      `Choose "Event" then "When you look at". Change "tux" to "myBoat"`,
      `Drag and attach "When you look at" to cover "Do in sequence"`,
      `<iframe 
      style="margin:auto" 
      width="100%" 
      height="100%" src="https://www.youtube.com/embed/DuJOUE9WQlY?rel=0"
      frameborder="0" 
      allowfullscreen/>`
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

      // if (blocks.length === 2 && blocks[1].type === "env3d_event_lookat") {
      // }
    }
  },
  {
    title: "Challenge",
    text: [
      "Move the car around the streets by adding more animation blocks"
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
