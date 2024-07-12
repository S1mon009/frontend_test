import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

const RootLayout = () => {
  const [showName, setShowName] = useState(false);

  function handleShowName() {
    setShowName(!showName);
  }

  return (
    <>
      <Header showName={showName} />
      <Outlet />
      <Footer handleShowName={handleShowName} />
    </>
  );
};

export default RootLayout;
