module.exports = {
  mongodbMemoryServerOptions: {
    instance: {
      dbName: "barsfashion1",
    },
    binary: {
      version: "latest",
      skipMD5: true,
    },
    autoStart: false,
  },
};
