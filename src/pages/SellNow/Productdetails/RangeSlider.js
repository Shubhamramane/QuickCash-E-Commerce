import React, {
    Component,
    memo,
    useCallback,
    useState,
    useEffect,
    useMemo
  } from "react";

  const RangeSlider = memo(
    ({ classes, label, onChange, value, ...sliderProps }) => {
      const [sliderVal, setSliderVal] = useState(0);
      const [mouseState, setMouseState] = useState(null);
  // console.log({sliderVal})
      useEffect(() => {
        setSliderVal(value);
      }, [value]);
  
      const changeCallback = e => {
        setSliderVal(e.target.value);
      };
  
      useEffect(() => {
        if (mouseState === "up") {
          onChange(sliderVal);
        }
      }, [mouseState]);
      console.log("RENDER");
      return (
        <div className="range-slider">
          {/* <p>{label}</p> */}
          
          <input
            type="range"
            value={sliderVal}
            {...sliderProps}
            className={`sliders ${classes}`}
            id="myRange"
            onChange={changeCallback}
            onMouseDown={() => setMouseState("down")}
            onMouseUp={() => setMouseState("up")}
          />
          <h3 className="select-days">Days: {sliderVal}</h3>
        </div>
      );
    }
  );
  
  // export default RangeSlider;
  
const RangeSlide = () => {
        const [parentVal, setParentVal] = useState(15);
  
        const sliderValueChanged = useCallback(val => {
          console.log("NEW VALUE", val);
          setParentVal(val);
        });
  
        const sliderProps = useMemo(
          () => ({
            min: 0,
            max: 90,
            value: parentVal,
            step: 2,
            label: "This is a reusable slider",
            onChange: e => sliderValueChanged(e)
          }),
          [parentVal]
        );
  
        return (
          <div>
            {/* <h1>PARENT VALUE: {parentVal}</h1> */}
            <RangeSlider value={parentVal} onChange={e => setParentVal(e.target.value)} {...sliderProps} classes="additional-css-classes" />
          </div>
        );
      };
  
export default RangeSlide;
  