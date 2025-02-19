import React, { useContext, useEffect } from "react";
import { RestyContext } from "../../context/restyContext";

/**
 * History function component
 * @description History is a functional component that returns an aside that contains the History
 */
function History() {
  const state = useContext(RestyContext);

  /**
   * useEffect function
   * @description useEffect comes from React and sets the state for history upon page rendering
   */

  useEffect(state => {
    try {
      let history = JSON.parse(localStorage.getItem("history"));
      if (history) state.saveHistory(history);
    } catch (e) {
      console.error(e);
    }
  });

  return (
    <aside>
      <h2>History</h2>
      <ul id="history">
        {state.history &&
          Object.keys(state.history).map(key => (
            <li key={key} id={key} onClick={state.resetFormFromHistory}>
              <span>
                <strong>{state.history[key].method}</strong>
              </span>
              <span>{state.history[key].host}</span>
              <span>{state.history[key].path}</span>
            </li>
          ))}
      </ul>
    </aside>
  );
}

export default History;
