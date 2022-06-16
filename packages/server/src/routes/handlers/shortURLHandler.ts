const ShortUniqueId = require("short-unique-id");
const Url = require("../../model/Url");

const createShortUrl = async (req: any, res: any) => {
  const { longURL } = req.body;
  const shortID = new ShortUniqueId({ length: 6 })();

  const urlData = new Url({
    shortURL: shortID,
    longURL,
    userID: "",
  });
  try {
    await urlData.save();
    res.status(200).json({ shortURL: shortID });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

const redirectToOriginalURL = async (req: any, res: any) => {
  const shortURL = req.params.shortURL;
  try {
    const url = await Url.findOne({shortURL});
    res.redirect(301, url.longURL);
  }catch(err: any) {
    res.status(400).json({ error: err.message });
  }
  
}

module.exports = {
  createShortUrl,
  redirectToOriginalURL
};
