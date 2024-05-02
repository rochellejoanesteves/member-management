"use client";
import React, { useEffect, useState } from "react";
import MemberTable from "./components/MemberTable";
import { memberList } from "./queries/membersListQueries";
import { GRAPHCMS_URL, GRAPHCMS_PERMANENTAUTH_TOKEN } from "./lib/constants";
import styles from "./page.module.css";

export default function Home() {
  const [userDetails, setUserDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(GRAPHCMS_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${GRAPHCMS_PERMANENTAUTH_TOKEN}`,
          },
          body: JSON.stringify({
            query: memberList,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user details");
        }

        const data = await response.json();
        setUserDetails(data?.data?.members ?? {});
      } catch (err) {
        console.error("Error during fetch:", err);
        setError("Failed to fetch user details. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main className={styles.main}>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div>
          <h1>Members</h1>
          <p>View your members here.</p>
          <MemberTable userDetails={userDetails} />
        </div>
      )}
    </main>
  );
}
