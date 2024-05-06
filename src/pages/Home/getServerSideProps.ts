import { GetServerSideProps, GetServerSidePropsResult } from "next";
import { getShortestPassword, readFileIntoArray } from "./util";

type Props = {
  data: any;
};

export const getServerSideProps: GetServerSideProps<Props> = async (): Promise<
  GetServerSidePropsResult<Props>
> => {
  const array: string[] = await readFileIntoArray("src/resources/0079_keylog.txt");

  const data = getShortestPassword(array);
  console.log(data)
  return {
    props: { data },
  };
};
