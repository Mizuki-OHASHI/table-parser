import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Auth, GoogleUser } from "./auth";

const TokenGenerator: React.FC = () => {
  const [user, setUser] = React.useState(Auth.getUser());
  const [token, setToken] = React.useState("");
  React.useEffect(() => {
    Auth.onAuthStateChanged((user: GoogleUser) => {
      setUser(user);
      user.getIdToken().then((token) => setToken(token));
    });
  }, []);
  return (
    <Stack padding={4} spacing={4}>
      <Box fontSize={48} fontFamily="monospace">
        Bearer Token Generator
      </Box>
      {user ? (
        <Button variant="contained" onClick={() => Auth.logOut()}>
          Logout
        </Button>
      ) : (
        <Button variant="contained" onClick={() => Auth.logInWithGoogle()}>
          Login With Google
        </Button>
      )}
      {user && (
        <Stack spacing={2} fontSize={16} fontFamily="monospace">
          <Box fontSize={24}>User Information</Box>
          <Box>name: {user.displayName}</Box>
          <Box>email: {user.email}</Box>
          <Box>uid: {user.uid}</Box>
          <Box>
            token:
            <Button
              variant="text"
              onClick={() =>
                navigator.clipboard
                  .writeText(token)
                  .then(() => alert("Copied!"))
              }
            >
              Copy
            </Button>
            <Typography
              fontSize={16}
              fontFamily="monospace"
              mx={2}
              style={{ wordWrap: "break-word" }}
            >
              {token}
            </Typography>
          </Box>
        </Stack>
      )}
    </Stack>
  );
};

export default TokenGenerator;
