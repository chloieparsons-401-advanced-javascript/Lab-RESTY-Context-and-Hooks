# The JSON Component

### The JSON functional component handles the JSON view of the application. See below:

```
<JSON />
```

```
import React, { useContext } from "react";
import ReactJson from "react-json-view";
import { RestyContext } from "../../context/restyContext";

/**
 * JSON function
 * @description JSON functional component renders the JSON view
 */

function JSON() {
  const state = useContext(RestyContext);
  return (
    <div id="json">
      <ReactJson
        name="Headers"
        enableClipboard={false}
        collapsed={true}
        src={state.header}
      />
      <ReactJson
        name="Response"
        enableClipboard={false}
        collapsed={false}
        src={state.body}
      />
    </div>
  );
}

export default JSON;

```
