const getAllProducts = async (cma) => {
  const productData = await cma.contentType
    .getMany()
    .then((data) => data.items.filter((type) => type.sys.id == "product"));
  return productData;
};

export default getAllProducts;
