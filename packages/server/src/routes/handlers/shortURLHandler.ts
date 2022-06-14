const ShortUniqueId = require("short-unique-id");

const createTinyUrl = (req: any, res: any) => {
  const shortID = new ShortUniqueId({ length: 6 })();
  res.status(200).json({ shortURL: shortID });
};

module.exports = {
  createTinyUrl,
};
