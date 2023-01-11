import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';

interface Props {}

const ReportOverlapScreen: FC<Props> = () => {
    const [selectedOption, setSelectedOption] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSelectedOption(event.target.value as string);
    };

    return (
        <view>
            <h1>Report an overlap</h1>
            <form>
                <div>
                    <label>What class would you like to change? </label>
                    <FormControl style={{ marginLeft: '70px' }}>
                        <Select
                            value={selectedOption}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value='' disabled>
                                Select an option
                            </MenuItem>
                            <MenuItem value={'PM Lecture'}>PM Lecture</MenuItem>
                            <MenuItem value={'SD Lecture'}>SD Lecture</MenuItem>
                            <MenuItem value={'SD Lab'}>SD Lab</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div style={{ marginTop: '30px' }}>
                    <label>With which class would you like to change? </label>
                    <FormControl style={{ marginLeft: '30px' }}>
                        <Select
                            value={selectedOption}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value='' disabled>
                                Select an option
                            </MenuItem>
                            <MenuItem value={'PM Leture'}>PM Lecture</MenuItem>
                            <MenuItem value={'SD Lecture'}>SD Lecture</MenuItem>
                            <MenuItem value={'SD Lab'}>SD Lab</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div style={{ marginTop: '30px' }}>
                    <label>Any additional info? </label>
                    <input style={{ marginLeft: '170px' }}></input>
                </div>

                <div style={{ marginTop: '30px' }}>
                    <Link
                        to='../timetable'
                        style={{
                            textDecoration: 'none',
                            color: '#fff',
                            display: 'block',
                        }}
                    >
                        <ListItem
                            disablePadding
                            sx={{ textDecoration: 'none' }}
                        >
                            <ListItemButton
                                sx={{
                                    width: 'max-content',
                                    borderRadius: 2,
                                    backgroundColor: '#3ca2ce',
                                    '&:hover': {
                                        color: 'rgba(0, 0, 0, 0.6)',
                                        fontWeight: '700',
                                    },
                                    display: 'block',
                                }}
                            >
                                <ListItemText primary={'Submit'} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </div>
            </form>
        </view>
    );
};

export default ReportOverlapScreen;
