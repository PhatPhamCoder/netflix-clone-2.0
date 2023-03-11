import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";

import useCurrentuser from "@/hooks/useCurrentUser";
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        parmanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  const { data: user } = useCurrentuser();

  return (
    <>
      <Navbar />
      <Billboard/>
    </>
  );
}
