import './Timetable.css';
import { Link } from 'react-router-dom';
import React, { FC } from 'react';
import { Button, ListItem, ListItemButton, ListItemText } from '@mui/material';

interface Props {
    timetable: { [day: string]: Array<string> };
}

const TimetableScreen: FC<Props> = ({ timetable }) => {
    const days = Object.keys(timetable);

    return (
        <view>
            <table>
                <thead>
                    <tr>
                        {days.map((day) => (
                            <th className='th-spacing' key={day}>
                                {day}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 24 }, (_, i) => i + 9).map((hour) => (
                        <tr key={hour}>
                            {days.map((day) => (
                                <td key={`${day}-${hour}`}>
                                    {timetable[day].find((e) =>
                                        e.startsWith(`${hour}:`)
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={{ marginTop: '30px', display: 'block' }}>
                <Link
                    to='../report'
                    style={{
                        textDecoration: 'none',
                        color: '#fff',
                        display: 'block',
                    }}
                >
                    <ListItem disablePadding sx={{ textDecoration: 'none' }}>
                        <ListItemButton
                            sx={{
                                width: 'max-content',
                                borderRadius: 2,
                                backgroundColor: '#7b727f',
                                '&:hover': {
                                    color: 'rgba(0, 0, 0, 0.6)',
                                    fontWeight: '700',
                                },
                                display: 'block',
                            }}
                        >
                            <ListItemText primary={'Report Overlap'} />
                        </ListItemButton>
                    </ListItem>
                </Link>
            </div>
        </view>
    );
};

export default TimetableScreen;
