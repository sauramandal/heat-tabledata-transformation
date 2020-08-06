import _ from "lodash";

const seriesData = [
  {
    fullName: "Barbara Lee",
    p2g: 3,
    ws: 755,
    nw: 1,
    egc: 433419,
    inc: 167634,
    re: 94,
    dist: 3,
    con: 193,
    tg: 227333,
    x: 227333,
    y: 433419
  },
  {
    fullName: "Frederick Brown",
    p2g: 2,
    ws: 407,
    nw: 4,
    egc: 320906,
    inc: 100296,
    re: 52,
    dist: 0,
    con: 779,
    tg: 479056,
    x: 479056,
    y: 320906
  },
  {
    fullName: "Alison Smith",
    p2g: 5,
    ws: 766,
    nw: 9,
    egc: 715848,
    inc: 114860,
    re: 81,
    dist: 3,
    con: 229,
    tg: 254749,
    x: 254749,
    y: 715848
  },
  {
    fullName: "Jason Smith",
    p2g: 5,
    ws: 586,
    nw: 6,
    egc: 446476,
    inc: 343987,
    re: 68,
    dist: 3,
    con: 788,
    tg: 274841,
    x: 274841,
    y: 446476
  },
  {
    fullName: "Alfred Cardin",
    p2g: 2,
    ws: 461,
    nw: 10,
    egc: 759303,
    inc: 127344,
    re: 93,
    dist: 1,
    con: 953,
    tg: 386781,
    x: 386781,
    y: 759303
  },
  {
    fullName: "Sharlene Stout",
    p2g: 4,
    ws: 355,
    nw: 2,
    egc: 239985,
    inc: 362410,
    re: 68,
    dist: 2,
    con: 314,
    tg: 149979,
    x: 149979,
    y: 239985
  },
  {
    fullName: "Charity Bender",
    p2g: 5,
    ws: 829,
    nw: 6,
    egc: 815844,
    inc: 304757,
    re: 64,
    dist: 1,
    con: 772,
    tg: 107941,
    x: 107941,
    y: 815844
  },
  {
    fullName: "Georgina Valencia",
    p2g: 2,
    ws: 729,
    nw: 6,
    egc: 279665,
    inc: 220473,
    re: 29,
    dist: 1,
    con: 681,
    tg: 165195,
    x: 165195,
    y: 279665
  },
  {
    fullName: "Fry Anderson",
    p2g: 3,
    ws: 728,
    nw: 9,
    egc: 796324,
    inc: 354960,
    re: 50,
    dist: 0,
    con: 704,
    tg: 144730,
    x: 144730,
    y: 796324
  },
  {
    fullName: "Elvira Schwartz",
    p2g: 1,
    ws: 530,
    nw: 10,
    egc: 242875,
    inc: 137003,
    re: 85,
    dist: 2,
    con: 51,
    tg: 476612,
    x: 476612,
    y: 242875
  },
  {
    fullName: "Dolly Logan",
    p2g: 3,
    ws: 449,
    nw: 4,
    egc: 261824,
    inc: 100516,
    re: 45,
    dist: 2,
    con: 929,
    tg: 395554,
    x: 395554,
    y: 261824
  },
  {
    fullName: "Holcomb Holt",
    p2g: 5,
    ws: 389,
    nw: 0,
    egc: 836234,
    inc: 145925,
    re: 98,
    dist: 1,
    con: 663,
    tg: 304293,
    x: 304293,
    y: 836234
  },
  {
    fullName: "Gilliam Harding",
    p2g: 4,
    ws: 329,
    nw: 1,
    egc: 842725,
    inc: 292888,
    re: 83,
    dist: 3,
    con: 823,
    tg: 136008,
    x: 136008,
    y: 842725
  }
];
const nearestPowerOfTens = value => Math.pow(10, Math.floor(Math.log10(value)));
const defaultRadix = 10;
const maxX = _.maxBy(seriesData, item => item.x).x;
const maxY = _.maxBy(seriesData, item => item.y).y;
const maxXAxis = maxX + nearestPowerOfTens(maxX);
const maxYAxis = maxY + nearestPowerOfTens(maxY);
const splitIntervalX = nearestPowerOfTens(maxXAxis) / 10;
const splitIntervalY = nearestPowerOfTens(maxYAxis) / 10;
const rows = parseInt(maxXAxis / splitIntervalX, 10);
const columns = parseInt(maxYAxis / splitIntervalY, 10);

const xAxisHeaders = _.range(splitIntervalX, maxXAxis, splitIntervalX).map(
  header => header.toString() + "K"
);
const yAxisHeaders = _.range(splitIntervalY, maxYAxis, splitIntervalY).map(
  header => header.toString() + "K"
);
console.log(rows, columns, xAxisHeaders, yAxisHeaders);
// const val = 0;

const heatMapData = Array.from(Array(rows), () => Array(columns).fill([]));
console.log("Heat", seriesData, heatMapData);

seriesData.forEach(dataItem => {
  const xcoord = parseInt(dataItem.x / splitIntervalX, defaultRadix),
    ycoord = parseInt(dataItem.y / splitIntervalY, defaultRadix);

  if (!heatMapData[xcoord][ycoord].length) heatMapData[xcoord][ycoord] = [];
  heatMapData[xcoord][ycoord].push(dataItem);
});

// console.log(heatMapData);
