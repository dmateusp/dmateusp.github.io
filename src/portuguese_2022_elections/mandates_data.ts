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

const toEnglishNames = (s: string) => {
  switch (s) {
    case "Lisboa":
      return "Lisbon";
    case "Fora da Europa":
      return "Outside Europe";
    case "Europa":
      return "Europe";
    default:
      return s;
  }
};

const constituenciesData = [
  lisbonElectionResults,
  portoElectionResults,
  acoresElectionResults,
  aveiroElectionResults,
  bejaElectionResults,
  bragaElectionResults,
  bragancaElectionResults,
  casteloBrancoElectionResults,
  coimbraElectionResults,
  europaElectionResults,
  evoraElectionResults,
  faroElectionResults,
  foraDaEuropaElectionResults,
  guardaElectionResults,
  leiriaElectionResults,
  madeiraElectionResults,
  portalegreElectionResults,
  santaremElectionResults,
  setubalElectionResults,
  vianaDoCasteloElectionResults,
  vilaRealElectionResults,
  viseuElectionResults,
].sort(
  (c1, c2) => c1.currentResults.totalMandates - c2.currentResults.totalMandates
);

export const constituencies = constituenciesData.map((c) =>
  toEnglishNames(c.territoryFullName)
);

const getSubscribedVoters = (d: {
  currentResults: { subscribedVoters: number };
}) => d.currentResults.subscribedVoters;

const getTotalMandates = (d: { currentResults: { totalMandates: number } }) =>
  d.currentResults.totalMandates;

export const totalMandatesPerConstituency =
  constituenciesData.map(getTotalMandates);

export const registeredVotersPerConstituency =
  constituenciesData.map(getSubscribedVoters);
