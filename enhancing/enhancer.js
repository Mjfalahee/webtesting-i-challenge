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
  let x = item.enhancement;
  if (x < 20) {
    x++;
  }
  return { ...item, enhancement: x };
}

function fail(item) {
  let enh = item.enhancement;
  let dur = item.durability;
  if (enh < 15) {
    dur -= 5; 
  } else if (enh === 15) {
    dur -= 10;
  } else if (enh > 15) {
    enh--;
    dur-= 10;
  }
  return { ...item, durability: dur, enhancement: enh };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  enh = item.enhancement;
  it = item.name;

  if (enh > 0) {
    it = `[+${enh}] ${it}`;
  }
  return { ...item, name: it };
}
