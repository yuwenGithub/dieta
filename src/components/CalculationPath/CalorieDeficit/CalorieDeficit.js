import React from 'react';

const CalorieDeficit = ({onSendOption}) => {
    return (
      <div >
        <legend className="fw7 f4 ">Calorie deficit per day this week:</legend>
        <div className="flex items-center mb2">
          <input 
          className="mr2" type="radio" id="300" value="300" name="deficit"
          onClick={onSendOption}
          />
          <label htmlFor="300" className="lh-copy">300</label>
        </div>
        <div className="flex items-center mb2">
          <input 
          className="mr2" type="radio" id="400" value="400" name="deficit"
          onClick={onSendOption}
          />
          <label htmlFor="400" className="lh-copy">400</label>
        </div>
        <div className="flex items-center mb2">
          <input 
          className="mr2" type="radio" id="500" value="500" name="deficit"
          onClick={onSendOption}
          />
          <label htmlFor="500" className="lh-copy">500</label>
        </div>
      </div>
    )
}

export default CalorieDeficit;