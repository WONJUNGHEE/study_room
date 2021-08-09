import Link from "next/link";
import LoginMain from "./LoginMain";

const prefix =
  process.env.NODE_ENV === "production"
    ? "https://WONJUNGHEE.github.io/study_room/"
    : "";
const IndexPage = () => (
  <>
    <LoginMain />
  </>
);

export default IndexPage;
