import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { IoApps } from "react-icons/io5";
import { CgGames } from "react-icons/cg";
import "./styles.scss";

const AppsGames = () => {
  return (
    <section className="appsgames" id="appsgames">
      <PageHeaderContent
        headerText="Apps & Games"
        icon={<IoApps size={40} />}
        icon1={<CgGames size={40} />}
      />
      <>
        <h1 style={{ textAlign: "center", padding: 20, fontSize: 50, fontWeight: 700, letterSpacing: 1.5, lineHeight: 1, textTransform: "capitalize", color: "var(--selected-theme-main-color)", position: "relative", flex: 1}}>Coming Soon</h1>
      </>
    </section>
  );
};

export default AppsGames;
