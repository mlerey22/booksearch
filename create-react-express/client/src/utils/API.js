import axios from "axios";

// The getbooks method retrieves books from the server
// It accepts a "query" or term to search the book api for
export default {
  getbooks: function(query) {
    return axios.get("/api/books", { params: { q: query } });
  }
};
