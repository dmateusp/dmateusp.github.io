import { ECOption } from "../echarts";
import globalResults from "./data/global.json";
import partyToColor from "./data/party_to_color.json";
import partyToLogo from "./data/party_to_logo.json";
import { toRichPartyLogo } from "./formatting";

const data = globalResults.currentResults.resultsParty.map((result) => ({
  value: result.mandates,
  name: result.acronym,
  itemStyle: {
    color: (partyToColor as Record<string, string>)[result.acronym],
    decal: {
      symbol: "none",
    },
  },
  label: {
    show: true,
  },
}));

const globalResultsOption = (function () {
  let sum = data.reduce(function (sum, cur) {
    return sum + cur.value;
  }, 0);

  data.push({
    // make a record to fill the bottom 50%
    name: "",
    value: sum,
    itemStyle: {
      // stop the chart from rendering this piece
      color: "none",
      decal: {
        symbol: "none",
      },
    },
    label: {
      show: false,
    },
  });

  return {
    toolbox: {
      show: true,
      feature: {
        saveAsImage: {
          show: true,
          pixelRatio: 10,
        },
      },
      bottom: "5%",
      left: "center",
    },
    title: {
        text: "Global results",
        left: "center",
      },
    tooltip: {
      trigger: "item",
    },
    series: {
      id: "distribution",
      data: data.filter((v) => v.value > 0),
      type: "pie",
      radius: ["40%", "70%"],
      center: ["50%", "70%"],
      // adjust the start angle
      startAngle: 180,
      label: {
        show: true,
        formatter: (param: any) =>
          toRichPartyLogo(param.name) +
          " " +
          param.name +
          ": " +
          param.value +
          " seats " +
          " (" +
          (param.percent || 0) * 2 +
          "%)",
        rich: partyToLogo,
      },
    },
  } as ECOption;
})();

export default globalResultsOption;
