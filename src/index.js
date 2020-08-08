import _ from "lodash";

const defaultRadix = 10;
const data = {
  title: {
    text: ""
  },
  chart: {
    type: "scatter",
    height: 400,
    style: {
      fontFamily: "Roboto, Arial, system-ui, sans-serif"
    }
  },
  xAxis: {
    title: {
      text: "Total Giving",
      style: {
        fontSize: 14,
        fontWeight: "bold"
      }
    },
    tickInterval: 100000,
    categories: ""
  },
  yAxis: {
    title: {
      text: "Estimated Giving Capacity",
      style: {
        fontSize: 14,
        fontWeight: "bold"
      }
    },
    tickInterval: 100000,
    categories: ""
  },
  plotOptions: {
    scatter: {
      marker: {
        radius: 5
      }
    },
    series: {
      states: {
        inactive: {
          opacity: 0.5
        }
      },
      dataLabels: {
        enabled: true,
        padding: 0,
        allowOverlap: false,
        format: "{point.name}",
        style: {
          color: "#333",
          textOutline: "none",
          fontSize: "10px",
          fontWeight: "normal"
        }
      },
      dataGrouping: {
        forced: true
      },
      point: {
        events: {}
      }
    }
  },
  seriesExample: [
    {
      name: "Series A",
      data: [
        {
          name: "AAA",
          x: 27,
          y: 38
        },
        {
          name: "AAA",
          x: 72,
          y: 19
        },
        {
          name: "AAA",
          x: 44,
          y: 40
        },
        {
          name: "AAA",
          x: 67,
          y: 84
        },
        {
          name: "AAA",
          x: 54,
          y: 18
        },
        {
          name: "AAA",
          x: 48,
          y: 29
        },
        {
          name: "AAA",
          x: 45,
          y: 68
        },
        {
          name: "AAA",
          x: 65,
          y: 36
        },
        {
          name: "AAA",
          x: 84,
          y: 80
        },
        {
          name: "AAA",
          x: 56,
          y: 67
        },
        {
          name: "AAA",
          x: 20,
          y: 30
        },
        {
          name: "AAA",
          x: 76,
          y: 39
        }
      ]
    }
  ],
  credits: {
    enabled: false
  },
  series: [
    {
      name: "Major Donors",
      color: "hsla(300, 70%, 26%, 0.5)",
      marker: {
        symbol: "circle",
        radius: 8
      },
      data: [
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
      ]
    },
    {
      name: "Annual Fund Donors",
      color: "hsla(103, 48%, 51%, 0.5)",
      marker: {
        symbol: "circle",
        radius: 8
      },
      data: [
        {
          fullName: "Holcomb Holt",
          p2g: 3,
          ws: 653,
          nw: 6,
          egc: 639916,
          inc: 363059,
          re: 55,
          dist: 3,
          con: 458,
          tg: 352748,
          x: 352748,
          y: 639916
        },
        {
          fullName: "Gilliam Harding",
          p2g: 5,
          ws: 685,
          nw: 0,
          egc: 838644,
          inc: 269932,
          re: 50,
          dist: 4,
          con: 24,
          tg: 483348,
          x: 483348,
          y: 838644
        },
        {
          fullName: "Amelia Lee",
          p2g: 1,
          ws: 455,
          nw: 5,
          egc: 719104,
          inc: 432751,
          re: 42,
          dist: 0,
          con: 685,
          tg: 220490,
          x: 220490,
          y: 719104
        },
        {
          fullName: "Patrick Miller",
          p2g: 3,
          ws: 637,
          nw: 6,
          egc: 734814,
          inc: 340027,
          re: 27,
          dist: 1,
          con: 263,
          tg: 346540,
          x: 346540,
          y: 734814
        },
        {
          fullName: "Angela Larson",
          p2g: 3,
          ws: 423,
          nw: 3,
          egc: 201598,
          inc: 279877,
          re: 75,
          dist: 3,
          con: 965,
          tg: 47158,
          x: 47158,
          y: 201598
        },
        {
          fullName: "Bethany Cho",
          p2g: 1,
          ws: 549,
          nw: 6,
          egc: 108892,
          inc: 441447,
          re: 89,
          dist: 0,
          con: 646,
          tg: 102078,
          x: 102078,
          y: 108892
        },
        {
          fullName: "Bill Osborn",
          p2g: 4,
          ws: 790,
          nw: 1,
          egc: 644523,
          inc: 124489,
          re: 59,
          dist: 2,
          con: 246,
          tg: 295762,
          x: 295762,
          y: 644523
        },
        {
          fullName: "Bill Brown",
          p2g: 4,
          ws: 782,
          nw: 2,
          egc: 721807,
          inc: 128813,
          re: 4,
          dist: 2,
          con: 770,
          tg: 449489,
          x: 449489,
          y: 721807
        },
        {
          fullName: "Braden Stone",
          p2g: 3,
          ws: 777,
          nw: 2,
          egc: 820162,
          inc: 169462,
          re: 53,
          dist: 1,
          con: 404,
          tg: 234936,
          x: 234936,
          y: 820162
        },
        {
          fullName: "Christopher Malcolm",
          p2g: 1,
          ws: 355,
          nw: 8,
          egc: 689975,
          inc: 218313,
          re: 50,
          dist: 3,
          con: 938,
          tg: 274571,
          x: 274571,
          y: 689975
        },
        {
          fullName: "Dorothy King",
          p2g: 1,
          ws: 367,
          nw: 8,
          egc: 657278,
          inc: 399356,
          re: 42,
          dist: 4,
          con: 547,
          tg: 223253,
          x: 223253,
          y: 657278
        },
        {
          fullName: "Evelyn Stabenow",
          p2g: 5,
          ws: 637,
          nw: 5,
          egc: 403604,
          inc: 141891,
          re: 8,
          dist: 1,
          con: 376,
          tg: 238821,
          x: 238821,
          y: 403604
        },
        {
          fullName: "Fred Thompson",
          p2g: 1,
          ws: 698,
          nw: 10,
          egc: 353376,
          inc: 257819,
          re: 60,
          dist: 4,
          con: 833,
          tg: 139442,
          x: 139442,
          y: 353376
        },
        {
          fullName: "Gill Kaine",
          p2g: 4,
          ws: 625,
          nw: 10,
          egc: 884322,
          inc: 162331,
          re: 79,
          dist: 2,
          con: 963,
          tg: 368753,
          x: 368753,
          y: 884322
        }
      ]
    }
  ],
  legend: {
    layout: "horizontal"
  },
  tooltip: {}
};
const title = data.xAxis.title.text + " VS " + data.yAxis.title.text;
const xAxisLabel = data.xAxis.title.text,
  yAxisLabel = data.yAxis.title.text;
