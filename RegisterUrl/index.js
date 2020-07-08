module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  if (req.body && req.body.url && req.body.vanity && req.body.submittedBy) {
    return {
      registration: JSON.stringify({
        id: req.body.vanity,
        url: req.body.url,
        submittedBy: req.body.submittedBy,
      }),
      res: {
        status: 204,
      },
    };
  } else {
    return {
      res: {
        status: 400,
        body:
          "Please pass a a request body containing a url, vanity url and a submitted by fields",
      },
    };
  }
};
