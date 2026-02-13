const getAllUsers = async (cma) => {
  const userData = await cma.user
    .getManyForSpace({
      query: {
        skip: 0,
        limit: 100,
      },
    })
    .catch((error) => console.error(error));
  return userData;
};

export default getAllUsers;
