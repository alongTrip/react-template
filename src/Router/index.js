// 定义react项目的路由
import { HashRouter, Route, Switch } from 'react-router-dom'

// 引入路由组件
import homePage from '../Views/homePage'

const routes = [{
	// 落地页
	path: '/',
	component: homePage
}]

const rootRoute = (
	<HashRouter>
		<Switch>
			{routes.forEach((route, index) => { // 循环生成路由结构
				<Route exact path={route.path} component={route.component} />
			})}				
		</Switch>
	</HashRouter>
)

export default rootRoute;