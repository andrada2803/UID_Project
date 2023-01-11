import MaterialReactTable, {
    MaterialReactTableProps,
    MRT_Cell,
    MRT_ColumnDef,
    MRT_Row,
} from 'material-react-table';
import { FC, useCallback, useMemo, useState } from 'react';

import { AccountCircle, Send } from '@mui/icons-material';
//Material-UI Imports
import { Box, Button, ListItemIcon, MenuItem, TextField } from '@mui/material';

import { Delete, Edit } from '@mui/icons-material';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Stack,
} from '@mui/material';
import { students } from '../../mock/Students';
import { Person } from '../../model/Person';
import moment from 'moment';
import { Tax, TaxPaymentStatus } from '../../model/Taxes';
import { mockTaxes } from '../../mock/Taxes';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Autocomplete from '@mui/material/Autocomplete';
import { current } from '@reduxjs/toolkit';
import TaxToStudents from './TaxToStudents/TaxToStudents';
import { useAppDispatch, useAppSelector } from '../../store/store';
import {
    addToTaxes,
    addToTaxesToStudents,
    removeTax,
    updateTax,
} from '../../store/user/generalSlice';

const TaxesScreen: FC = () => {
    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [taxModal, setTaxModal] = useState(false);
    const [selectedTax, setSelectedTax] = useState<Tax | null>(null);
    const taxes = useAppSelector((state) => state.general.taxes);
    const dispatch = useAppDispatch();
    const [validationErrors, setValidationErrors] = useState<{
        [cellId: string]: string;
    }>({});

    const handleCreateNewRow = (values: Tax) => {
        dispatch(addToTaxes(values));
    };

    const handleAssignTax = (student: Person) => {
        // if (!selectedTax) return;
        console.log('taxa selectataaaaa', selectedTax);

        dispatch(
            addToTaxesToStudents({
                tax: selectedTax!,
                student: student,
                status: TaxPaymentStatus.PENDING,
            })
        );
    };

    const handleSaveRowEdits: MaterialReactTableProps<Tax>['onEditingRowSave'] =
        async ({ exitEditingMode, row, values }) => {
            if (!Object.keys(validationErrors).length) {
                dispatch(updateTax(values));
                // tableData[row.index] = values;
                //send/receive api updates here, then refetch or update local table data for re-render
                // setTableData([...tableData]);
                exitEditingMode(); //required to exit editing mode and close modal
            }
        };

    const handleCancelRowEdits = () => {
        setValidationErrors({});
    };

    const handleDeleteRow = useCallback(
        (row: MRT_Row<Tax>) => {
            if (
                !window.confirm(
                    `Are you sure you want to delete ${row.getValue('name')}`
                )
            ) {
                return;
            }
            //send api delete request here, then refetch or update local table data for re-render
            // tableData.splice(row.index, 1);
            // setTableData([...tableData]);
            dispatch(removeTax(taxes[row.index].id));
        },
        [taxes]
    );

    const getCommonEditTextFieldProps = useCallback(
        (
            cell: MRT_Cell<Tax>
        ): MRT_ColumnDef<Tax>['muiTableBodyCellEditTextFieldProps'] => {
            return {
                error: !!validationErrors[cell.id],
                helperText: validationErrors[cell.id],
                onChange: (event) =>
                    cell.column.id === 'price'
                        ? +event.target.value
                        : event.target.value,
                onBlur: (event) => {
                    const isValid =
                        cell.column.id === 'price'
                            ? validateNumber(event.target.value)
                            : validateRequired(event.target.value);

                    if (!isValid) {
                        //set validation error for cell if invalid
                        setValidationErrors({
                            ...validationErrors,
                            [cell.id]: `${cell.column.columnDef.header} is required`,
                        });
                    } else {
                        //remove validation error for cell if valid
                        delete validationErrors[cell.id];
                        setValidationErrors({
                            ...validationErrors,
                        });
                    }
                },
            };
        },

        [validationErrors]
    );

    const columns = useMemo<MRT_ColumnDef<Tax>[]>(
        () => [
            {
                accessorKey: 'name',
                header: 'Name',
                size: 140,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                }),
            },
            {
                accessorKey: 'description',
                header: 'Description',
                size: 140,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                }),
            },
            {
                accessorKey: 'price',
                header: 'Price',
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                    type: 'number',
                }),
            },
        ],
        [getCommonEditTextFieldProps]
    );

    return (
        <>
            <MaterialReactTable
                muiTableHeadCellProps={{
                    sx: {
                        '& .Mui-TableHeadCell-Content': {
                            justifyContent: 'left',
                        },
                        width: '100%',
                        height: '100%',
                    },
                }}
                displayColumnDefOptions={{
                    'mrt-row-actions': {
                        muiTableHeadCellProps: {
                            align: 'center',
                        },
                        size: 120,
                    },
                }}
                columns={columns}
                data={taxes}
                editingMode='modal' //default
                enableColumnOrdering
                enableEditing
                onEditingRowSave={handleSaveRowEdits}
                onEditingRowCancel={handleCancelRowEdits}
                renderRowActionMenuItems={({ closeMenu, row, table }) => [
                    <MenuItem
                        key={2}
                        onClick={() => {
                            handleDeleteRow(row);
                            closeMenu();
                        }}
                        sx={{ m: 0 }}
                    >
                        <ListItemIcon>
                            <Delete />
                        </ListItemIcon>
                        Delete
                    </MenuItem>,
                    <MenuItem
                        key={0}
                        onClick={() => {
                            // View profile logic...
                            setSelectedTax(taxes[row.index]);
                            setTaxModal(true);
                            closeMenu();
                        }}
                        sx={{ m: 0 }}
                    >
                        <ListItemIcon>
                            <MonetizationOnIcon />
                        </ListItemIcon>
                        Assign tax to student
                    </MenuItem>,
                ]}
                renderTopToolbarCustomActions={() => (
                    <Button
                        color='secondary'
                        onClick={() => setCreateModalOpen(true)}
                        variant='contained'
                    >
                        Add New Tax
                    </Button>
                )}
            />

            <Box sx={{ marginLeft: 10 }}>
                <TaxToStudents />
            </Box>
            <CreateNewAccountModal
                columns={columns}
                open={createModalOpen}
                onClose={() => {
                    setCreateModalOpen(false);
                }}
                onSubmit={handleCreateNewRow}
            />
            <AssignTaxModal
                columns={columns}
                open={taxModal}
                onClose={() => {
                    setTaxModal(false);
                }}
                onSubmit={handleAssignTax}
                currentTax={selectedTax}
            />
        </>
    );
};

