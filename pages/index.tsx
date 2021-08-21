import LoginMain from "./LoginMain";
import { prefix } from "../config/config";
import { PortfolioProvider } from "../context/context";
const IndexPage = () => (
  <PortfolioProvider value={{ prefix }}>
    <LoginMain />
  </PortfolioProvider>
);

export default IndexPage;
