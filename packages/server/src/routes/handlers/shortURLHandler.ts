const createTinyUrl = (req: any, res: any) => {
  console.log(req.uuid);

  res.status(200).json({ foo: "bar" });
};

module.exports = {
  createTinyUrl,
};
