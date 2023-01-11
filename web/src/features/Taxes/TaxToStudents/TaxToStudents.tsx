import { Delete } from '@mui/icons-material';
import { Box, IconButton, Tooltip } from '@mui/material';
import MaterialReactTable, {
    MRT_ColumnDef,
    MRT_Row,
} from 'material-react-table';
import { FC, useCallback, useMemo } from 'react';
import { TaxToStudent } from '../../../model/Taxes';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { removeTaxToStudent } from '../../../store/user/generalSlice';

export type Person = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    state: string;
};

const TaxToStudents: FC = () => {
    const taxesToStudents = useAppSelector(
        (state) => state.general.taxesToStudents
    );
    console.log(
        '🚀 ~ file: TaxToStudents.tsx:25 ~ taxesToStudents',
        taxesToStudents
    );
    // const taxes = useAppSelector((state) => state.general.taxes);
    // const stude = useAppSelector((state) => state.general.taxes);

    const dispatch = useAppDispatch();

    const handleDeleteRow = useCallback(
        (row: MRT_Row<TaxToStudent>) => {
            if (
                !window.confirm(
                    `Are you sure you want to delete ${row.getValue(
                        'tax.name'
                    )} ~ ${row.getValue('student.email')}`
                )
            ) {
                return;
            }
            //send api delete request here, then refetch or update local table data for re-render

            console.log(
                '🚀 ~ file: TaxToStudents.tsx:50 ~ taxesToStudents[row.index]',
                taxesToStudents[row.index]
            );
            dispatch(
                removeTaxToStudent({
                    taxId: taxesToStudents[row.index].tax.id,
                    studentId: taxesToStudents[row.index].student.id,
                })
            );
        },
        [taxesToStudents]
    );

    const columns = useMemo<MRT_ColumnDef<TaxToStudent>[]>(
        () => [
            {
                accessorKey: 'tax.name',
                header: 'Tax Name',
                size: 140,
            },
            {
                accessorKey: 'tax.price',
                header: 'Tax Price',
                size: 140,
            },
            {
                accessorKey: 'student.id',
                header: 'Student Id',
            },
            {
                accessorKey: 'student.email',
                header: 'Student Email',
                size: 80,
            },

            {
                accessorKey: 'status',
                header: 'Payment Status',
                size: 80,
                enableEditing: false,
            },
        ],
        []
    );

    return (
        <>
            <MaterialReactTable
                columns={columns}
                data={taxesToStudents}
                editingMode='modal' //default
                enableColumnOrdering
                enableEditing
                renderRowActions={({ row, table }) => (
                    <Box sx={{ display: 'flex', gap: '1rem' }}>
                        <Tooltip arrow placement='right' title='Delete'>
                            <IconButton
                                color='error'
                                onClick={() => {
                                    handleDeleteRow(row);
                                }}
                            >
                                <Delete />
                            </IconButton>
                        </Tooltip>
                    </Box>
                )}
            />
        </>
    );
};

export default TaxToStudents;
