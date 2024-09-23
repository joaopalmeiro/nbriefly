import { z } from "zod";

const CodeCell = z.object({
  cell_type: z.literal("code"),
  source: z.array(z.string()),
});

const MarkdownCell = z.object({
  cell_type: z.literal("markdown"),
  source: z.array(z.string()),
});

const Cell = z.union([CodeCell, MarkdownCell]);

export const NotebookSchema = z.object({
  cells: z.array(Cell),
});

export type Notebook = z.infer<typeof NotebookSchema>;
