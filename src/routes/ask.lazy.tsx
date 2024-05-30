import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/ask")({
  component: Ask,
});

function Ask() {
  return <div>Ask</div>;
}
