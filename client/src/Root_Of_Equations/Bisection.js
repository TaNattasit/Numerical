import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Cascader , Input, Button ,Table , Switch ,Alert } from 'antd';
import { parse } from 'mathjs';
import axios from 'axios';


export default class Bisection extends Component
{
  constructor(props)
    {
        super(props);
        this.state={
            options:[],
            Eq:null,
            xrValue:null,
            xlValue:null,
            result:null,
            dataTable:[],
            SwitchOpen:false
        }       
    }

    componentDidMount()
    {
        axios.get('http://localhost:8080/show_Bisection.php')//Docker//
        // axios.get('http://localhost/NumericalProject/server/show_Bisection.php')
        .then(res=>{
            console.log(res.data);
            let optionsArr = [];
            
            res.data.map(dataMap=>{
                let optionsObj = {};
                if(dataMap.EQ_Type === "Bisection")
                {
                    optionsObj.value = dataMap.EQ_Name;
                    optionsObj.label = dataMap.EQ_Name;
                    optionsArr.push(optionsObj);
                    console.log(optionsObj);
                }
                
            })
            this.setState({
                options:optionsArr
            })
        })
        .catch(err=>{
          throw err;
        })
    }

    Equet = (EqForSloveFuntion,xvalueforSlove)=>{
      const NodeEqua = parse(EqForSloveFuntion); 
      const Equa = NodeEqua.compile();
      let scope = {
        x:xvalueforSlove
      }
      return Equa.eval(scope);      
    }
  
  err = (xmold, xmnew)=>{
      var er = ((Math.abs((xmnew - xmold) / xmnew)) * 100) / 100;
      return er;
  }
  
  getValue = ()=>{
  
    const {Eq,xlValue,xrValue} = this.state;    
    var xl = parseFloat(xlValue);
    var xr = parseFloat(xrValue);
    let tableArrData = [];
    console.log(Eq,xl,xr);
    var xm = (xl + xr) / 2;
    console.log(this.state);
    var xmArr = new Array();
    var fxmArr = new Array();
    var xmoldinmain = xm;
    xmArr[0] = xm;
    var fxl;
    var fxr;
    var fxm;
    var i = 0;
    var fixvalueerror = 0.00001;
    var errorvalue = 1;
    while (errorvalue >= fixvalueerror) {
        fxl = this.Equet(Eq,xl);
        fxr = this.Equet(Eq,xr);
        if (i != 0) {
          
          xm = (xl + xr) / 2;
        }
        fxm = this.Equet(Eq,xm);
        if ((fxm * fxl) > 0) {
          xl=xm    
        }
        else {
            xr=xm
        }
        if (i != 0) {
            errorvalue = this.err(xmoldinmain, xm);
            xmoldinmain = xm;
            console.log("If Work");
        }
        let tableObjData = {};
        tableObjData.index = i;
        tableObjData.xl = xl;
        tableObjData.xr = xr;
        tableObjData.xm = xm;
        tableObjData.errorvalue = errorvalue;
        tableArrData.push(tableObjData);
        console.log("XMVALUE = ", xm);
        console.log("I value =", i);
        console.log("This is errorvalue = ", errorvalue);
        console.log("This is fixvalueerror = ", fixvalueerror);
        xmArr[i] = xm;
        fxmArr[i] = fxm;
        i++;
      }
      this.setState({
        dataTable:tableArrData,
        result:xm
      })
    }

    EquationBisection = () =>{
      const formData = new FormData();
      formData.append("EqName",this.state.Eq);
      formData.append("EqType","Bisection");
      formData.append("EqDiff","");
      const config = {
        headers: {
            "content-type": "multipart/form-data"
            }
        };
      axios.post('http://localhost:8080/add_equation.php',formData,config)
      // axios.post('http://localhost/NumericalProject/server/add_equation.php',formData,config)
      .then(res=>{
        console.log(res);
      })
      .catch(err=>{
         throw err 
      })
    }

  showResult=()=>{
    const columns = [
      {
        title: 'No',
        dataIndex: 'index',
        key: 'index',
      },
      {
        title: 'XL',
        dataIndex: 'xl',
        key: 'xl',
      },
      {
        title: 'XR',
        dataIndex: 'xr',
        key: 'xr',
      },
      {
        title: 'XM',
        dataIndex: 'xm',
        key: 'xm',
      },
      {
        title: 'Error',
        dataIndex: 'errorvalue',
        key: 'errorvalue',
      },
    ];
    if(this.state.result!==null)
    {
      return <div>
        <h5>This is Result of Bisection : {this.state.result}</h5><br/>
        <Table dataSource={this.state.dataTable} columns={columns} rowKey="Index" style={{marginLeft:"5%" , marginRight:"5%" , background:"lightblue" }} size="middle"/>
      </div>

    }
    // else{
    //   return <div>
    //     <Alert message="Success Tips" type="success" showIcon />
    //     <Alert
    //       message="Success Tips"
    //       description="Detailed description and advice about successful copywriting."
    //       type="success"
    //       showIcon
    //     />
    //   </div>
    // }
  }

  onChange = (value) => {
    console.log(value[0]);
    this.setState({
      Eq:value[0]
    })
  }
  
  // Just show the latest item.
  displayRender = (label) => {
    return label[label.length - 1];
  }

  onChangeSwitch = (checked) => {
    console.log(checked)
    this.setState({
      SwitchOpen:checked
    })
  }

  showInput = () =>{
    if(this.state.SwitchOpen){
      return <div>
        <Input placeholder="Input Equations" style={{width:"13em" , marginLeft:"7%" , marginRight:"5%" , marginBottom:"0.5%"}} onChange={e=>this.setState({Eq:e.target.value})}/>
        <Button onClick={this.EquationBisection} style={{marginBottom:"0.5%", backgroundColor:"lightblue"}}>Add Equation</Button>
      </div>
      
    }
    else{
      return <Cascader
      options={this.state.options}
      expandTrigger="hover"
      displayRender={this.displayRender}
      onChange={this.onChange}
      style={{width:"13em" , marginLeft:"7%" , marginRight:"5%" , marginBottom:"0.5%"}}
      />
    }
  }
  render() {
    return (
      <div>
        <Header/>
          <br/>
          <p>
            <h1>Bisection</h1>
            <h3>Select Function</h3>
            <h5>Open Input Manual : <Switch onChange={this.onChangeSwitch} style={{margin:"1%"}}/></h5>
            <div>
              {this.showInput()}
            </div>
          </p>
          <p>
            <span>Input XL</span>        
            <Input placeholder="Input XL" style={{width:"20em" , marginLeft:"1%" , marginRight:"5%" , marginBottom:"0.5%"}} onChange={e=>this.setState({xlValue:e.target.value})}/>
            <br/>
            <span>Input XR</span>       
            <Input placeholder="Input XR" style={{width:"20em" , marginLeft:"1%" , marginRight:"5%" , marginTop:"0.5%"}} onChange={e=>this.setState({xrValue:e.target.value})}/>
          </p>
          <p>
            <Button onClick={this.getValue}>Submit</Button>
          </p>
          <br/>
          {this.showResult()}
        <Footer/>
      </div>
    )
  }

}