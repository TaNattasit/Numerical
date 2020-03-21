import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Cascader , Input , Button , Table ,Switch } from 'antd';
import {parse} from 'mathjs'
import axios from 'axios';
import { formatCountdown } from 'antd/lib/statistic/utils';

export default class NewtonRaphson extends Component
{
  constructor(props)
    {
        super(props);
        this.state={
            options:[],
            diffs:[],
            Eq:null,
            EqDiff:null,
            Xinitial:null,
            result:null,
            dataTable:[]
        }
    }

    componentDidMount()
    {
        axios.get('http://localhost:8080/show_NewtonRaphson.php')//Docker//
        // axios.get('http://localhost/NumericalProject/server/show_NewtonRaphson.php')
        .then(res=>{
            console.log(res.data);
            let item =[];
            let optionsArr = [];
            let optionsDiffArr = [];
            res.data.map(dataMap=>{
              let optionsObj = {};
              let optionsDiff = {};
                if(dataMap.EQ_Type=="NewtonRaphson")
                {
                    item = item.concat(dataMap.EQ_Name);
                    optionsObj.value = dataMap.EQ_Name;
                    optionsObj.label = dataMap.EQ_Name;
                    optionsDiff.value = dataMap.EQ_Diff;
                    optionsDiff.label = dataMap.EQ_Diff;
                    optionsArr.push(optionsObj);
                    optionsDiffArr.push(optionsDiff);
                    console.log(optionsObj);
                    console.log(optionsDiff);
                }
            })
            this.setState({
                options:optionsArr,
                diffs:optionsDiffArr
            })
        })
    }

    Equet = (EqForSloveFuntion,xvalueforSlove) => {
      const NodeEqua = parse(EqForSloveFuntion); 
      const Equa = NodeEqua.compile();
      let scope = {
          x:xvalueforSlove
      }
      return Equa.eval(scope);
       
  }
  
  err = (xmold, xmnew) => {
      var er = ((Math.abs((xmnew - xmold) / xmnew)) * 100) / 100;
      return er;
  }
  
  getValue = () => {
  
      const {Eq,EqDiff,Xinitial} = this.state;
      console.log(Xinitial);
      var xi_inmain  = parseFloat(Xinitial); 
      let tableArrData = [];
  
      var xiplus1_inmain;
      var fxi;
      var fxpi;
      var fixerrorValue = 0.0001;
      var errorValue = 1;
      var i=0;
  
  while(errorValue>=fixerrorValue)
  {
      fxi=this.Equet(Eq,xi_inmain);
      fxpi=this.Equet(EqDiff,xi_inmain);
      xiplus1_inmain=xi_inmain-(fxi/fxpi);
      errorValue = this.err(xiplus1_inmain,xi_inmain);

      let tableObjData = {};
      tableObjData.index = i;
      tableObjData.xi_inmain = xi_inmain;
      tableObjData.errorValue = errorValue;
      tableArrData.push(tableObjData);
      console.log(xi_inmain,fxi,fxpi);
      console.log("XMVALUE = ", xiplus1_inmain);
      console.log("This is errorvalue = ", errorValue);
      console.log("This is fixvalueerror = ", fixerrorValue);
      xi_inmain=xiplus1_inmain;
      i++;
      }
      this.setState({
        dataTable:tableArrData,
        result:xiplus1_inmain
      })
  }   

  EquationNewton = () =>{
    const formData = new FormData();
    formData.append("EqName",this.state.Eq);
    formData.append("EqType","NewtonRaphson");
    formData.append("EqDiff",this.state.EqDiff);
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
        title: 'X',
        dataIndex: 'xi_inmain',
        key: 'xi_inmain',
      },
      {
        title: 'Error',
        dataIndex: 'errorValue',
        key: 'errorValue',
      },
    ];
    if(this.state.result!==null)
    {
      return <div>
        <h5>This is Result of NewtonRaphson is : {this.state.result}</h5><br/>
        <Table dataSource={this.state.dataTable} columns={columns} rowKey="Index" style={{marginLeft:"5%" , marginRight:"5%" , background:"lightblue" }} size="middle"/>
      </div>

    }
  }

    onChange = (value) => {// Function
      console.log(value[0]);
      this.setState({
        Eq:value[0]
      })
    }
    displayRender = (label) => {
      return label[label.length - 1];
    }

    onChange2 = (value) => {//Funtion Diff
      console.log(value[0]);
      this.setState({
        EqDiff:value[0]
      })
    }
    displayRender2 = (label) => {
      return label[label.length - 1];
    }

    onChangeSwitch1 = (checked) => {
      console.log(checked)
      this.setState({
        SwitchOpen:checked
      })
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
        return <p><Cascader
        options={this.state.options}
        expandTrigger="hover"
        displayRender={this.displayRender}
        onChange={this.onChange}
        style={{width:"13em" , marginLeft:"7%" , marginRight:"5%" , marginBottom:"0.5%"}}
        /></p>
      }
    }

    showInput2 = () =>{
      if(this.state.SwitchOpen){
        return <div>
        <Input placeholder="Input Equations" style={{width:"13em" , marginLeft:"7%" , marginRight:"5%" , marginBottom:"0.5%"}} onChange={e=>this.setState({EqDiff:e.target.value})}/>
        <Button onClick={this.EquationBisection} style={{marginBottom:"0.5%", backgroundColor:"lightblue"}}>Add Equation</Button>
      </div>
      }
      else{
        return <p><Cascader
        options={this.state.diffs}
        expandTrigger="hover"
        displayRender={this.displayRender2}
        onChange={this.onChange2}
        style={{width:"13em" , marginLeft:"7%" , marginRight:"5%" , marginBottom:"0.5%"}}
        /></p>
      }
    }

  render() {
    return (
      <div>
        <Header/>
          <br/>
          <p>
            <h1>Newton Raphson</h1>
            <h5>Select Function</h5>
            <h5>Open Input Manual : <Switch onChange={this.onChangeSwitch} style={{margin:"1%"}}/></h5>
            <di>
              {this.showInput()}
            </di>
            <h5 style={{marginTop:"2%"}}>Select Function Diff</h5>
            <di>
              {this.showInput2()}
            </di>            
          </p>
          <p>
            <span>Input Xinitial</span>        
            <Input placeholder="Input Xinitial" style={{width:"20em" , marginLeft:"1%" , marginRight:"5%" , marginBottom:"0.5%"}} onChange={e=>this.setState({Xinitial:e.target.value})} />
            <br/>
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


