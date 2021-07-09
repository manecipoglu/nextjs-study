import MainHeader from "./MainHeader.jsx";

export default function Layout(props) {
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
}
