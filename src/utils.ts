import { NotebookSchema } from "./schemas";
import type { Notebook } from "./schemas";

export async function fetchNotebookByUrl(url: string): Promise<Notebook> {
  const response = await fetch(url);
  const data = await response.json();

  return NotebookSchema.parse(data);
}
