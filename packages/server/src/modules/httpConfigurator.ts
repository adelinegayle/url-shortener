const onListening = (port: number) => {
  console.log(`Server is listening to port ${port}`);
};

module.exports.configure = (app: any, config: any) => {
  const port = process.env.PORT || config.get("http.port");
  const server = app.listen(port, onListening(port));

  return server;
};
