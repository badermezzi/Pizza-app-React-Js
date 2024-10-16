import { useSelector } from "react-redux";
import CreateUSer from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-16 px-4 text-center  ">
      <h1 className="mb-8 text-3xl font-semibold ">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === "" ? (
        <CreateUSer />
      ) : (
        <Button to="/menu" type="primary">
          continue ordering
        </Button>
      )}
    </div>
  );
}

export default Home;
