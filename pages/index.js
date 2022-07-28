import Head from "next/head";
import Image from "next/image";
import Counter from "../components/counter";
import { getAdsAsync } from "../redux/Slices/getAdsSlice";
import { wrapper } from "../redux/store";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Counter></Counter>
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, page }) => {
      await store.dispatch(getAdsAsync(req, 1));
      // console.log(req);
    }
);
