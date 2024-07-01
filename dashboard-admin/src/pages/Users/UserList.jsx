import React from 'react';
import { userRows } from '../../datas';
import './UserList.css';
import { Link } from 'react-router-dom';
import { AiOutlineDelete } from "react-icons/ai";

export default function UserList() {
  return (
    <div className="UserList">
      <table className="UserListTable">
        <thead>
          <tr className="UserTr">
            <th className="UserId">ID</th>
            <th className="UserData">USER</th>
            <th className="UserEmail">Email</th>
            <th className="UserStatus">Status</th>
            <th className="UserTh">Transaction</th>
            <th className="UserTh">Action</th>
          </tr>
        </thead>
        <tbody>
          {userRows.map(user => (
            <tr key={user.id} className="UserTr">
              <td className="UserNumber">{user.id}</td>
              <td className="UserDate">
                <img src={user.avatar} className='WidgetLgImg' alt={`${user.username}'s avatar`} />
                <span className='UserName'>{user.username}</span>
              </td>
              <td className="UserAmount">{user.email}</td>
              <td className="UserStatus">{user.status}</td>
              <td className="UserTransaction">{user.transaction}</td>
              <td className="UserAction">
                <button className='editbtn'>Edit</button>
                <AiOutlineDelete className='deletbtn'/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
