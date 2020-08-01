/* eslint-disable no-unused-vars */
import Character from '../classes/Character';
import Bowman from '../classes/Bowman';
import Magician from '../classes/Magician';
import Team from '../classes/Team';

test('Method "Add" add character to team', () => {
  const bowman = new Bowman('Legolas');
  const team = new Team();
  team.add(bowman);
  const result = team.members.size;
  expect(result).toEqual(1);
});
test('Method "AddAll" add all characters to team', () => {
  const bowman = new Bowman('Legolas');
  const magician = new Magician('Merlin');
  const team = new Team();
  team.addAll(bowman, magician);
  const result = team.members.size;
  expect(result).toEqual(2);
});
test('Method "ToArray" turn team members to array', () => {
  const bowman = new Bowman('Legolas');
  const magician = new Magician('Merlin');
  const team = new Team();
  team.addAll(bowman, magician);
  const result = team.toArray();
  expect(result).toEqual([
    {
      name: 'Legolas',
      level: 1,
      health: 100,
      attack: 25,
      defense: 25,
    },
    {
      name: 'Merlin',
      level: 1,
      health: 100,
      attack: 10,
      defense: 40,
    },
  ]);
});
test('Method "Add" return error if team already has character', () => {
  expect(() => {
    const bowman = new Bowman('Legolas');
    const team = new Team();
    team.add(bowman);
    team.add(bowman);
  }).toThrow();
});
