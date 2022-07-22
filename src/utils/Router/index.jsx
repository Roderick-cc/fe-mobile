import { Component, useState, useEffect } from 'react';
import { Modal } from '@/utils';
import { HashRouter as Router, Route, Control } from 'react-keeper';
import Home from '@/pages/Home';

import { Badge, TabBar } from 'antd-mobile'
import {

  UserSetOutline,
  TeamFill
} from 'antd-mobile-icons'


/**
 * @module 路由模块
 * 
 * @param routes 数组，包含所需要的每项
 * @param exact 是否完全匹配(默认完全匹配)
 * cache属性可以添加属性值，React-Keeper支持的属性值有root（default）、parent。
 * @param catch 页面缓存 支持两种形式 一种是root(默认)，这种为永久缓存，只要根组件不解绑，页面将永久缓存，另一种是parent为父组件缓存，在父组件不解绑的情况下会维持缓存状态
 * @param path 页面路径
 * @param title 页面标题
 * @param component 组件
 */
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: [],
      tabs: [
        {
          key: '/',
          title: '首页',
          icon: <TeamFill />,
        },
        {
          key: '/my',
          title: '我的',
          icon: <UserSetOutline />,
        },
      ],
      hideTab: false,
      activeKey: Control.path
    }
  }

  componentDidMount = () => {
    const { routes } = this.props;
    if (Object.keys(routes).length === 0) {
      Modal.alert('暂未配置路由, 请去配置')
      return;
    }
    console.log('routes', routes)
    let path = Control.path;
    this.setState({
      hideTab: !this.state.tabs.map(item => item.key).includes(path)
    })
  }

  changeTab(key) {
    let path = Control.path;
    this.setState({
      hideTab: !this.state.tabs.map(item => item.key).includes(path),
      activeKey: key
    })
    console.log('key222', key)
    Control.go(key);
  }


  render() {
    const { routes } = this.props;
    return (
      <Router>
        <div>
          {
            routes.map((item, index) => {
              return <Route
                key={index}
                index={item.index ? true : false}
                miss={item.miss ? true : false}
                path={item.path}
                cache={item.cache ? true : false}
                children={item.component}
                loadComponent={(callback) => {
                  if (item.title) {
                    document.title = item.title
                  }
                  callback(Home)
                }}
              >
              </Route>
            })
          }
          <div className='tarBar' style={{
            position: 'fixed',
            bottom: 0,
            zIndex: 999999999,
            width: '100%',
            height: '69px',
            background: '#FFFFFF',
            boxShadow: ' 0px -2px 18px 0px rgba(226,226,226,0.6100)',
            display: this.state.hideTab ? 'none' : 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}

          >
            <TabBar onChange={(key) => { this.changeTab(key) }} activeKey={this.state.activeKey}>
              {this.state.tabs.map(item => (
                <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
              ))}
            </TabBar>
          </div>
        </div>

      </Router>
    )
  }
}



export default Index
