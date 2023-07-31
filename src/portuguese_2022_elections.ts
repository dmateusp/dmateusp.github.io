import echarts from "./echarts";
import { dhondtGlobalResults, singleConstituencyGlobalResults } from "./portuguese_2022_elections/global_results_data";
import globalResultsOption from "./portuguese_2022_elections/global_results";
import treeMapMandatesPerDistrictOption from "./portuguese_2022_elections/treemap_mandates_per_district";
import "./style.css";

// State
enum ElectionMethod {
    HONDT_2022 = 1,
    SINGLE_CONSTITUENCY,
    RECYCLED_VOTES,
}
let selectedElectionMethod = {
    internal: ElectionMethod.HONDT_2022,
    listener: function(val: ElectionMethod) {
        console.log("hey: ", val)
    },
    set electionMethod(val) {
      this.internal = val;
      this.listener(val);
    },
    get electionMethod() {
      return this.internal;
    },
    registerListener: function(f: (val: ElectionMethod) => void) {
        let g = this.listener
        this.listener = (val: ElectionMethod) => { g(val); f(val) }
    }
  };

// ECharts init
const parliamentGeneralResultsDom = document.getElementById(
  "parliament-general-results"
);
if (parliamentGeneralResultsDom != null) {
  const parliamentChart = echarts.init(parliamentGeneralResultsDom);
  parliamentChart.setOption(globalResultsOption(dhondtGlobalResults));
  selectedElectionMethod.registerListener((val: ElectionMethod) => {
    switch (val) {
        case ElectionMethod.HONDT_2022:
            parliamentChart.setOption(globalResultsOption(dhondtGlobalResults))
            break
        case ElectionMethod.SINGLE_CONSTITUENCY:
            parliamentChart.setOption(globalResultsOption(singleConstituencyGlobalResults))
            break
    }
  })
  window.addEventListener("resize", function () {
    parliamentChart.resize();
  });
}

const treeMapMandatesPerDistrictDom = document.getElementById(
  "treemap-mandates-per-district"
);
if (treeMapMandatesPerDistrictDom != null) {
  const treeMapMandatesPerDistrictChart = echarts.init(
    treeMapMandatesPerDistrictDom
  );
  treeMapMandatesPerDistrictChart.setOption(treeMapMandatesPerDistrictOption);
  window.addEventListener("resize", function () {
    treeMapMandatesPerDistrictChart.resize();
  });
}

// Election method selection
const electionMethodSelect = (e: MouseEvent) => {
  let elem = e.target as HTMLButtonElement;
  if (elem.id != electionMethodButtonDHondt.id) {
    electionMethodButtonDHondt.classList.remove("bg-slate-700");
  } else {
    selectedElectionMethod.electionMethod = ElectionMethod.HONDT_2022
  }
  if (elem.id != electionMethodButton1Constituency.id) {
    electionMethodButton1Constituency.classList.remove("bg-slate-700");
  } else {
    selectedElectionMethod.electionMethod = ElectionMethod.SINGLE_CONSTITUENCY
  }
  if (elem.id != electionMethodButtonUnusedVotesRecycled.id) {
    electionMethodButtonUnusedVotesRecycled.classList.remove("bg-slate-700");
  } else {
    selectedElectionMethod.electionMethod = ElectionMethod.RECYCLED_VOTES
  }
  elem.classList.add("bg-slate-700");
};

const electionMethodButtonDHondt = document.getElementById(
  "button-election-method-2022-dhondt"
)!;
electionMethodButtonDHondt.onclick = electionMethodSelect;
electionMethodButtonDHondt.classList.add("bg-slate-700");

const electionMethodButton1Constituency = document.getElementById(
  "button-election-method-1-constituency"
)!;

electionMethodButton1Constituency.onclick = electionMethodSelect;

const electionMethodButtonUnusedVotesRecycled = document.getElementById(
  "button-election-method-unused-votes-recycled"
)!;

electionMethodButtonUnusedVotesRecycled.onclick = electionMethodSelect;
