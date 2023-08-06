import { ECOption } from "../echarts";
import {
  constituencies,
  totalMandatesPerConstituency,
  registeredVotersPerConstituency,
} from "./mandates_data";

export const mandatesPerConstituencyOption: ECOption = {
  title: {
    text: "Mandates compared to subscribed voters per constituency",
  },
  toolbox: {
    show: true,
    feature: {
      saveAsImage: {
        show: true,
        pixelRatio: 10,
      },
    },
    bottom: "0%",
    left: "50%",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  legend: {},
  grid: {
    containLabel: false,
  },
  xAxis: [
    {
      type: "value",
      name: "Mandates",
      boundaryGap: [0, 1],
      position: "right",
      max: totalMandatesPerConstituency.reduce((m1, m2) => (m1 > m2 ? m1 : m2)),
      axisLabel: {
        fontSize: 15,
      },
    },
    {
      type: "value",
      name: "Registered voters",
      boundaryGap: [0, 1],
      min: 0,
      max: registeredVotersPerConstituency.reduce((r1, r2) =>
        r1 > r2 ? r1 : r2
      ),
      axisLabel: {
        fontSize: 15,
      },
    },
  ],
  yAxis: {
    type: "category",
    data: constituencies,
    axisLabel: {
        fontSize: 18,
    },
  },

  series: [
    {
      name: "Mandates",
      type: "bar",
      data: totalMandatesPerConstituency,
      xAxisIndex: 0,
    },
    {
      name: "Registered voters",
      type: "bar",
      data: registeredVotersPerConstituency,
      xAxisIndex: 1,
    },
  ],
};
