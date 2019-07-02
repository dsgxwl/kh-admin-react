import React, { Component, Fragment } from 'react'
import connect from 'connect'
import { Link, withRouter } from 'react-router-dom'
import { createAction } from 'redux-actions'
import './index.less'

@connect
@withRouter
class Nav extends Component {
  render() {
    const nav = ['考核目录', '加分项', '减分项', '降档项']
    const { changeNavActive } = this.props
    const { activeIndex } = this.props.state
    return (
      <Fragment>
        <ul className="nav">
          {
            nav.map((item,index)=>(
              <li onClick={()=>changeNavActive(index)} className={index==activeIndex?'navList active':'navList'} key={item+index}>
                <i>{item.substr(0, 1)}</i>
                <span>{item}</span>
              </li>
            ))
          }
        </ul>
      </Fragment>
    )
  }
}

export default Nav