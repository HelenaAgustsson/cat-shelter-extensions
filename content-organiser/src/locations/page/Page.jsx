import {useState, useCallback, useEffect} from "react";
import { useSDK } from "@contentful/react-apps-toolkit";
import setUpCma from "../helpers/setup";
import getAllUsers from "../helpers/getAllUsers";
import getAllProducts from "../helpers/getAllProducts";
import { Stack, Heading } from "@contentful/f36-components";
import ContentTable from "./ContentTable";

const Page = () => {
  const [isLoadingUsers, setIsLoadingUsers] = useState(true)
  const [users, setUsers] = useState()
  const [isLoadingProducts, setIsLoadingProducts] = useState(true)
  const [products, setProducts] = useState([])

  const sdk = useSDK();
  const cma = setUpCma(sdk)

  const getUserData = useCallback(async () => {
    await getAllUsers(cma).then((data) => {
      setUsers(data);
    });
    setIsLoadingUsers(false);
  }, [cma]);

  const getProductData = useCallback(async () => {
    await getAllProducts(cma).then((data) => {
      setProducts(data);
    });
    setIsLoadingProducts(false);
  }, [cma]);

  useEffect(() => {
    if (isLoadingUsers) getUserData()
  }, [isLoadingUsers])

  useEffect(() => {
    if (isLoadingProducts) getProductData()
  }, [isLoadingProducts])

  return (
    <Stack justifyContent="center" flexDirection="column" margin="spacing2Xl">
      <Heading>Content Organiser</Heading>
      <ContentTable products={products} />
    </Stack>
  );
};

export default Page;
