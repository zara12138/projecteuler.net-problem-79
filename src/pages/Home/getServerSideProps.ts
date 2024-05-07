import { GetServerSideProps, GetServerSidePropsResult } from "next";
import { getShortestPassword } from "./util";
import { data } from "./constant";

type Props = {
  data: any;
};

export const getServerSideProps: GetServerSideProps<Props> = async (): Promise<
  GetServerSidePropsResult<Props>
> => {
  const password = getShortestPassword(data);

  return {
    props: {
      data: password,
    },
  };
};
