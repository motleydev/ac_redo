import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import client from "../lib/client";

import {
  useGetTweetsQuery,
  useGetUsersQuery,
  useLikeTweetMutation,
} from "../generated/graphql";

const Home: NextPage = () => {
  const { isSuccess, data, refetch } = useGetTweetsQuery(client, {});
  const { mutate } = useLikeTweetMutation(client, {
    onSuccess: () => {
      refetch();
    },
  });
  const response = useGetUsersQuery(client, {});

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {isSuccess &&
          data?.app_user.map((user, index) => {
            return (
              <div key={index}>
                <p>{user.username}</p>
                <ul>
                  {user.tweets.map((tweet, index) => {
                    return (
                      <li key={index}>
                        {tweet.content} {tweet.likes_aggregate.aggregate?.count}
                        <button
                          onClick={() => {
                            mutate({ id: tweet.id });
                          }}
                        >
                          {" "}
                          Like
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
      </main>
    </div>
  );
};

export default Home;
