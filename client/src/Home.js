import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Carousel } from 'antd';
import {Link} from "react-router-dom"

export default class Home extends Component{
    render() {
        return(
            <div>
                <Header/>
                <Carousel autoplay style={{marginTop:"5%" , marginRight:"10%" , marginLeft:"10%"}}>
                    <div>
                        <img src="./images/home-office.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div>
                        <img src="./images/1.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div>
                        <img src="./images/coffee-1284041.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div>
                        <img src="./images/2.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div>
                        <img src="./images/coffee-2242213.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div>
                        <img src="./images/roll-the-dice.jpg" className="d-block w-100" alt="..."/>
                    </div>                    
                </Carousel>
                <br/>
                <div className="container" style={{marginTop:"5%",marginBottom:"5%",width:"80%"}}>
                    <hr/>
                </div>
                <section>
                    <b style={{textAlign:"center" , fontSize:50}}>Numerical Method</b>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12" style={{marginTop:"5%"}}>
                                <div className="card" style={{width:"100%" , height:"50em" , marginBottom:"5%" , backgroundColor:"#F8E637"}}>
                                    <img src="./images/formula.png" className="card-img-top" alt="..." style={{ width:"30%" , marginLeft:"36%" , marginTop:"10%" }}/>
                                    <div className="card-body">
                                        <p className="card-text">
                                            <h5><b>Root Of Equations</b></h5><hr/>
                                            <Link to="/Bisection"><b style={{color:'black' , fontSize:15}}>Bisection</b></Link><hr/>
                                            <Link to="/FalsePositon"><b style={{color:'black' , fontSize:15}}>False-Position</b></Link><hr/>
                                            <Link to="/OnePoint"><b style={{color:'black' , fontSize:15}}>One-Point Iteration</b></Link><hr/>
                                            <Link to="/NewtonRaphson"><b style={{color:'black' , fontSize:15}}>NewtonRaphson</b></Link><hr/>
                                            <Link to="/Secant"><b style={{color:'black' , fontSize:15}}>Secant</b></Link><hr/>                                          
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12" style={{marginTop:"5%"}}>
                                <div className="card" style={{width:"100%" , height:"50em" , marginBottom:"5%", marginBottom:"5%" , backgroundColor:"#F8E637"}}>
                                    <img src="./images/locator.png" className="card-img-top" alt="..." style={{ width:"30%" , marginLeft:"36%" , marginTop:"10%" }}/>
                                    <div className="card-body">
                                        <p className="card-text">
                                            <h5><b>Linear Equations</b></h5><hr/>
                                            <p>Cholesky</p><hr/>
                                            <p>Cramer</p><hr/>
                                            <p>Gauss Elimination</p><hr/>
                                            <p>Gauss Jordan</p><hr/>
                                            <p>Gauss Seidel</p><hr/>
                                            <p>Ineverse Matrix</p><hr/>
                                            <p>Jacobi</p><hr/>
                                            <p>LUDecom</p><hr/>                                           
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12" style={{marginTop:"5%"}}>
                                <div className="card" style={{width:"100%" , height:"50em" , marginBottom:"5%" , backgroundColor:"#F8E637"}}>
                                    <img src="./images/integral-mathematical-sign.png" className="card-img-top" alt="..." style={{ width:"30%" , marginLeft:"36%" , marginTop:"10%" }}/>
                                    <div className="card-body">
                                        <p className="card-text">
                                            <h5 style={{color:"white"}}>Integration</h5>
                                        </p>
                                    </div>
                                </div>
                            </div>                          
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        )
    }
}