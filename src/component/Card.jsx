import React from 'react'

const Card = (props) => {
  let options=props.options;
  let pirceOption=Object.keys(options)
  const handleaddToCart=()=>{

  }
  return (
    <div>
    <div className="card mt-3 border-black " style={{ 'width': "18rem",'maxHeight':'360px' }}>
      <img src={props.imgSrc} className="card-img-top" alt="..." style={{height:"120px",objectFit:"fill"}} />
      <div className="card-body">
        <h5 className="card-title">{props.foodName}</h5>
        <div className="container w-100">
          <select className="m-2 h-100  bg-success rounded">
            {Array.from(Array(6),(e,i)=>{
              return(
<option key={i+1} value={i+1}>{i+1}</option>
              )
            })}
          </select>
          <select className="m-2 h-100  bg-success rounded">
            {pirceOption.map((data)=>{
              return<option key={data}>{data}</option>
            })}
          </select>
          <div className="d-inline h-100 fs-5">Total pirce</div>
        </div>
        <hr/>
          <button className={'btn btn-success justify-center ms-2'} onClick={handleaddToCart}>Add to Cart</button>
        
      </div>
    </div>
  </div>
  )
}

export default Card
