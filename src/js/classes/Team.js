export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw Error('Такой персонаж уже есть в команде');
    } else {
      this.members.add(character);
    }
  }

  addAll(...rest) {
    rest.forEach((el) => {
      this.members.add(el);
    });
  }

  toArray() {
    return [...this.members];
  }
}
