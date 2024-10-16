import Header from "./Header";
import CartOvervie from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid-rows-[auto_1fr_auto]  grid h-screen ">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-y-scroll">
        <main className="mx-auto  max-w-3xl">
          <Outlet />
        </main>
      </div>
      <CartOvervie />
    </div>
  );
}

export default AppLayout;
