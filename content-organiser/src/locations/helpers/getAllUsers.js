const getAllUsers = async (cma) => {
  const userData = await cma.user
    .getManyForSpace({
      query: {
        skip: 0,
        limit: 100,
      },
    })
    .catch((error) => console.error(error));
  const users = [];
  userData.items.forEach((item) => {
    users.push({
      name: item.firstName + " " + item.lastName,
      id: item.sys.id,
    });
  });
  return users;
};

export default getAllUsers;
