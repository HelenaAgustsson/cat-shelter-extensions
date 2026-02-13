import { createClient } from "contentful-management";

export const setUpCma = (sdk) => {
  const env = sdk.ids.environmentAlias ?? sdk.ids.environment;
  const spaceId = sdk.ids.space;
  const cma = createClient(
    { apiAdapter: sdk.cmaAdapter },
    {
      type: "plain",
      defaults: {
        environmentId: env,
        spaceId: spaceId,
      },
    },
  );
  return cma;
};

export default setUpCma;
