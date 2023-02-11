import NavBar from "./components/NavBar/NavBar";
import { queryClient } from "@/lib/react-query";
import { QueryClientProvider } from "react-query";
import TrackingPage from "@/pages/TrackingPage";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import { createTheme, ThemeProvider } from "@mui/material";

import "@/lib/il8n";
import { useTranslation } from "react-i18next";

dayjs.extend(relativeTime);

const theme = createTheme({
  typography: {
    fontFamily: ["cairo", "Roboto", "Arial", "sans-serif"].join(","),
  },
});

function App() {
  const { i18n } = useTranslation();

  dayjs.locale(i18n.language);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <NavBar />
        <TrackingPage />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
