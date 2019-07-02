import React from 'react'
import BreadCrumbs from './BreadCrumbs'
import TabViews from './TabViews'
import Account from './Account'
import './index.less'
import connect from 'connect'
@connect
export default class extends React.Component {
    render() {
        const { children, state, history } = this.props
        return (
            <div>
                <div id="container" className={state.collapsed ? 'collapsed' : ''}>
                    <header className="layout-header">
                        <div className="layout-header-bar">
                            <div class="left">
                                <div class="logo">logo</div>
                                <BreadCrumbs className='breadCrumbs' />
                            </div>
                            <div class="end">
                                <Account />
                            </div>
                        </div>
                        <div className="layout-header-tabs">
                            <div class="goBack" onClick={()=>this.props.history.goBack()}>返回</div>
                            <TabViews />
                        </div>
                    </header>
                    <main>
                        {children}
                    </main>
                </div>
            </div>
        )
    }
}

