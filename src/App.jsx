import Card from "./component/Card";
import Layout from "./component/Layout";
import SideNav from "./component/SideNav";
import { IoArrowBack } from "react-icons/io5";

function App() {
  return (
    <>
      <div className="flex gap-10 p-8">
        <SideNav />
        <div className="py-6 h-[100vh] w-[100%]">
          <div className="flex justify-between mb-5">
            <div className="flex justify-center items-center gap-5">
              <IoArrowBack className="text-3xl text-gray-300" />
              <p className="text-[26px] hidden md:display text-gray-300">Groups</p>
            </div>
            <Layout />
          </div>
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
