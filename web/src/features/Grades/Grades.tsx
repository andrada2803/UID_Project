import React from 'react'
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

export const GradesScreen = () => {
    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [tableData, setTableData] = useState<Person[]>(() => students);
    const [validationErrors, setValidationErrors] = useState<{
        [cellId: string]: string;
    }>({});

    const handleCreateNewRow = (values: Person) => {
        tableData.push(values);
        setTableData([...tableData]);
    };

    const handleSaveRowEdits: MaterialReactTableProps<Person>['onEditingRowSave'] =
        async ({ exitEditingMode, row, values }) => {
            if (!Object.keys(validationErrors).length) {
                tableData[row.index] = values;
                //send/receive api updates here, then refetch or update local table data for re-render
                setTableData([...tableData]);
                exitEditingMode(); //required to exit editing mode and close modal
            }
        };

    const handleCancelRowEdits = () => {
        setValidationErrors({});
    };

    const handleDeleteRow = useCallback(
        (row: MRT_Row<Person>) => {
            if (
                !window.confirm(
                    `Are you sure you want to delete ${row.getValue(
                        'firstName'
                    )}`
                )
            ) {
                return;
            }
            //send api delete request here, then refetch or update local table data for re-render
            tableData.splice(row.index, 1);
            setTableData([...tableData]);
        },
        [tableData]
    );

    const getCommonEditTextFieldProps = useCallback(
        (
            cell: MRT_Cell<Person>
        ): MRT_ColumnDef<Person>['muiTableBodyCellEditTextFieldProps'] => {
            return {
                error: !!validationErrors[cell.id],
                helperText: validationErrors[cell.id],
                onBlur: (event) => {
                    const isValid =
                        cell.column.id === 'email'
                            ? validateEmail(event.target.value)
                            : cell.column.id === 'bdate'
                            ? validateBdate(event.target.value)
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

    const columns = useMemo<MRT_ColumnDef<Person>[]>(
        () => [
            {
                accessorKey: 'id',
                header: 'ID',
                enableColumnOrdering: false,
                enableEditing: true, //disable editing on this column
                enableSorting: false,
                size: 80,
            },
            {
                accessorKey: 'firstName',
                header: 'First Name',
                size: 140,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                }),
            },
            {
                accessorKey: 'lastName',
                header: 'Last Name',
                size: 140,
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                }),
            },
            {
                accessorKey: 'email',
                header: 'Email',
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                    type: 'email',
                }),
            },
            {
                accessorKey: 'bdate',
                header: 'Birth date',
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
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
                data={tableData}
                editingMode='modal' //default
                enableColumnOrdering
                enableEditing
                onEditingRowSave={handleSaveRowEdits}
                onEditingRowCancel={handleCancelRowEdits}
                renderRowActionMenuItems={({ closeMenu, row, table }) => [
                    <MenuItem
                        key={2}
                        onClick={() => handleDeleteRow(row)}
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
                            closeMenu();
                        }}
                        sx={{ m: 0 }}
                    >
                        <ListItemIcon>
                            <AccountCircle />
                        </ListItemIcon>
                        View Profile
                    </MenuItem>,
                    <MenuItem
                        key={1}
                        onClick={() => {
                            // Send email logic...
                            closeMenu();
                        }}
                        sx={{ m: 0 }}
                    >
                        <ListItemIcon>
                            <Send />
                        </ListItemIcon>
                        Send Email
                    </MenuItem>,
                ]}
                renderTopToolbarCustomActions={() => (
                    <Button
                        color='secondary'
                        onClick={() => setCreateModalOpen(true)}
                        variant='contained'
                    >
                        Add New Student
                    </Button>
                )}
            />
            <CreateNewAccountModal
                columns={columns}
                open={createModalOpen}
                onClose={() => setCreateModalOpen(false)}
                onSubmit={handleCreateNewRow}
            />
        </>
    );
};

//example of creating a mui dialog modal for creating new rows
export const CreateNewAccountModal: FC<{
    columns: MRT_ColumnDef<Person>[];
    onClose: () => void;
    onSubmit: (values: Person) => void;
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

    const handleSubmit = () => {
        if (Object.keys(validationErrors).length) return;

        onSubmit(values);
        onClose();
    };

    return (
        <Dialog open={open}>
            <DialogTitle textAlign='center'>Create New Account</DialogTitle>
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
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                onBlur={(event) => {
                                    const isValid =
                                        column.accessorKey === 'email'
                                            ? validateEmail(event.target.value)
                                            : column.accessorKey === 'bdate'
                                            ? validateBdate(event.target.value)
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
                <Button onClick={onClose}>Cancel</Button>
                <Button
                    color='secondary'
                    onClick={handleSubmit}
                    variant='contained'
                >
                    Add New Student
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
    console.log(bdate);
    return moment(bdate, 'DD/MM/YYYY', true).isValid();
};
