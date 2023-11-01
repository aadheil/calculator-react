import React, { useState } from 'react'
import './App.css'
function App() {
  const [expresson,setexpresson]=useState("")
  const handleclick=(e)=>{
    var expr=expresson
   
    var newexpr=expresson+e
    setexpresson(newexpr)
    if(expresson=="Can't divide by zero"){
      setexpresson(e)
    }
   
    
  }
  const evaluate=()=>{
    if(expresson){
    try {
      var b=eval(expresson)
    var st=b.toString()
    setexpresson(st)
    }
    catch(err) {
      var lastel=expresson.slice(-1)
      if(lastel=="+")
      {
        setexpresson(expresson)
      }
      else{
        setexpresson("0")

      }
    }
    var last2= expresson.slice(-2);
    
    // var divideseclast=expresson.substring(1,expresson.length - 1)
// alert(divideseclast)
    
    if(last2=="/0"){
      setexpresson("Can't divide by zero")
      

    }
   
  }}
  const handleac=()=>{
    setexpresson("")
  }
  const deletelastelement=()=>{
    var str = expresson.substring(0, expresson.length - 1);
    setexpresson(str)
    if(expresson=="Can't divide by zero")
    {
      setexpresson("")
    }
  }
  
  return (
    <>
    <div className='w-100 d-flex align-items-center justify-content-center bg-dark ' style={{height:'100vh',fontFamily:'Play'}}>
      <div style={{width:'400px',height:'660px'}} className='bg-light shadow rounded border'>
        {/* screen */}
        <div style={{width:'92.3%',height:'150px',borderRadius:'2%',backgroundColor:'#B0E0E6'}} className='m-3  d-flex align-items-center justify-content-center text-center border shadow '  >
          
          <h3>{expresson}</h3>
          
        </div>
        
        {/* screen end */}

        <div className="row mt-5">
          <div className="col d-flex justify-content-evenly">
            <button className='btn btn-info fw-bolder ' onClick={handleac} style={{width:'150px',height:'60px',borderRadius:'20%'}}>AC</button>
            <button className='btn btn-info fw-bolder' onClick={deletelastelement} style={{width:'60px',height:'60px',borderRadius:'30%'}}><i className="fa-solid fa-delete-left"></i></button>
            {/* <button className='btn btn-danger'  onClick={(e)=>handleclick("%")} style={{width:'60px',height:'60px',borderRadius:'50%'}}>%</button> */}
            <button className='btn btn-info fw-bolder'  onClick={(e)=>handleclick("/")} style={{width:'60px',height:'60px',borderRadius:'30%'}}><i className="fa-solid fa-divide"></i></button>
          </div>
        </div>


        <div className="row mt-4">
          <div className="col d-flex justify-content-evenly">
            <button className='btn btn-dark fw-bolder shadow'  onClick={(e)=>handleclick("7")} style={{width:'60px',height:'60px',borderRadius:'30%'}}>7</button>
            <button className='btn btn-dark fw-bolder shadow'  onClick={(e)=>handleclick("8")} style={{width:'60px',height:'60px',borderRadius:'30%'}}>8</button>
            <button className='btn btn-dark fw-bolder shadow'  onClick={(e)=>handleclick("9")} style={{width:'60px',height:'60px',borderRadius:'30%'}}>9</button>
            <button className='btn btn-info fw-bolder shadow'  onClick={(e)=>handleclick("*")} style={{width:'60px',height:'60px',borderRadius:'30%'}}><i className="fa-solid fa-xmark"></i></button>
          </div>
        </div>

 <div className="row mt-4">
          <div className="col d-flex justify-content-evenly">
            <button className='btn btn-dark fw-bolder shadow'  onClick={(e)=>handleclick("4")} style={{width:'60px',height:'60px',borderRadius:'30%'}}>4</button>
            <button className='btn btn-dark fw-bolder shadow'  onClick={(e)=>handleclick("5")} style={{width:'60px',height:'60px',borderRadius:'30%'}}>5</button>
            <button className='btn btn-dark fw-bolder shadow'  onClick={(e)=>handleclick("6")} style={{width:'60px',height:'60px',borderRadius:'30%'}}>6</button>
            <button className='btn btn-info fw-bolder shadow'  onClick={(e)=>handleclick("-")} style={{width:'60px',height:'60px',borderRadius:'30%'}}><i className="fa-solid fa-minus"></i></button>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col d-flex justify-content-evenly">
            <button className='btn btn-dark fw-bolder shadow'  onClick={(e)=>handleclick("1")} style={{width:'60px',height:'60px',borderRadius:'30%'}}><i class="fa-solid fa-1"></i></button>
            <button className='btn btn-dark fw-bolder shadow'  onClick={(e)=>handleclick("2")} style={{width:'60px',height:'60px',borderRadius:'30%'}}>2</button>
            <button className='btn btn-dark fw-bolder shadow'  onClick={(e)=>handleclick("3")} style={{width:'60px',height:'60px',borderRadius:'30%'}}>3</button>
            <button className='btn btn-info fw-bolder shadow'  onClick={(e)=>handleclick("+")} style={{width:'60px',height:'60px',borderRadius:'30%'}}><i className="fa-solid fa-plus"></i></button>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col d-flex justify-content-evenly">
           
            <button className='btn btn-dark fw-bolder shadow ' onClick={(e)=>handleclick(".")} style={{width:'60px',height:'60px',borderRadius:'30%'}} >.</button>
            <button className='btn btn-dark fw-bolder shadow'  onClick={(e)=>handleclick("0")} style={{width:'60px',height:'60px',borderRadius:'30%'}}>0</button>
            {/* <button className='btn btn-success ' style={{width:'60px',height:'60px',borderRadius:'50%',visibility:'hidden'}}></button> */}
            <button className='btn btn-info fw-bolder shadow' onClick={evaluate} style={{width:'150px',height:'60px',borderRadius:'20%'}}><i className="fa-solid fa-equals"></i></button>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default App