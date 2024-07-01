"use client";

import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { CssBaseline, Box } from "@mui/material";
import theme from "../utils/theme";
import Navigator from "../components/Navigator";
import Header from "../components/Header";
import Footer from "../components/Footer";

import '../styles/globals.css';


const drawerWidth = 256;

const Layout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Nursery Dashboard</title>
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <Box sx={{ display: "flex", minHeight: "100vh" }}>
            <CssBaseline />
            <Box
              component="nav"
              sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            >
              {isSmUp ? null : (
                <Navigator
                  PaperProps={{ style: { width: drawerWidth } }}
                  variant="temporary"
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                />
              )}

              <Navigator
                PaperProps={{ style: { width: drawerWidth } }}
                sx={{ display: { sm: "block", xs: "none" } }}
              />
            </Box>
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <Header onDrawerToggle={handleDrawerToggle} />
              <Box
                component="main"
                sx={{ flex: 1, py: 6, px: 4, bgcolor: "#eaeff1" }}
              >
                {children}
              </Box>
              <Box component="footer" sx={{ p: 2, bgcolor: "#eaeff1" }}>
                <Footer />
              </Box>
            </Box>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default Layout;
