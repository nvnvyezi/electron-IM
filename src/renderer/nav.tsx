import React from 'react'
import { Link } from 'react-router-dom'

interface Sidebar {
  data: Item[]
}
interface Item {
  name: string
  path: string
  icon: string
}

export default function Nav(props: Sidebar) {

  /* 渲染路由 */
  return (
    <ul className="nav">
      {props.data.map((item: Item) => (
        <nav key={item.name} className="nav-litem">
          <Link to={item.path}>
            <i
              className="nav-icon"
              style={{
                backgroundImage: `url(${item.icon})`
              }}/>
          </Link>
        </nav>
      ))}
      <style jsx>{`
        .nav {
          width: 60px;
          height: 100%;
        }
        .nav-icon {
          width: 45px;
          height: 45px;
          margin-left: 7.5px;
          display: inline-block;
          background-size: 50% 50%;
          background-repeat: no-repeat;
          background-position: 7.5px center;
          vertical-align: middle;
        }
      `}</style>
    </ul>
    
  )
}
