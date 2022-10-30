const { urlHost } = require("../config/env.config");

const urlBase = `${urlHost}/api/v1/posts`;

const nextPage = (count, offset, limit) => {
  return count - offset >= limit
    ? `${urlBase}?offset=${offset + limit}&limit=${limit}`
    : null;
};

const prevPage = (offset, limit) => {
  return offset - limit >= 0
    ? `${urlBase}?offset=${offset - limit}&limit=${limit}`
    : null;
};

module.exports = { nextPage, prevPage };
