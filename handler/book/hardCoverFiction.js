const { bookApi } = require("../api");

module.exports = async (req, res) => {
  try {
    const date = req.query.date || "current";
    const search = req.query.search;

    const { data: resData } = await bookApi.get(
      `/${date}/hardcover-fiction.json`
    );

    let listName = resData.results.list_name;
    let total = resData.num_results;
    let books = resData.results.books;

    books = books.map((val) => {
      return {
        rank: val.rank,
        title: val.title,
        description: val.description,
        author: val.author,
        contributor: val.contributor,
        image: val.book_image,
        book_uri: val.book_uri,
        price: val.price,
      };
    });

    if (search) {
      books = books.filter((val) => {
        if (val.title.toLowerCase().includes(search.toLowerCase())) {
          return val;
        }
      });
      total = books.length;
    }

    return res.json({
      status: "success",
      data: {
        listName,
        total,
        books,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
