import React from 'react';
import './Sidebar.css';
import { IoMailOutline, IoAnalyticsOutline } from "react-icons/io5";
import { MdDynamicFeed, MdReport } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { RiStore2Line, RiBarChartFill } from "react-icons/ri";
import { PiCurrencyDollar, PiBagSimple } from "react-icons/pi";
import { AiOutlineHome } from "react-icons/ai";
import { FaArrowTrendUp } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarwrapper'>
        <div className='sidebarmenu'>
          <h3 className='sidebartitle'>Dashboard</h3>
          <ul className='sidebarlist'>
            <Link to="/" className='link'>
              <li className='sidebarlistitem active'>
                <AiOutlineHome className='sidebarIcon' />
                Home
              </li>
            </Link>
            <li className='sidebarlistitem'>
              <IoAnalyticsOutline className='sidebarIcon' />
              Analytics
            </li>
            <li className='sidebarlistitem'>
              <FaArrowTrendUp className='sidebarIcon' />
              Sales
            </li>
          </ul>
        </div>
        <div className='sidebarmenu'>
          <h3 className='sidebartitle'>Quick Menu</h3>
          <ul className='sidebarlist'>
            <Link to="/users" className='link'>
              <li className='sidebarlistitem'>
                <CiUser className='sidebarIcon' />
                Users
              </li>
            </Link>
            <Link to="/newUser" className='link'>
              <li className='sidebarlistitem'>
                <CiUser className='sidebarIcon' />
                New User
              </li>
            </Link>
            <Link to="/products" className='link'>
              <li className='sidebarlistitem'>
                <RiStore2Line className='sidebarIcon' />
                Products
              </li>
            </Link>
            <li className='sidebarlistitem'>
              <PiCurrencyDollar className='sidebarIcon' />
              Transactions
            </li>
            <li className='sidebarlistitem'>
              <RiBarChartFill className='sidebarIcon' />
              Reports
            </li>
          </ul>
        </div>
        <div className='sidebarmenu'>
          <h3 className='sidebartitle'>Notifications</h3>
          <ul className='sidebarlist'>
            <li className='sidebarlistitem'>
              <IoMailOutline className='sidebarIcon' />
              Mail
            </li>
            <li className='sidebarlistitem'>
              <MdDynamicFeed className='sidebarIcon' />
              Feedback
            </li>
            <li className='sidebarlistitem'>
              <FiMessageSquare className='sidebarIcon' />
              Messages
            </li>
          </ul>
        </div>
        <div className='sidebarmenu'>
          <h3 className='sidebartitle'>Staff</h3>
          <ul className='sidebarlist'>
            <li className='sidebarlistitem'>
              <PiBagSimple className='sidebarIcon' />
              Manage
            </li>
            <li className='sidebarlistitem'>
              <IoAnalyticsOutline className='sidebarIcon' />
              Analytics
            </li>
            <li className='sidebarlistitem'>
              <MdReport className='sidebarIcon' />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
