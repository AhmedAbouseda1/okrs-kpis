import React from 'react';
import BackdropLoader from "../../Layouts/BackdropLoader";
import {IconButton} from "@mui/material";
import TrendingUp from '@mui/icons-material/TrendingUp';
import {useSelector} from "react-redux";
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {TrendingDown} from "@material-ui/icons";

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(
    name: string,
    nameAr: string,
    result: number,
    upOrDown: number,
) {
    return {name, nameAr, result, upOrDown};
}

const rows = [
    createData('Cost per User',
        'التكلفة لكل مستفيد ',
        24407,
        1.5),
    createData('Cost per Download',
        'التكلفة لكل عملية تحميل  ',
        121,
        1),
    createData('Ratio of Acquisition Expenditures to Staff Costs',
        'معدل الإنفاق على التزويد مقابل تكلفة العاملين',
        2322,
        3.5),
    createData('Percentage of Institutional Means Allocated to the Library',
        'نسبة الموارد المالية المؤسسية المخصصة للمكتبة',
        2322,
        1.5),
    createData('Percentage of Library Means Received by Special Grant or Income Generated',
        'النسبة المئوية للموارد المالية للمكتبة المتلقاة بمنحة خاصة أو الدخل المُتولد (المتحقق)',
        23,
        -2),

];


const EconomicImpact = () => {
    const {loading} = useSelector((state) => state.product);
    return (
        <>
            {loading && <BackdropLoader/>}

            <TableContainer component={Paper}>
                <Table sx={{minWidth: 700}} aria-label="customized table">
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}<br/>{row.nameAr}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.result}</StyledTableCell>
                                <StyledTableCell align="right">
                                    <IconButton title={row.upOrDown}>
                                        {row.upOrDown > 0 ? (
                                                <TrendingUp className="text-green-800"/>
                                            )
                                            : (
                                                <TrendingDown className="text-red-700"/>
                                            )}
                                    </IconButton>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default EconomicImpact;