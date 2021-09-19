const difference = <G, T extends G>(first: T[], second: G[]) =>
  first.filter((x) => !second.includes(x));

export default difference;
