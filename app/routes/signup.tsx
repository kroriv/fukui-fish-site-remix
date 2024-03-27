import { Outlet } from "@remix-run/react";
import { SubHeader } from "~/components/shared/Header";

export default function Layout() {
  // Render
  return (
    <>
      <Outlet/>
    </>
  );
}