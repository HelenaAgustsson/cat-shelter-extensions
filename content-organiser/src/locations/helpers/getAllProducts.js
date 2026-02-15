const getAllProducts = async (cma) => {
  const productData = await cma.entry
    .getMany({
      query: {
        skip: 0,
        limit: 100,
        "sys.contentType.sys.id[in]": "product",
        "sys.archivedAt[exists]": false,
        "sys.publishedAt[exists]": true,
        order: "-sys.updatedAt",
      },
    })
    .catch((error) => console.error(error));

  const products = [];
  productData.items.forEach((item) => {
    products.push({
      id: item.sys.id,
      publishedBy: item.sys.id,
      title: item.fields.title["en-US"],
      slug: item.fields.slug["en-US"],
    });
  });

  return products;
};

export default getAllProducts;
