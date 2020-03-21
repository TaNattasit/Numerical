import React, { Component } from 'react'
import { AntDesignOutlined, ReadOutlined } from '@ant-design/icons';

export default class Footer extends Component {
    render() {
        return (
            <div >
                    <div style={{backgroundColor:"#201010"}}>
                        <div style={{color:"#ffffff",textAlign:"center"}}>
                            <p style={{fontSize:"2em",marginTop:"10%"}}>NUMERICAL METHODS</p>
                            <h3 style={{color:"#ffff"}}>จัดทำโดย</h3><br/>
                            <p style={{color:"#ffff" , fontSize:"1.5em"}}>นาย ณัฐสิทธิ์   ถาดกิ่ง   59-040626-3613-4    section  1</p>
                            <AntDesignOutlined style={{ fontSize: "3em" , marginRight:"1%"}} />
                            <ReadOutlined style={{ fontSize: "3em" , marginLeft:"1%"}} />
                        </div>
                    </div>
            </div>
        )
    }
}
