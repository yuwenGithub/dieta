import React from 'react';

const Options = ({Pname, PponSendOption, optionState}) => {
  // have to fix: correspond label to options
  // The for attribute of <label> must be equal to the id attribute of the related element 
  console.log("optionState", optionState[0]);  
  return(
        <div>
        <h1>optionState in Options: {optionState}</h1>
            <div className="flex items-center mb2">
              <input 
              className="mr2" type="radio" id={`${Pname}-rare`} value="0" name={Pname}
              onClick={PponSendOption}
              defaultChecked={optionState[0]}
              />
              <label htmlFor={`${Pname}-rare`} className="lh-copy">Rare</label>
            </div>
            <div className="flex items-center mb2">
              <input 
              className="mr2" type="radio" id={`${Pname}-low`} value="1" name={Pname}
              onClick={PponSendOption}
              defaultChecked={optionState[1]}
              />
              <label htmlFor={`${Pname}-low`} className="lh-copy">Low</label>
            </div>
            <div className="flex items-center mb2">
              <input 
              className="mr2" type="radio" id={`${Pname}-medium`} value="2" name={Pname}
              onClick={PponSendOption}
              defaultChecked={optionState[2]}
              />
              <label htmlFor={`${Pname}-medium`} className="lh-copy">Medium</label>
            </div>
            <div className="flex items-center mb2">
              <input 
              className="mr2" type="radio" id={`${Pname}-high`} value="3" name={Pname}
              onClick={PponSendOption}
              defaultChecked={optionState[3]}
              />
              <label htmlFor={`${Pname}-high`} className="lh-copy">High</label>
            </div>
        </div>
    )
}

export default Options; 