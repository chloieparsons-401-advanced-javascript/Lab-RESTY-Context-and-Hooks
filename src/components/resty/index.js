import "./resty.css";

import React from "react";

import History from "../history";
import Form from "../form";
import Json from "../json";

/**
 * RESTy function
 * @description RESTy function returns most of the components to app for rendering
 */

function RESTy() {
  return (
    <main>
      <History />
      <section className="deck">
        <Form />
        <Json />
      </section>
    </main>
  );
}

export default RESTy;
