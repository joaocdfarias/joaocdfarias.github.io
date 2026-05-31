import { Outlet } from "@tanstack/react-router";
import { Header } from "../components/Header";

export function AppLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
