import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$notebookUrl")({
  component: PostComponent,
});

function PostComponent() {
  const { notebookUrl } = Route.useParams();

  return <div>Notebook: {notebookUrl}</div>;
}
