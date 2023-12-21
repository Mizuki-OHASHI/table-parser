import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import type { TableData } from "./tableParser";

type Props = {
  table: TableData;
};

const ShowTable = ({ table }: Props) => {
  if (table.length === 0) return <></>;

  const head = Object.keys(table[0]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {head.map((h, i) => (
              <TableCell key={i} align="left">
                {h}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {table.map((row, j) => (
            <TableRow
              key={j}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {head.map((h, i) => (
                <TableCell key={i} align="left">
                  {row[h]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ShowTable;