//example of creating a mui dialog modal for creating new rows
export const CreateNewAccountModal: FC<{
    columns: MRT_ColumnDef<Tax>[];
    onClose: () => void;
    onSubmit: (values: Tax) => void;
    open: boolean;
}> = ({ open, columns, onClose, onSubmit }) => {
    const [values, setValues] = useState<any>(() =>
        columns.reduce((acc, column) => {
            acc[column.accessorKey ?? ''] = '';
            return acc;
        }, {} as any)
    );

    const [validationErrors, setValidationErrors] = useState<{
        [cellId: string]: string;
    }>({});

    const isFormEmpty = () => {
        let isEmpty: boolean = false;
        columns.forEach((col) => {
            if (!values[col.accessorKey || '']) {
                isEmpty = true;
            }
        });

        return isEmpty;
    };

    const handleSubmit = () => {
        if (Object.keys(validationErrors).length || isFormEmpty()) return;

        onSubmit(values);
        onClose();
    };

    return (
        <Dialog open={open}>
            <DialogTitle textAlign='center'>Add New Tax</DialogTitle>
            <DialogContent>
                <form onSubmit={(e) => e.preventDefault()}>
                    <Stack
                        sx={{
                            width: '100%',
                            minWidth: { xs: '300px', sm: '360px', md: '400px' },
                            gap: '1.5rem',
                        }}
                    >
                        {columns.map((column) => (
                            <TextField
                                key={column.accessorKey}
                                label={column.header}
                                name={column.accessorKey}
                                error={
                                    !!validationErrors[column.accessorKey || '']
                                }
                                helperText={
                                    validationErrors[column.accessorKey || '']
                                }
                                onChange={(e) =>
                                    setValues({
                                        ...values,
                                        [e.target.name]:
                                            column.accessorKey === 'price'
                                                ? +e.target.value
                                                : e.target.value,
                                    })
                                }
                                onBlur={(event) => {
                                    const isValid =
                                        column.accessorKey === 'price'
                                            ? validateNumber(event.target.value)
                                            : validateRequired(
                                                  event.target.value
                                              );

                                    if (!isValid) {
                                        //set validation error for cell if invalid
                                        setValidationErrors({
                                            ...validationErrors,
                                            [column.accessorKey ||
                                            '']: `${column.header} is required`,
                                        });
                                    } else {
                                        //remove validation error for cell if valid
                                        delete validationErrors[
                                            column.accessorKey || ''
                                        ];
                                        setValidationErrors({
                                            ...validationErrors,
                                        });
                                    }
                                }}
                            />
                        ))}
                    </Stack>
                </form>
            </DialogContent>
            <DialogActions sx={{ p: '1.25rem' }}>
                <Button
                    onClick={() => {
                        onClose();
                        setValidationErrors({});
                    }}
                >
                    Cancel
                </Button>
                <Button
                    color='secondary'
                    onClick={handleSubmit}
                    variant='contained'
                >
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export const AssignTaxModal: FC<{
    columns: MRT_ColumnDef<Tax>[];
    onClose: () => void;
    onSubmit: (values: Person) => void;
    open: boolean;
    currentTax: Tax | null;
}> = ({ open, columns, onClose, onSubmit, currentTax }) => {
    // const [values, setValues] = useState<any>(() =>
    //     columns.reduce((acc, column) => {
    //         acc[column.accessorKey ?? ''] = '';
    //         return acc;
    //     }, {} as any)
    // );

    const students = useAppSelector((state) => state.general.students);

    const [student, setStudent] = useState<Person | undefined>(undefined);

    const [validationErrors, setValidationErrors] = useState<{
        [cellId: string]: string;
    }>({});

    const isFormEmpty = () => {
        return !currentTax || !student;
    };

    const handleSubmit = () => {
        if (Object.keys(validationErrors).length || isFormEmpty()) return;

        onSubmit(student!);
        onClose();
    };

    if (!currentTax) return <></>;

    return (
        <Dialog open={open}>
            <DialogTitle textAlign='center'>Add New Tax</DialogTitle>
            <DialogContent>
                <form onSubmit={(e) => e.preventDefault()}>
                    <Stack
                        sx={{
                            width: '100%',
                            minWidth: { xs: '300px', sm: '360px', md: '400px' },
                            gap: '1.5rem',
                        }}
                    >
                        {/* {columns.map((column) => (
                            <TextField
                                key={column.accessorKey}
                                label={column.header}
                                name={column.accessorKey}
                                error={
                                    !!validationErrors[column.accessorKey || '']
                                }
                                helperText={
                                    validationErrors[column.accessorKey || '']
                                }
                                onChange={(e) =>
                                    setValues({
                                        ...values,
                                        [e.target.name]:
                                            column.accessorKey === 'price'
                                                ? +e.target.value
                                                : e.target.value,
                                    })
                                }
                                onBlur={(event) => {
                                    const isValid =
                                        column.accessorKey === 'price'
                                            ? validateNumber(event.target.value)
                                            : validateRequired(
                                                  event.target.value
                                              );

                                    if (!isValid) {
                                        //set validation error for cell if invalid
                                        setValidationErrors({
                                            ...validationErrors,
                                            [column.accessorKey ||
                                            '']: `${column.header} is required`,
                                        });
                                    } else {
                                        //remove validation error for cell if valid
                                        delete validationErrors[
                                            column.accessorKey || ''
                                        ];
                                        setValidationErrors({
                                            ...validationErrors,
                                        });
                                    }
                                }}
                            />
                        ))} */}

                        <Box>{`${currentTax.name} ~ ${currentTax.price}RON`}</Box>

                        <Autocomplete
                            id='combo-box-demo'
                            options={students}
                            sx={{ width: 300 }}
                            getOptionLabel={(option) => option.id}
                            onChange={(
                                _event: any,
                                newValue: Person | null
                            ) => {
                                setStudent(newValue ?? undefined);
                            }}
                            renderInput={(params) => (
                                <TextField {...params} label='Student' />
                            )}
                        />
                    </Stack>
                </form>
            </DialogContent>
            <DialogActions sx={{ p: '1.25rem' }}>
                <Button
                    onClick={() => {
                        onClose();
                        setValidationErrors({});
                    }}
                >
                    Cancel
                </Button>
                <Button
                    color='secondary'
                    onClick={handleSubmit}
                    variant='contained'
                >
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
};

const validateRequired = (value: string) => !!value.length;
const validateEmail = (email: string) =>
    !!email.length &&
    email
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
const validateBdate = (bdate: string) => {
    return moment(bdate, 'DD/MM/YYYY', true).isValid();
};

const validateNumber = (stringNumber: string) => !isNaN(+stringNumber);

export default TaxesScreen;
