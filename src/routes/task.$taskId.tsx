import { createFileRoute, useParams } from "@tanstack/react-router";

export const Route = createFileRoute("/task/$taskId")({
  component: Task,
});

function Task() {
  const params = useParams({ from: "/task/$taskId" });

  return <div>Hello Task {params.taskId}</div>;
}
