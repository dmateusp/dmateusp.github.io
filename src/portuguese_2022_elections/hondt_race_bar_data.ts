import portoElectionResults from "./data/porto.json";

export const portoHondtRaceBar =
  portoElectionResults.currentResults.resultsParty
    .map((r) => ({
      name: r.acronym,
      value: r.votes,
      votes: r.votes,
      mandates: 0,
    }))
    .sort((r1, r2) => r2.value - r1.value)
    .slice(0, 12);

export const portoHondtRaceBarAfterXMandates = (m: number) => {
  let result: {name: string, value: number, votes: number, mandates: number}[] = JSON.parse(JSON.stringify(portoHondtRaceBar));
  for (let i = 0; i < m; i++) {
    result[0].mandates += 1;
    result[0].value = Math.floor(result[0].votes/(result[0].mandates+1))
    result.sort((r1: {value: number}, r2: {value: number}) => r2.value - r1.value);
  }
  return result;
};
