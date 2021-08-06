import MainHeader from "./MainHeader.jsx";
import MainFooter from "./MainFooter.jsx";

export default function Layout(props) {
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
      <MainFooter />
    </>
  );
}
