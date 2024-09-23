import { createFileRoute } from "@tanstack/react-router";

import { fetchNotebookByUrl } from "../utils";

export const Route = createFileRoute("/$notebookUrl")({
  loader: async ({ params: { notebookUrl } }) => fetchNotebookByUrl(notebookUrl),
  component: NotebookComponent,
  pendingComponent: LoadingComponent,
});

function NotebookComponent() {
  const notebook = Route.useLoaderData();

  return <pre>{JSON.stringify(notebook, null, 2)}</pre>;
}

function LoadingComponent() {
  return <p>Loading...</p>;
}
