import HeroHeaderV2 from "@/components/ui/hero-header-v2";
import MainTodoList from "../components/main-todo-list";
import { createLazyFileRoute } from "@tanstack/react-router";
import TabHeaderV2 from "@/components/ui/tab-header-v2";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="max-w-[1440px] mx-auto">
      <div id="container" className="max-w-screen-xl px-8 mx-auto space-y-4">
        <HeroHeaderV2 />
        <TabHeaderV2 />
        <MainTodoList />
      </div>
    </main>
  );
}
