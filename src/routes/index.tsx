import { Link, createFileRoute } from "@tanstack/react-router";
import type { FormEvent } from "react";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(event.target);
  }

  return (
    <>
      <header>
        <h1>nbriefly</h1>
        <h2>Preview Jupyter notebooks hosted in repos.</h2>
      </header>

      <main>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="url">Notebook</label>
            <input
              type="url"
              id="url"
              name="url"
              placeholder="https://example.com"
              pattern="https://.*"
              required={true}
            />
          </div>

          <button type="submit">Preview</button>
        </form>

        <Link
          to="/$notebookUrl"
          params={{
            notebookUrl:
              "https://raw.githubusercontent.com/altair-viz/altair_notebooks/refs/heads/master/notebooks/03-ScatterCharts.ipynb",
          }}
        >
          Altair
        </Link>
      </main>
    </>
  );
}
