import type { TableData } from "./tableParser";

const processData = (data: TableData): TableData => {
  return data.reduce((acc, cur) => {
    if (
      cur["教員"] === undefined ||
      cur["成績の原評価（点数）"] === undefined ||
      cur["教員"] === "" ||
      cur["成績の原評価（点数）"] === ""
    )
      return acc;
    // const score = Number(cur["成績の原評価（点数）"]);
    // if (!score) return acc;
    // cur["成績の原評価（点数）"] = score;
    acc.push(cur);
    return acc;
  }, [] as TableData);
};

export default processData;
