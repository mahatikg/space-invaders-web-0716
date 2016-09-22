// spaceship = new Spaceship('The Krestel', [], 5, 4)

class Spaceship {
  constructor(name, crewMembers, phasers, shields){
    this.name = name;
    this.crewMembers = crewMembers;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    this.docked = this.docked();
    this.phasersCharge = "uncharged"
    this.shipAssignment();
  }
  docked(){
    if (this.crewMembers.length === 0) {
      return true
    } else {
      return false
    }
  }
  shipAssignment(){
    this.crewMembers.forEach(function(crewMember){
      crewMember.currentShip = // .bind? closure? arrow function?
    })
  }
}
