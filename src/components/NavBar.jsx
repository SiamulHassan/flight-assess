import { IoIosNotificationsOutline } from "react-icons/io";
import profile from "../../images/program61.png";
const NavBar = () => {
  return (
    <nav className="flex text-[#c5cac9] justify-between items-center">
      <ul className="flex gap-3">
        <li>Dashboard</li>
        <li>Master Price</li>
        <li>Custom Price</li>
        <li>Calendar</li>
        <li>Reports</li>
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
