import echarts, { ECOption } from "./echarts";
import globalResults from "./portuguese_2022_elections/data/global.json";
import partyToColor from "./portuguese_2022_elections/data/party_to_color.json";
import partyToLogo from "./portuguese_2022_elections/data/party_to_logo.json";
import "./style.css";

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

const parliamentOption = (function () {
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
            }
        },
        bottom: "5%",
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
          "{" +
          param.name.toLowerCase().replace(/\.|\/|\-/g, "") +
          "|} " +
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

const parliamentGeneralResultsDom = document.getElementById(
  "parliament-general-results"
);
if (parliamentGeneralResultsDom != null) {
  const parliamentChart = echarts.init(parliamentGeneralResultsDom);
  parliamentChart.setOption(parliamentOption);
  window.addEventListener("resize", function () {
    parliamentChart.resize();
  });
}
