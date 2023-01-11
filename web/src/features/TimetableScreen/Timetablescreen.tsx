import './Timetable.css';
import { Link } from 'react-router-dom'
import React, { FC } from 'react';

interface Props {
    timetable: {[day:string]: Array<string>};
  }

const TimetableScreen: FC<Props> = ({ timetable }) => {
    const days = Object.keys(timetable);
  
    return (
      <view>
      <table>
            <thead>
                <tr>
                    {days.map(day => (
                        <th className="th-spacing" key={day}>{day}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {Array.from({ length: 24 }, (_, i) => i + 9).map(hour => (
                    <tr key={hour}>
                        {days.map(day => (
                            <td key={`${day}-${hour}`}>
                                {timetable[day].find(e => e.startsWith(`${hour}:`))}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
        <div style={{ marginTop: '30px'}}>
            <button style={{background: '#F63B3B', borderRadius: 5, fontSize: 20}}>
                <Link to='../report'>Report Overlap</Link>
            </button>
        </div>
        </view>
    );
  };

export default TimetableScreen;
