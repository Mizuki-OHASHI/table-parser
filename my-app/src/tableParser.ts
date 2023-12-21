export type TableRow = {
  [key: string]: string | number;
};
export type TableData = TableRow[];

const TableParser = (lines: string): TableData => {
  const rows = lines.split("\n");
  const tableArray = rows
    .filter((row) => row.length > 2)
    .map((row) => row.split("\t").map((cell) => cell.trim()));

  return arrayToObjects(tableArray);
};

const arrayToObjects = (array: string[][]): TableData => {
  const head = array[0];
  const table = array.slice(1).map((row) => {
    const record: TableRow = {};
    head.forEach((key, index) => {
      record[key] = row[index];
    });
    return record;
  });
  return table;
};

export default TableParser;
