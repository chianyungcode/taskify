import MainTodoList from "../components/main-todo-list";
import HeroHeader from "../components/ui/hero-header";
import TabHeader from "../components/ui/tab-header";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="max-w-[1440px] mx-auto">
      <div id="container" className="max-w-screen-xl px-8 mx-auto space-y-4">
        <HeroHeader />
        <TabHeader />
        <MainTodoList />
      </div>
    </main>
  );
}
