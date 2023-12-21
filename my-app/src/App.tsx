import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import { useState } from "react";
import tableParser from "./tableParser";
import processData from "./processData";
import ShowTable from "./showTable";

const App = () => {
  const [text, setText] = useState("");

  const handleTable = (text: string) => processData(tableParser(text));
  return (
    <Stack padding={4} spacing={4}>
      <Box fontSize={48} fontFamily="monospace">
        Table Parser Demo
      </Box>
      <TextField
        id="outlined-multiline-static"
        label="テーブルを貼り付けてください（ヘッダー行が必要です）"
        multiline
        rows={12}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <ShowTable table={handleTable(text)} />
    </Stack>
  );
};

export default App;
