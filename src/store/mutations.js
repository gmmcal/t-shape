export default {
  addToArm(state, name) {
    const skill = {
      name: name,
      x: 0,
      y: 0,
      w: 150,
      h: 50,
    }
    state.armSkills.push(skill)
  },
  addToLeg(state, name) {
    const skill = {
      name: name,
      x: 0,
      y: 0,
      w: 150,
      h: 50,
    }
    state.legSkills.push(skill)
  }
}
