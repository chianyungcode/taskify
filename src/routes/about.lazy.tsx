import { createLazyFileRoute } from "@tanstack/react-router";

const About = () => {
  return <div className="p-2">Hello from about!</div>;
};

export const Route = createLazyFileRoute("/about")({
  component: About,
});
