import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import App from "./App";
import TokenGenerator from "./TokenGenerator";

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <Box>
            <Typography variant="h1">Welcome !</Typography>
          </Box>
        }
      />
      <Route path="/table-parser" element={<App />} />
      <Route path="/token-generator" element={<TokenGenerator />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
