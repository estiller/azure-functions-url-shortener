module.exports = async function (context, req) {
  context.log("Url registration triggered");

  if (req.body && req.body.url && req.body.vanity && req.body.submittedBy) {
    return {
      registration: {
        id: req.body.vanity,
        url: req.body.url,
        submittedBy: req.body.submittedBy,
      },
      res: {
        status: 204,
      },
    };
  }

  return {
    res: {
      status: 400,
      body:
        "Please pass a a request body containing a url, vanity url and a submitted by fields",
    },
  };
};
