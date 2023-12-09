import { TbLayoutList } from "react-icons/tb";
import { LuLayoutGrid } from "react-icons/lu";

function Layout() {
  return (
    <div className="flex rounded-lg border-solid border-[1px] border-slate-900 overflow-hidden">
        <LuLayoutGrid className="text-gray-300 text-4xl p-2 bg-slate-900" />
        <TbLayoutList className="text-gray-300 text-4xl p-2 bg-slate-800" />
        
    </div>
  )
}

export default Layout