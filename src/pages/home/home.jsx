import { useLoaderData } from "react-router-dom";
import Main from "../../components/main/main";

const Home = () => {
  const data = useLoaderData();

  return <Main data={data} />;
};

export default Home;
