import asyncComponent from './asyncComponent'



const _import_components = file => asyncComponent(() => import(`components/${file}`))

const _import_views = file => asyncComponent(() => import(`views/${file}`))

const setChildrenRoles = routes => routes.map(route => {
    let role = route.role
    if (!role) return route

    let fn = (children, role) => {
        return children.map(child => {
            child.role = Array.from(new Set([...(child.role || []), ...role]))
            if (child.children) {
                child.children = fn(child.children, child.role)
            }
            return child
        })
    }
    if (route.children) {
        route.children = fn(route.children, role)
    }
    return route
})


// react-router-config
const asyncRouterMapList = [
    {
        path: '/assessmentCatalog',
        login: true,
        layout: true,
        name: '考核目录',
        redirect: '/assessmentCatalog/index',
        children: [
            { path: '/assessmentCatalog/index', component: _import_views('assessmentCatalog/index'), name: '考核目录' },
        ]
    },
    {
        path: '/assessment',
        login: true,
        layout: true,
        name: '考核评价',
        redirect: '/assessment/index',
        children: [
            { path: '/assessment/index', component: _import_views('assessment/index'), name: '考核评价' },
        ]
    },
    {
        path: '/dataAnalysis',
        login: true,
        layout: true,
        name: '数据分析',
        redirect: '/dataAnalysis/index',
        children: [
            { path: '/dataAnalysis/index', component: _import_views('dataAnalysis/index'), name: '数据分析' },
        ]
    },
    {
        path: '/integratedQuery',
        login: true,
        layout: true,
        name: '综合查询',
        redirect: '/integratedQuery/index',
        children: [
            { path: '/integratedQuery/index', component: _import_views('integratedQuery/index'), name: '综合查询' },
        ]
    },
    {
        path: '/systemSettings',
        login: true,
        layout: true,
        icon: 'edit',
        name: '系统设置',
        redirect: '/systemSettings/index',
        children: [
            { path: '/systemSettings/index', component: _import_views('systemSettings/index'), name: '系统设置'},
        ]
    },

]

export const constantRouterMap = [
    {
        path: '/login',
        login: false,
        hidden: true,
        name: '账号登陆',
        component: _import_views('Login')
    },
    {
        path: '/',
        exact: true,
        login: true,
        layout: true,
        icon: 'user',
        name: '首页',
        component: _import_views('Home')
    }
]
export const asyncRouterMap = setChildrenRoles(asyncRouterMapList)
export const allRoutes = constantRouterMap.concat(asyncRouterMap)
export const routes = constantRouterMap

// export const asyncRouterMap 