const nearestPowerOfTens = (value) =>
  Math.pow(10, Math.floor(Math.log10(value)));
const maxX = data.xAxis.categories
  ? data.xAxis.categories.length
  : _.maxBy(data.series[0].data, (item) => item.x).x;
const maxY = data.yAxis.categories
  ? data.yAxis.categories.length
  : _.maxBy(data.series[0].data, (item) => item.y).y;
const maxXAxis =
  maxX +
  (data.xAxis.tickInterval
    ? data.xAxis.tickInterval
    : nearestPowerOfTens(maxX));
const maxYAxis =
  maxY +
  (data.yAxis.tickInterval
    ? data.yAxis.tickInterval
    : nearestPowerOfTens(maxY));
const splitIntervalX = data.xAxis.tickInterval
  ? data.xAxis.tickInterval
  : nearestPowerOfTens(maxXAxis);
const splitIntervalY = data.yAxis.tickInterval
  ? data.yAxis.tickInterval
  : nearestPowerOfTens(maxYAxis);
const rows = data.xAxis.categories
  ? data.xAxis.categories.length
  : parseInt(maxXAxis / splitIntervalX, defaultRadix);
const columns = data.yAxis.categories
  ? data.yAxis.categories.length
  : parseInt(maxYAxis / splitIntervalY, defaultRadix);

const yAxisHeaders = data.xAxis.categories
  ? data.xAxis.categories
  : _.range(
      splitIntervalX,
      maxXAxis + nearestPowerOfTens(maxX),
      splitIntervalX
    ).map((header) => nFormatter(header, 0).toString());
const xAxisHeaders = data.yAxis.categories
  ? data.yAxis.categories
  : _.range(
      splitIntervalY,
      maxYAxis + nearestPowerOfTens(maxY),
      splitIntervalY
    ).map((header) => nFormatter(header, 0).toString());

const heatMapData = Array.from(Array(columns + 1), () =>
  Array(rows + 1).fill([])
);
data.series[0].data.forEach((dataItem) => {
  const xcoord = parseInt(dataItem.x / splitIntervalX, defaultRadix),
    ycoord = parseInt(dataItem.y / splitIntervalY, defaultRadix);

  if (!heatMapData[ycoord][xcoord].length) heatMapData[ycoord][xcoord] = [];
  heatMapData[ycoord][xcoord].push(dataItem);
});

console.log(heatMapData, xAxisHeaders, yAxisHeaders);

function nFormatter(num, digitsAfterDecimal) {
  const formatKeys = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" }
  ];
  const regex = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let i;
  for (i = formatKeys.length - 1; i > 0; i--) {
    if (num >= formatKeys[i].value) {
      break;
    }
  }
  return (
    (num / formatKeys[i].value)
      .toFixed(digitsAfterDecimal)
      .replace(regex, "$1") + formatKeys[i].symbol
  );
}

/*
 * Tests
 */
var tests = [
  { num: 1234, digits: 1 },
  { num: 100000000, digits: 1 },
  { num: 299792458, digits: 1 },
  { num: 759878, digits: 1 },
  { num: 759878, digits: 0 },
  { num: 123, digits: 1 },
  { num: 123.456, digits: 1 },
  { num: 123.456, digits: 2 },
  { num: 123.456, digits: 4 }
];
var i;
for (i = 0; i < tests.length; i++) {
  console.log(
    "nFormatter(" +
      tests[i].num +
      ", " +
      tests[i].digits +
      ") = " +
      nFormatter(tests[i].num, tests[i].digits)
  );
}
