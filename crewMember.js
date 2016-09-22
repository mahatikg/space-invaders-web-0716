/ tristan = new CrewMember('Pilot')
// jon = new CrewMember('Defender')
// katie = new CrewMember('Gunner')

class CrewMember {
  // should return "Looking for a Rig" if not assigned to a ship
  //
  constructor(position){
    this.position = position;
    this.currentShip = 'Looking for a Rig';

  }
  // currentShip() {
  //   // if (this.currentShip !== undefined) {
  //   //   // somehow assign ship...
  //   // } else {
  //     return 'Looking for a Rig'
  //   // }
  // }
  engageWarpDrive(){
    if (this.position === "Pilot") {
      return 'had no effect'
    }
  }
  setsInvisibility(){
    if (this.position === "Defender") {
      return 'had no effect'
    }
  }
  chargePhasers(){
    if (this.position === "Gunner") {
      return 'had no effect'
    }
  }
}

// it('should should return "Looking for a Rig" if they aren\'t assigned to a ship', function() {
//   expect(tristan.currentShip).toBe('Looking for a Rig')
// })
// it('a crew member should return their ship when `currentShip` is called on them', function() {
//   expect(tristan.currentShip).toBe(spaceship)
//   expect(tristan.currentShip.name).toBe('The Krestel')
// })

// class Pilot extends CrewMember {
//
// }

// schyler = new CrewMember("Pilot")
// schyler.currentShip = "Enterprise";
// console.log(schyler.currentShip);

// it('should should return " if they aren\'t assigned to a ship', function() {
//   expect(tristan.currentShip).toBe('Looking for a Rig')
// })
//
// it('should return "had no effect" when the crew member tries to use their special ability', function() {
//   expect(tristan.engageWarpDrive()).toBe('had no effect')
//   expect(jon.setsInvisibility()).toBe('had no effect')
//   expect(katie.chargePhasers()).toBe('had no effect')
// })
// })
