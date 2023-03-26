import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import NftPreviewCardComponent from "./Components/NftPreviewCard/NftPreviewCardComponent";
import "./styles.css";

const theme = createTheme({
  typography: {
    body1: {
      fontSize: 18,
    },
    h1: {
      fontSize: 26,
    },
    fontFamily: "Outfit",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <NftPreviewCardComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
