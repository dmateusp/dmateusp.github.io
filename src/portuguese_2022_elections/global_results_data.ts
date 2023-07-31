import globalResults from "./data/global.json";
import partyToColor from "./data/party_to_color.json";

export const dhondtGlobalResults =
  globalResults.currentResults.resultsParty.map((result) => ({
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

export const singleConstituencyGlobalResults =
  globalResults.currentResults.resultsParty.map((result) => ({
    value: result.mandates * Math.random(),
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
