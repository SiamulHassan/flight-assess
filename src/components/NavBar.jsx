import { IoIosNotificationsOutline } from "react-icons/io";
import profile from "../../images/program61.png";
const NavBar = () => {
  return (
    <nav className="flex text-[#c5cac9] justify-between items-center">
      <ul className="flex gap-3">
        <li className="cursor-pointer">Dashboard</li>
        <li className="cursor-pointer">Master Price</li>
        <li className="cursor-pointer">Custom Price</li>
        <li className="cursor-pointer">Calendar</li>
        <li className="cursor-pointer">Reports</li>
      </ul>
      <div className="flex items-center gap-4">
        <IoIosNotificationsOutline fontSize={25} fill="#7a828f" />
        <div className="h-8 w-8 rounded-full overflow-hidden">
          <img className="w-full h-full" src={profile} alt="profile" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
