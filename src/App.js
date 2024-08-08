import { Provider } from "react-redux";
import "./App.css";
import ChatComponent from "./components/ChatComponent";
import NavBarComponent from "./components/NavBarComponent";
import store from "./redux/store";
import { useMemo, useState } from "react";
import ChatReadOnlyComponent from "./components/ChatReadOnlyComponent";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const [index, setIndex] = useState(-1);
  const [darkMode, setDarkMode] = useState(false);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <>
          <NavBarComponent
            setIndex={setIndex}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
          <Box sx={{ paddingTop: "64px" }}>
            {index < 0 && <ChatComponent />}
            {index >= 0 && <ChatReadOnlyComponent index={index} />}
          </Box>
        </>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
