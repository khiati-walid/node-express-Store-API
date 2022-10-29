const getAllProductsStatic = async (req, res) => {
  res.status(200).json({ msg: "All products Static" });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "All products" });
};

module.exports = {
  getAllProductsStatic,
  getAllProducts,
};
