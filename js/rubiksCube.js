
/**
 * RUBIK'S CUBE
 * Try to calculate the number of cubes that have a visible face on a regular Rubik's cube (3*3)
 */

const totalOfCubes = 3 * 3 * 3;
const totalOfVisibleCubes = 4 * (6 / 3) + 1 * (6 / 1) + 4 * (6 / 2);
const result = totalOfCubes - totalOfVisibleCubes;
