module.exports = async function (context, req, registration) {
  context.log("Url redirect triggered");

  if (registration) {
    return {
      res: {
        status: 302,
        headers: {
          Location: registration.url,
        },
      },
    };
  }

  return { res: { status: 404 } };
};
