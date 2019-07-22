# The Form Component

### The Form functional component uses context and hooks. It contains the radio buttons for Get, Post, Put, Patch, Delete, and the 'Get' submit button. It also contains the URL input box and the text area. See below:

```
<Form />
```

```
import React, { useContext } from "react";
import Headers from "../headers";
import { RestyContext } from "../../context/restyContext";

/**
 * Form function component
 * @description Form function returns a form with rdaio buttions and a submit button, an url input box, and a text area
 */

function Form() {
  const state = useContext(RestyContext);

  return (
    <form onSubmit={state.callAPI}>
      <section>
        <input
          type="text"
          className="wide"
          name="url"
          placeholder="URL"
          value={state.url}
          onChange={state.handleChange}
        />

        <div id="methods">
          <label>
            <input
              type="radio"
              name="method"
              checked={state.method === "get" ? true : false}
              value="get"
              onChange={state.handleChange}
            />
            <span>GET</span>
          </label>
          <label>
            <input
              type="radio"
              name="method"
              checked={state.method === "post" ? true : false}
              value="post"
              onChange={state.handleChange}
            />
            <span>POST</span>
          </label>
          <label>
            <input
              type="radio"
              name="method"
              checked={state.method === "put" ? true : false}
              value="put"
              onChange={state.handleChange}
            />
            <span>PUT</span>
          </label>
          <label>
            <input
              type="radio"
              name="method"
              checked={state.method === "patch" ? true : false}
              value="patch"
              onChange={state.handleChange}
            />
            <span>PATCH</span>
          </label>
          <label>
            <input
              type="radio"
              name="method"
              checked={state.method === "delete" ? true : false}
              value="delete"
              onChange={state.handleChange}
            />
            <span>DELETE</span>
          </label>
          <label>
            <button type="submit">Go!</button>
          </label>
        </div>
      </section>

      <section className="deck col-2">
        <div id="body">
          <textarea
            placeholder="Raw JSON Body"
            name="requestBody"
            onChange={state.handleChange}
            value={state.requestBody}
            disabled={state.method.match(/get|delete/) ? true : false}
          />
        </div>

        <Headers />
      </section>
    </form>
  );
}

export default Form;
```
