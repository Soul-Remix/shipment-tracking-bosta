import NavBar from "./components/NavBar/NavBar";
import { queryClient } from "@/lib/react-query";
import { QueryClientProvider } from "react-query";
import TrackingPage from "@/pages/TrackingPage";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import { createTheme, ThemeProvider } from "@mui/material";

import "@/lib/il8n";
import { useTranslation } from "react-i18next";
import "dayjs/locale/ar";
import { useEffect, useState } from "react";

dayjs.extend(relativeTime);

const theme = createTheme({
  typography: {
    fontFamily: ["cairo", "Roboto", "Arial", "sans-serif"].join(","),
  },
});

function App() {
  const [direction, setDirection] = useState("ltr");
  const { i18n } = useTranslation();

  useEffect(() => {
    dayjs.locale(i18n.language);
    document.documentElement.lang = i18n.language;
    if (i18n.language === "ar") {
      setDirection("rtl");
    } else {
      setDirection("ltr");
    }
  }, [i18n.language]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <div dir={direction}>
          <NavBar />
          <TrackingPage />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
