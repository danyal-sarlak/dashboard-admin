import React from 'react'
import { MdVisibility } from "react-icons/md";
import './WidgetSm.css'
import { newMembers } from '../../datas';

export default function WidgetSm() {
  return (
    <div className='widgetSm'>
     <span className="widgetSmTitle">New Join Members</span>
     <ul className="widgetSmList">
      {newMembers.map(user=>(
        <li key={user.id} className='widgetSmListItem'>
        <img src={user.img}alt=""  className='widgetSmImg'/>
        <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
            <span className='widgetSmUserTitle'>{user.title}</span>
        </div>
        <button className='widgetSmButton'>
            <MdVisibility className='widgetSmIcon'/>
        </button>
        </li>

      ))}
        
     </ul>
    </div>
  )
}
