import React, {useMemo, useState, useReducer} from 'react';

import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Breadcrumb, Layout, Menu} from 'antd';

import Demo from "../components/Demo";

const {Header, Content, Footer, Sider} = Layout;

const menuList = [
        {
            key: "1",
            label: "菜单1",
            children: [
                {
                    key: "1-1",
                    label: "菜单1-1",
                },
                {
                    key: "1-2",
                    label: "菜单1-2",
                }
            ]
        },
    {
        key: "2",
        label: "菜单2",
        children: [
            {
                key: "2-1",
                label: "菜单2-1",
            },
            {
                key: "2-2",
                label: "菜单2-2",
            }
        ]
    }
]

const reduce = (state:any , action:any) => {
    switch (action.type) {
        case 'edit': {
            return [...action.payload]
        }
        default: {
            return [...state]
        }
    }
}

const MyLayout = () => {


    const [collapsed, setCollapsed] = useState(false);

    const [itemValue, setItemValue] = useState<string>('');

    const [path, setPath] = useState<string>('');

    const [MenuList, dispatch] = useReducer(reduce, menuList)

    const menuClick = (e: any) => {
        console.log(e);
        setItemValue(e.domEvent.target.innerHTML);
        setPath(e.keyPath);
    }

    const btnClick = (val: string) => {
        console.log(MenuList);
        const tmp = MenuList;
        tmp.map((item: any) => {
            if (item.key === path[1]) {
                return item.children.map((item2: any) => {
                    if (item2.key === path[0]) {
                        return item2.label = val;
                    }
                })
            }
        });
        console.log(tmp)
        dispatch({ type: 'edit', payload: tmp})
    }

    return (
        <div className={'layout'}>
            <Layout style={{minHeight: '100vh'}}>
                <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                    <div className="logo"/>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={MenuList as any} onClick={menuClick}/>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{padding: 0}}/>
                    <Content style={{margin: '0 16px'}}>
                        {/*<Breadcrumb style={{margin: '16px 0'}}>*/}
                        {/*    <Breadcrumb.Item>User</Breadcrumb.Item>*/}
                        {/*    <Breadcrumb.Item>Bill</Breadcrumb.Item>*/}
                        {/*</Breadcrumb>*/}
                        {/*<div className="site-layout-background" style={{padding: 24, minHeight: 360}}>*/}
                        {/*    Bill is a cat.*/}
                        {/*</div>*/}
                        <Demo label={itemValue} btnClick={btnClick} />
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        </div>
    );
};

export default MyLayout;