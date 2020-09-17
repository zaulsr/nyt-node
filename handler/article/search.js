const { articleApi } = require("../api");

module.exports = async (req, res) => {
  try {
    const q = req.query.search.split(" ").join("+");
    const page = req.query.page;
    const sort = req.query.sort;

    const response = await articleApi.get("/", {
      params: {
        q,
        sort,
        page,
      },
    });

    let data = response.data.response.docs;

    data = data.map((val) => {
      const result = {
        ...val,
        multimedia: val.multimedia.map((m) => ({
          type: m.type,
          url: m.url,
          height: m.height,
          width: m.width,
        })),
      };
      delete result.keywords;
      delete result.byline;
      delete result.headline;

      return result;
    });

    return res.json({
      status: "success",
      data,
      meta: response.data.response.meta,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
