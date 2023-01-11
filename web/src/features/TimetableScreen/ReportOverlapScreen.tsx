import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom'
import { FormControl, Select, MenuItem } from '@material-ui/core';

interface Props {}

const ReportOverlapScreen : FC<Props> = () => {
    const [selectedOption, setSelectedOption] = useState<string>('');
  
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      setSelectedOption(event.target.value as string);
    };
  
    return (
    <view >
      <h1>Report an overlap</h1>  
      <form>
        <div>
        <label>What class would you like to change? </label>
        <FormControl style={{marginLeft: '70px'}}>
          <Select
            value={selectedOption}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="" disabled>
              Select an option
            </MenuItem>
            <MenuItem value={'PM Lecture'}>PM Lecture</MenuItem>
            <MenuItem value={'SD Lecture'}>SD Lecture</MenuItem>
            <MenuItem value={'SD Lab'}>SD Lab</MenuItem>
          </Select>
        </FormControl>
        </div>

        <div style={{ marginTop: '30px'}}>
        <label>With which class would you like to change? </label>
        <FormControl style={{marginLeft: '30px',}}>
          <Select
            value={selectedOption}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="" disabled>
              Select an option
            </MenuItem>
            <MenuItem value={'PM Leture'}>PM Lecture</MenuItem>
            <MenuItem value={'SD Lecture'}>SD Lecture</MenuItem>
            <MenuItem value={'SD Lab'}>SD Lab</MenuItem>
          </Select>
        </FormControl>
        </div>

        <div style={{ marginTop: '30px'}}>
        <label>Any additional info?  </label>
        <input style={{marginLeft: '170px'}}></input>
        </div>

        <div style={{ marginTop: '30px'}}>
        <button style={{background: '#F63B3B', borderRadius: 5, fontSize: 20}} type="submit" >
            <Link to='../timetable'>Submit</Link>
            </button>
        </div>

        
      </form>
      </view>
    );
  };

export default ReportOverlapScreen;