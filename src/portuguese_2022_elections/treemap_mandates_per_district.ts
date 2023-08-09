import echarts, { ECOption } from "../echarts";
import portoElectionResults from "./data/porto.json";
import lisbonElectionResults from "./data/lisboa.json";
import acoresElectionResults from "./data/acores.json";
import aveiroElectionResults from "./data/aveiro.json";
import bejaElectionResults from "./data/beja.json";
import bragaElectionResults from "./data/braga.json";
import bragancaElectionResults from "./data/braganca.json";
import casteloBrancoElectionResults from "./data/castelo_branco.json";
import coimbraElectionResults from "./data/coimbra.json";
import europaElectionResults from "./data/europa.json";
import evoraElectionResults from "./data/evora.json";
import faroElectionResults from "./data/faro.json";
import foraDaEuropaElectionResults from "./data/fora_da_europa.json";
import guardaElectionResults from "./data/guarda.json";
import leiriaElectionResults from "./data/leiria.json";
import madeiraElectionResults from "./data/madeira.json";
import portalegreElectionResults from "./data/portalegre.json";
import santaremElectionResults from "./data/santarem.json";
import setubalElectionResults from "./data/setubal.json";
import vianaDoCasteloElectionResults from "./data/viana_do_castelo.json";
import vilaRealElectionResults from "./data/vila_real.json";
import viseuElectionResults from "./data/viseu.json";
import partyToLogo from "./data/party_to_logo.json";
import { toRichPartyLogo } from "./formatting";

const formatUtil = echarts.format;

function getLevelOption() {
  return [
    {
      itemStyle: {
        borderWidth: 0,
        gapWidth: 5,
      },
      label: {
        show: true,
        position: ["insideTopLeft"],
      },
    },
    {
      itemStyle: {
        borderWidth: 2,
        gapWidth: 5,
        borderColorSaturation: 0.8,
      },
      upperLabel: {
        show: true,
        height: 30,
      },
      label: {
        show: true,
        formatter: function (info: any) {
          return info.name + ": " + info.value;
        },
      },
    },
    {
      colorSaturation: [0.35, 0.5],
      itemStyle: {
        gapWidth: 1,
        borderColorSaturation: 0.6,
      },
      label: {
        show: true,
        formatter: function (info: any) {
          return (
            toRichPartyLogo(info.name) + " " + info.name + ": " + info.value
          );
        },
        rich: partyToLogo as any,
      },
    },
  ];
}

const processData = (
  districtName: string,
  d: { resultsParty: { acronym: string; mandates: number }[] }
) => ({
  name: districtName,
  value: d.resultsParty.map((r) => r.mandates).reduce((r1, r2) => r1 + r2),
  children: d.resultsParty.map((result) => ({
    name: result.acronym,
    value: result.mandates,
  })),
});
const data = [
  processData("Lisbon", lisbonElectionResults.currentResults),
  processData("Porto", portoElectionResults.currentResults),
  processData("Acores", acoresElectionResults.currentResults),
  processData("Aveiro", aveiroElectionResults.currentResults),
  processData("Beja", bejaElectionResults.currentResults),
  processData("Braga", bragaElectionResults.currentResults),
  processData("Braganca", bragancaElectionResults.currentResults),
  processData("Castelo Branco", casteloBrancoElectionResults.currentResults),
  processData("Coimbra", coimbraElectionResults.currentResults),
  processData("Europe", europaElectionResults.currentResults),
  processData("Evora", evoraElectionResults.currentResults),
  processData("Faro", faroElectionResults.currentResults),
  processData("Outside Europe", foraDaEuropaElectionResults.currentResults),
  processData("Guarda", guardaElectionResults.currentResults),
  processData("Leiria", leiriaElectionResults.currentResults),
  processData("Madeira", madeiraElectionResults.currentResults),
  processData("Portalegre", portalegreElectionResults.currentResults),
  processData("Santarem", santaremElectionResults.currentResults),
  processData("Setubal", setubalElectionResults.currentResults),
  processData("Viana do Castelo", vianaDoCasteloElectionResults.currentResults),
  processData("Vila Real", vilaRealElectionResults.currentResults),
  processData("Viseu", viseuElectionResults.currentResults),
];

const treeMapMandatesPerConstituencyOption: ECOption = {
  title: {
    text: "Mandates per constituency",
    left: "center",
    link: "#treemap-mandates-per-district",
    target: "self",
  },

  left: "0%",
  right: "0%",

  toolbox: {
    show: true,
    feature: {
      saveAsImage: {
        show: true,
        pixelRatio: 10,
      },
    },
    bottom: "0%",
    left: "30%",
  },

  tooltip: {
    formatter: function (info: any) {
      var value = info.value;
      var treePathInfo = info.treePathInfo;
      var treePath = [];

      for (var i = 1; i < treePathInfo.length; i++) {
        treePath.push(treePathInfo[i].name);
      }

      return [
        '<div class="tooltip-title">' +
          formatUtil.encodeHTML(treePath.join("/")) +
          "</div>",
        "Mandates: " + value,
      ].join("");
    },
  },
  legend: {
    show: false,
  },

  series: [
    {
      name: "Constituency mandates",
      type: "treemap",
      label: {
        show: true,
      },
      levels: getLevelOption(),
      data: data,
    },
  ],
};

export default treeMapMandatesPerConstituencyOption;
