import MainTodoList from "../components/main-todo-list";
import { createLazyFileRoute } from "@tanstack/react-router";
import TabHeader from "@/components/ui/tab-header";
import HeroHeader from "@/components/ui/hero-header";

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
