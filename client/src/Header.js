import React, { Component } from 'react'
import { HomeOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import {Link} from "react-router-dom"

const { SubMenu } = Menu;


export default class Header extends Component {
    render() {
        return (
            <div >                  
                <Menu                    
                    theme="dark"
                    mode="horizontal"
                    style={{ lineHeight: "6em" , width:"100%" }}  //textAlign:"left"// 
                >
                    <Link to="/"><HomeOutlined style={{marginRight:"1%" , fontSize:"2.5em" , color:'#FED45E'}}/></Link>
                    <SubMenu
                        key="sub1"
                        title={
                           
                            <span><b style={{fontSize:"1.3em"}}>Root Of Equations</b></span>
                        }  
                    > 
                        <Menu.Item key="1"><Link to="/Bisection"/>Bisection</Menu.Item>
                        <Menu.Item key="2"><Link to="/FalsePosition"/>False Position</Menu.Item>
                        <Menu.Item key="3"><Link to="/OnePoint"/>One Point</Menu.Item>
                        <Menu.Item key="4"><Link to="/NewtonRaphson"/>Newton Raphson</Menu.Item>
                        <Menu.Item key="5"><Link to="/Secant"/>Secant</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span><b style={{fontSize:"1.3em"}}>Linear Equations</b></span>
                        }
                    >
                        <Menu.Item key="1">Cholesky</Menu.Item>
                        <Menu.Item key="2">Cramer</Menu.Item>
                        <Menu.Item key="3">Gauss Elimination</Menu.Item>
                        <Menu.Item key="4">Gauss Jordan</Menu.Item>
                        <Menu.Item key="5">Gauss Seidel</Menu.Item>
                        <Menu.Item key="6">Inverse Matrix</Menu.Item>
                        <Menu.Item key="7">Jacobi</Menu.Item>
                        <Menu.Item key="8">LuDecom</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub3"
                        title={
                            <span><b style={{fontSize:"1.3em"}}>Iterpolation</b></span>
                        }
                    >
                        {/* <Menu.Item key="1">Diff1st</Menu.Item>
                        <Menu.Item key="2">Diff Backward</Menu.Item>
                        <Menu.Item key="3">Simpson1_3</Menu.Item>
                        <Menu.Item key="4">Simpson3_8</Menu.Item>
                        <Menu.Item key="5">Trapazoidal</Menu.Item>
                        <Menu.Item key="6">Composite Trapazoidal</Menu.Item> */}
                    </SubMenu>
                    <SubMenu
                        key="sub4"
                        title={
                            <span><b style={{fontSize:"1.3em"}}>Integration</b></span>
                        }
                    >
                        <Menu.Item key="1">Simpson1_3</Menu.Item>
                        <Menu.Item key="2">Simpson3_8</Menu.Item>
                        <Menu.Item key="3">Trapazoidal</Menu.Item>
                        <Menu.Item key="4">Composite Trapazoidal</Menu.Item>
                        {/* <Menu.Item key="1">Euler</Menu.Item>
                        <Menu.Item key="2">Heun</Menu.Item>
                        <Menu.Item key="3">Modified Euler</Menu.Item> */}
                    </SubMenu>
                    <SubMenu
                        key="sub5"
                        title={
                            <span><b style={{fontSize:"1.3em"}}>Diff</b></span>
                        }
                    >
                        {/* <Menu.Item key="1">NewtonDD</Menu.Item> */}
                    </SubMenu>
                </Menu>               
            </div>
        )
    }
}