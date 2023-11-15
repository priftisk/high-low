import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Fragment } from "react";

export default function Layout({}) {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  );
}
