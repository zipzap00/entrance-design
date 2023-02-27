import Entrance from "./Entrance";
import Logo from "./Logo"

const AppHeader = () => {
  return (
    <div className="px-7 bg-slate-600 h-20">
      <div className="flex flex-row justify-between">
        <Logo/>
        <Entrance/>
      </div>
    </div>
  );
}

export default AppHeader;