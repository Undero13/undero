type ParamType = unknown[] | Object | Record<string, string | number | symbol>;

const isEmpty = (data: ParamType): boolean => {
  if (Array.isArray(data)) return !data.length;
  if (typeof data === "object") return !Object.keys(data).length;

  throw Error("Argument must be instance od array or object");
};

export default isEmpty;
