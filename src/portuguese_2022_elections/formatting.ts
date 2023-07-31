export const toRichPartyLogo = (x: string) =>
  "{" + x.toLowerCase().replace(/\.|\/|\-/g, "") + "|}";
