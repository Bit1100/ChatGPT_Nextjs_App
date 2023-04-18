import { ThemeProvider } from "styled-components";
import { theme } from "@/themes";
import GlobalStyles from "@/styles/globals";
import { Container } from "@/styles/GlobalStyles";
import Navbar from "@/components/Layout/Navbar";
import Sidebar from "@/components/Layout/Sidebar";
import { store } from "@/store";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <Navbar />
        <Sidebar />
        <Container>{children}</Container>
      </Provider>
    </ThemeProvider>
  );
};

export default Layout;
