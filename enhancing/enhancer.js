module.exports = {
  succeed,
  fail,
  repair,
  get,
};

//items = { name, durability, enhancement }
//enhancement : 0 <= 20
//durability : 0 <= 100

//enhance succeeds, enhancement++. If enhancement = 20, the level isn't changed. Durability is unchanged

//enhancement fails: if < 15, the durability decreases by 5.
//if the enhancement >= 15, the durability -= 10
//if the enhancement > 16, the enhancement level --

function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
