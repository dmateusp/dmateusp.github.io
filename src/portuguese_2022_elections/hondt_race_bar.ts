import { ECOption } from "../echarts";
import { portoHondtRaceBarAfterXMandates } from "./hondt_race_bar_data";
import partyToColor from "./data/party_to_color.json";
import { toRichPartyLogo } from "./formatting";
import partyToLogo from "./data/party_to_logo.json";

export function hondtRaceBarOption(mandatesAssigned: number): ECOption {
  const data = portoHondtRaceBarAfterXMandates(mandatesAssigned);
  console.log(data.length)

  return {
    title: {
      text: "Method D'Hondt",
    },
    grid: {
      top: 30,
      bottom: 30,
      left: 150,
      right: 80,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    xAxis: [
      {
        type: "value",
        name: "Votes to use",
        nameLocation: "start",
        position: "top",
      },
      {
        type: "value",
        name: "Mandates won",
        nameLocation: "start",
        position: "bottom",
        minInterval: 1,
        max: 40,
      },
    ],
    yAxis: {
      type: "category",
      inverse: true,
      axisLabel: {
        show: true,
        fontSize: 14,
        formatter: function (param: any) {
          return toRichPartyLogo(param) + " " + param;
        },
        rich: partyToLogo as any,
      },
      animationDuration: 100,
      animationDurationUpdate: 100,
      data: data.map((r) => r.name),
    },
    series: [
      {
        name: "Votes",
        realtimeSort: true,
        type: "bar",
        itemStyle: {
          color: function (param) {
            return (partyToColor as Record<string, string>)[param.name];
          },
        },
        label: {
          show: true,
          position: "right",
          valueAnimation: true,
          fontFamily: "monospace",
          formatter: function (param: any) {
            return param.data.votes + " / (" + param.data.mandates + " mandates + 1)";
          },
        },
        data: data,
        xAxisIndex: 0,
      },
      {
        name: "Mandates won",
        type: "bar",
        itemStyle: {
          color: function (param) {
            return (partyToColor as Record<string, string>)[param.name];
          },
          opacity: 0.5,
        },
        label: {
          show: true,
          position: "right",
          valueAnimation: true,
          fontFamily: "monospace",
          formatter: function (param: any) {
            return param.value + " mandates";
          },
        },
        data: data.map((d) => d.mandates),
        xAxisIndex: 1,
        stack: "Votes",
      },
    ],
    // Disable init animation.
    animationDuration: 0,
    animationDurationUpdate: 250,
    animationEasing: "linear",
    animationEasingUpdate: "linear",
    graphic: {
      elements: [
        {
          type: "text",
          right: 160,
          bottom: "50%",
          style: {
            text: "Mandates assigned: " + mandatesAssigned,
            font: "bolder 80px monospace",
            fill: "rgba(100, 100, 100, 0.25)",
          },
          z: 100,
        },
      ],
    },
  };
}
