const portfolioData = require("../data/portfolioData");

const getPortfolio = (req, res) => {
  res.status(200).json({
    success: true,
    data: portfolioData,
  });
};

module.exports = {
  getPortfolio,
};
