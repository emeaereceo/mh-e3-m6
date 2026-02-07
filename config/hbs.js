const path = require("path");
const hbs = require("hbs");

module.exports = () => {
  hbs.registerPartials(path.join(__dirname, "../views/partials"));

  hbs.registerHelper("priorityClass", function (priority) {
    if (priority === "alta") {
      return "priority-high";
    } else if (priority === "media") {
      return "priority-medium";
    } else {
      return "priority-low";
    }
  });
};
