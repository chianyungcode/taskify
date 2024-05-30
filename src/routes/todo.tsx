import TabHeader from "../components/ui/tab-header";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/todo")({
  component: Todo,
});

function Todo() {
  return (
    <main>
      <div className="max-w-[1440px] mx-auto">
        <div
          id="container"
          className="max-w-screen-xl px-8 mx-auto space-y-4 text-black"
        >
          Hallo dari Todo
          <TabHeader />
        </div>
      </div>
    </main>
  );
}
