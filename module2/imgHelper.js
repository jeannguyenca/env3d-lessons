const imgDir = "./lessons/img/";

let getBlock = function(block) {
  return `<img src="${imgDir}${block}" alt="aBlock"/>`;
}

let getBlockBig = function(block) {
  return `<img src="${imgDir}${block}" alt="aBlock"/>`;
}

const object = getBlock("object.png"),
      addObj_3dobj = getBlock("addObj_3dobj.png"),
      fourSeasons = getBlock("module3/fourSeasons.png"),
      vehicles = getBlock("module2/vehicles.png"),
      car = getBlock("module2/car.png"),
      boat = getBlock("module3/boat.png"),
      world = getBlock("world.png"),
      tutorial = getBlock("module1/tutorial.png"),
      ap_tutorial_spaceship = getBlock("module1/ap_tutorial_spaceship.png"),
      outdoor = getBlock("outdoor.png"),
      addObj = getBlock("addobj.png"),
      addObj_dis = getBlock("addobj_disable.png"),
      threeDObj = getBlock("3dobj.png"),
      variables = getBlock("variables.png"),
      aVariableCar = getBlock("module2/myCar.png"),
      createVariable = getBlock("createVar.png"),
      setVariableSpaceship = getBlock("module1/setspaceship.png"),
      aVariableSpaceship = getBlock("module1/spaceship.png"),
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
      roadAndSign = getBlock("module2/roadsandsigns.png"),
      whenlookat = getBlock("whenlookat.png");


      module.exports = {
        object
      }