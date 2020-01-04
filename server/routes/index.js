const skillRoute = require("@skill/routes");

module.exports = app => {
  app.route("/").get((req, res) => {
    res.json({
      status: 404,
      message: "no route and no API found with those values"
    });
  });

  skillRoute(app);
};
