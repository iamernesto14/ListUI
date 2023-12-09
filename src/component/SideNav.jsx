import { IoSettingsOutline } from "react-icons/io5";
import { TbMessage } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
import { TbApple } from "react-icons/tb";

function SideNav() {
  return (
    <div className="w-[88px] bg-slate-900 h-[100vh] flex justify-center items-center rounded-2xl">
      <div className="flex flex-col gap-5">
        <TbMessage className="text-5xl text-gray-300 hover:bg-slate-800 rounded-md p-2" />
        <GoPeople className="text-5xl text-gray-300 hover:bg-slate-800 rounded-md p-2" />
        <TbApple className="text-5xl text-gray-300 hover:bg-slate-800 rounded-md p-2" />
        <IoSettingsOutline className="text-5xl text-gray-300 hover:bg-slate-800 rounded-md p-2" />
      </div>
    </div>
  );
}

export default SideNav;
