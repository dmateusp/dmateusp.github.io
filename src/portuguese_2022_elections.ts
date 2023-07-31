import echarts from "./echarts";
import globalResultsOption from "./portuguese_2022_elections/global_results";
import treeMapMandatesPerDistrictOption from "./portuguese_2022_elections/treemap_mandates_per_district";
import "./style.css";

const parliamentGeneralResultsDom = document.getElementById(
  "parliament-general-results"
);
if (parliamentGeneralResultsDom != null) {
  const parliamentChart = echarts.init(parliamentGeneralResultsDom);
  parliamentChart.setOption(globalResultsOption);
  window.addEventListener("resize", function () {
    parliamentChart.resize();
  });
}

const treeMapMandatesPerDistrictDom = document.getElementById(
    "treemap-mandates-per-district"
  );
  if (treeMapMandatesPerDistrictDom != null) {
    const treeMapMandatesPerDistrictChart = echarts.init(treeMapMandatesPerDistrictDom);
    treeMapMandatesPerDistrictChart.setOption(treeMapMandatesPerDistrictOption);
    window.addEventListener("resize", function () {
        treeMapMandatesPerDistrictChart.resize();
    });
  }
