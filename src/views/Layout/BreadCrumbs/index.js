import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import './index.less'
import connect from 'connect'
import Item from 'antd/lib/list/Item';


@withRouter
@connect
class BreadCrumbs extends React.Component {
    render() {
        let { routes } = this.props.state;
        console.log(this.props.state,99)
        return (
            <div class="sideBar">
                {routes.filter(e=>e.login==true).map((el, index) =>
                    <Link class="item" key={index} to={el.path} >{el.name} </Link>
                )}
            </div>
        )
    }
}


export default BreadCrumbs