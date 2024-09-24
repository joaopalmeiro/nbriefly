import { classHighlighter, highlightCode } from "@lezer/highlight";
import { parser } from "@lezer/python";
import { createFileRoute } from "@tanstack/react-router";

import { fetchNotebookByUrl } from "../utils";

export const Route = createFileRoute("/$notebookUrl")({
  loader: async ({ params: { notebookUrl } }) => fetchNotebookByUrl(notebookUrl),
  component: NotebookComponent,
  pendingComponent: LoadingComponent,
});

function generateCodeBlock(code: string): string {
  let codeBlock = "";

  highlightCode(
    code,
    parser.parse(code),
    classHighlighter,
    (code, classes) => {
      codeBlock += code === " " ? " " : `<span class="${classes}">${code}</span>`;
    },
    () => {
      codeBlock += "\n";
    },
  );

  return codeBlock;
}

function NotebookComponent() {
  const notebook = Route.useLoaderData();
  const codeBlock = generateCodeBlock(notebook.cells[3].source.join(""));

  return (
    <pre>
      <code dangerouslySetInnerHTML={{ __html: codeBlock }} />
    </pre>
  );
}

function LoadingComponent() {
  return <p>Loading...</p>;
}
