export const getResponse = (uri = '', method = '') =>
  fetch(uri, { method }).then(res => res.json());
