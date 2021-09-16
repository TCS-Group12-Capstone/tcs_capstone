let productModel = require("../model/product.model");

let getAllProductDetails = (request, response) => {
  productModel.find({}, (err, data) => {
    if (!err) {
      response.json(data);
    } else {
      response.json(err);
    }
  });
};

let getProductDetails = (request, response) => {
  let filter = request.body;

  productModel.find(
    { _id: { $in: filter } }, // find in the array of product ID
    (err, data) => {
      if (!err) {
        response.json(data);
      } else {
        response.json(err);
      }
    }
  );
};

let decreaseAmount = (request, response) => {
  let product = request.body;

  productModel.updateOne(
    { _id: product._id },
    { $inc: { quantity: -product.amount } },
    (result, error) => {
      if (!error) {
        response.json(result);
      } else {
        response.json(error);
      }
    }
  );
};

exports.getById = (req, res, next) => {
  const productId = req.query.productId;
  if (productId === undefined) {
    next(
      new TypeError(`Invalid productId. params: ${JSON.stringify(req.params)}`)
    );
    return;
  }

  const query = productModel.findById(productId);
  query
    .exec()
    .then((doc) => res.status(200).json(doc))
    .catch(next);
};

exports.getPriceById = (productId) => {
  return productModel
    .findById(productId)
    .then((doc) => (({ price }) => ({ price }))(doc));
};

exports.updateById = (req, res, next) => {
  let { productId, name, price, quantity } = req.body;

  const payload = [
    [name, "name"],
    [price, "price"],
    [quantity, "quantity"],
  ].reduce((obj, [newValue, key]) => {
    if (newValue !== undefined) {
      obj[key] = newValue;
    }
    return obj;
  }, {});
  const update = productModel.findByIdAndUpdate(productId, payload, {
    new: true,
  });
  update
    .exec()
    .then((doc) => res.status(200).json(doc))
    .catch(next);
};

exports.deleteById = (req, res, next) => {
  const { productId } = req.query;
  if (productId === undefined) {
    next(
      new TypeError(`Invalid productId. params: ${JSON.stringify(req.params)}`)
    );
    return;
  }

  const query = productModel.findByIdAndDelete(productId);
  query
    .exec()
    .then((doc) => res.status(200).json(doc))
    .catch(next);
};

module.exports = { getAllProductDetails, getProductDetails, decreaseAmount };
