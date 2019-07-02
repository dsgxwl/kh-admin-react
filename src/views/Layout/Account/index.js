import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {Menu, Dropdown} from 'antd'
import connect from 'connect'
import './index.less'
import { Cookie } from 'utils/storage'
const Item = Menu.Item
const menu = (user = {}, history, clearUser) => (
    <Menu>
        <Item>{user && user.userName}</Item>
        <Item>操作123</Item>
        <Item><span onClick={e => {
            Cookie.remove('Auth_Token')
            clearUser()
            history.push('/login')
        }}>退出</span></Item>
    </Menu>
)
@connect
@withRouter
export default class Account extends React.Component {
    render () {
        return (
            <div className="account_wrapper">
                <Dropdown overlay={menu(this.props.state.user, this.props.history, this.props.clearUser)} placement="bottomLeft">
                    <div className="avatar bg-cover-all"></div> 
                </Dropdown>
            </div>
        )
    }
}