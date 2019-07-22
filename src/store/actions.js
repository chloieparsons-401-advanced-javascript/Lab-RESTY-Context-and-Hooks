import superagent from "superagent";

/**
 * getRemote function handles getters and setters
 * @param {object} payload
 * @description getRemote handles getters and setters and their payload
 */

export const getRemote = payload => dispatch => {
  return superagent
    .get(payload.url)
    .then(data => {
      let record = data.body.results;
      let model = payload.model;
      dispatch(get({ model, record }));
    })
    .catch(e => {
      console.error(e);
    });
};

/**
 * function handles type GET
 * @param {object} payload
 * @description handles GET events and their payload
 */

export const get = payload => {
  return {
    type: "GET",
    payload: payload
  };
};

/**
 * postRemote function handles type POST
 * @param {object} payload
 * @description handles POST events and their payload
 */

export const postRemote = payload => dispatch => {
  return superagent
    .post(payload.url)
    .send(payload.record)
    .then(data => {
      let record = data.body;
      let id = data.body.id;
      let model = payload.model;
      dispatch(post({ id, model, record }));
    })
    .catch(e => {
      console.error(e);
    });
};

/**
 * function handles type POST
 * @param {object} payload
 * @description handles POST events and their payload
 */

export const post = payload => {
  return {
    type: "POST",
    payload: payload
  };
};

/**
 * putRemote function handles type PUT
 * @param {object} payload
 * @description handles PUT events and their payload
 */
export const putRemote = payload => dispatch => {
  return superagent
    .put(payload.url)
    .send(payload.record)
    .then(data => {
      let record = data.body;
      let id = payload.id;
      let model = payload.model;
      dispatch(put({ id, model, record }));
    })
    .catch(e => {
      console.error(e);
    });
};

/**
 * function handles type PUT
 * @param {object} payload
 * @description handles PUT events and their payload
 */
export const put = payload => {
  return {
    type: "PUT",
    payload: payload
  };
};

/**
 * deleteRemote function handles type DELETE
 * @param {object} payload
 * @description handles DELETE events and their payload
 */
export const deleteRemote = payload => dispatch => {
  return superagent
    .delete(payload.url)
    .then(data => {
      let id = payload.id;
      let model = payload.model;
      dispatch(destroy({ id, model }));
    })
    .catch(e => {
      console.error(e);
    });
};

/**
 * deleteRemote function handles type DELETE
 * @param {object} payload
 * @description handles DELETE events and their payload
 */
export const destroy = payload => {
  return {
    type: "DELETE",
    payload: payload
  };
};
