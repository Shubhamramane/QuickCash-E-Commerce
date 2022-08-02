import React, { Component,useState } from 'react'
import Slider from 'react-rangeslider'
import './Range.css';

const Horizontal = ({range, setRange}) =>{
  // constructor (props, context) {
  //   super(props, context)
  //   this.state = {
  //     value: 15
  //   }
  // }

 

  // const handleChangeStart = () => {
  //   console.log({range})
  // };

  // handleChange = e => {
  //   this.setState({
  //     value: e
  //   })
  // };

  const handleChange = e =>{
    setRange(e)
  }

  const handleChangeComplete = () => {
    // console.log({range})
  };

  // render () {
    const { value } = setRange
    return (
      <div className='sliderss'>
        <Slider
          min={0}
          max={90}
          value={range}
          // onChangeStart={handleChangeStart}
          onChange={handleChange}
          onChangeComplete={handleChangeComplete}
        />
        <div className='value'>Days:{range}</div>
      </div>
    )
  // }
}

export default Horizontal