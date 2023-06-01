import { Link } from 'react-router-dom'
import { MdExitToApp, MdDashboard, MdStore,
     MdLocalShipping, MdInsertChart, MdNotifications,
      MdPsychology, MdOutlineAppSettingsAlt, MdAccountCircle } from 'react-icons/md'
import { BsPersonFill } from 'react-icons/bs'
import { AiFillCreditCard, AiTwotoneSetting } from 'react-icons/ai'
function Sidebar() {
  return (
    <div className="border-r-2 border-white min-h-screen w-[300px] bg-white text-black">
      <div className="h-[50px] flex items-center justify-center">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="text-[20px] font-bold text-black">ckadmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul className='p-2 flex flex-col gap-1'>
          <p className="text-xl font-bold border-b-2 border-black">MAIN</p>
          <Link to="/admin" style={{ textDecoration: "none" }}>
            <li className='flex items-center gap-1 font-bold'>
            <MdDashboard className="icon" />
            <span>Dashboard</span>
            </li>
          </Link>
          <p className="text-xl font-bold border-b-2 border-black">LISTS</p>
          <Link to="/admin/users" style={{ textDecoration: "none" }}>
            <li className='flex items-center gap-1 font-bold'>
              <BsPersonFill className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li className='flex items-center gap-1 font-bold'>
              <MdStore className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <Link to="/admin/orders" style={{ textDecoration: "none" }}>
            <li className='flex items-center gap-1 font-bold'>
              <AiFillCreditCard className="icon" />
              <span>Orders</span>
            </li>
          </Link>
          <li className='flex items-center gap-1 font-bold'>
            <MdLocalShipping className="icon" />
            <span>Deliveiry</span>
          </li>
          <p className="text-xl font-bold border-b-2 border-black">USEFUL</p>
          <li className='flex items-center gap-1 font-bold'>
            <MdInsertChart className="icon" />
            <span>Stats</span>
          </li>
          <li className='flex items-center gap-1 font-bold'>
            <MdNotifications className="icon" />
            <span>Notifications</span>
          </li>
          <p className="text-xl font-bold border-b-2 border-black">SERVICE</p>
          <li className='flex items-center gap-1 font-bold'>
            <AiTwotoneSetting className="icon" />
            <span>System Health</span>
          </li>
          <li className='flex items-center gap-1 font-bold'>
            <MdPsychology className="icon" />
            <span>Logs</span>
          </li>
          <li className='flex items-center gap-1 font-bold'>
            <MdOutlineAppSettingsAlt className="icon" />
            <span>Settings</span>
          </li>
          <p className="text-xl font-bold border-b-2 border-black">USER</p>
          <li className='flex items-center gap-1 font-bold'>
            <MdAccountCircle className="icon" />
            <span>Profile</span>
          </li>
          <li className='flex items-center gap-1 font-bold'>
            <MdExitToApp className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar