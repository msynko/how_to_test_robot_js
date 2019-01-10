const {newRobot, station, prioritizeTasks, isWorkday}  = require("./robot.js");

// remove .skip when you're ready to implement the test
test('test_that_foreign_robot_needing_repairs_sent_to_station_1', () => {

const robot = newRobot(true, true, false);

const actual = station(robot);

expect(actual).toEqual(1);

});

test('test_that_vintage_robot_needing_repairs_sent_to_station_2', () => {

const anotherRobot = newRobot(true,false,true);

const result = station(anotherRobot);

expect(result).toEqual(2);

});

test('test_that_standard_robot_needing_repairs_sent_to_station_3', () => {

const otherRobot = newRobot(true,false,false);

const expected = station(otherRobot);

expect(expected).toEqual(3);

});

test('test_that_robot_in_good_condition_sent_to_station_4', () => {

const goodRobot = newRobot(false,false,false);

const good = station(goodRobot);

expect(good).toEqual(4);

});

test('test_prioritize_tasks_with_empty_todo_list_returns_negative_one', () => {

 const robot = newRobot(false,false,false);

robot.todos = []

 expect(prioritizeTasks(robot)).toEqual(-1);

})

test('test_prioritize_tasks_with_todos_returns_max_todo_value', () => {

const nrobot = newRobot(true,true,false);

nrobot.todos = [1,2,3,4,5,6]

expect(prioritizeTasks(nrobot)).toEqual(6);

});

test('test_workday_on_day_off_returns_false', () => {
//
const mrobot = newRobot(true,true,false);

mrobot.dayOff = 'Friday';

const today = 'Friday';

expect(isWorkday(mrobot,today)).toEqual(false);
});

test('test_workday_not_day_off_returns_true', () => {

  const krobot = newRobot(true,true,false);

  krobot.dayOff = 'Saturday';

  const today = 'Friday';

  expect(isWorkday(krobot,today)).toEqual(true);
});
