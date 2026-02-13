import {useState, useCallback, useEffect} from "react";
import { useSDK } from "@contentful/react-apps-toolkit";
import setUpCma from "../helpers/setup";
import getAllUsers from "../helpers/getAllUsers";

const Page = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [users, setUsers] = useState()

  const sdk = useSDK();
  const cma = setUpCma(sdk)

  const getUserData = useCallback(async () => {
    await getAllUsers(cma).then((data) => {
      setUsers(data);
    });
    setIsLoading(false);
  }, [cma]);

  useEffect(() => {
    if (isLoading) getUserData()
  }, [isLoading])

  console.log(users)

  return (
    <div></div>
  );
};

export default Page;
