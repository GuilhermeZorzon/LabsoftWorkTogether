import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'name', label: 'Nome', minWidth: 95 },
  { id: 'contact', label: 'Contato', minWidth: 95 },
  {
    id: 'specialty',
    label: 'Especialidade',
    minWidth: 95,
    align: 'right',
    format: value => value.toLocaleString(),
  },
  {
    id: 'price',
    label: 'R$/hora',
    minWidth: 95,
    align: 'right',
    format: value => value.toLocaleString(),
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 95,
    align: 'right',
    format: value => value.toFixed(2),
  },
];

function createData(name, contact, specialty, price, status) {
  return { name, contact, specialty, price, status };
}

const rows = [
    createData('Guilherme', 'gui@usp', 'Backend', '25,00', 'Disponível' ),
    createData('Dudu', 'dudu@usp', 'FrontEnd', '20,00', 'Disponível' ),
    createData('Paulo de Paula', 'p.paula@usp', 'Backend', '15,00', 'Em serviço' ),
    createData('Guilherme', 'gui@usp', 'Backend', '25,00', 'Disponível' ),
    createData('Dudu', 'dudu@usp', 'FrontEnd', '20,00', 'Disponível' ),
    createData('Paulo de Paula', 'p.paula@usp', 'Backend', '15,00', 'Em serviço' ),
    createData('Guilherme', 'gui@usp', 'Backend', '25,00', 'Disponível' ),
    createData('Dudu', 'dudu@usp', 'FrontEnd', '20,00', 'Disponível' ),
    createData('Paulo de Paula', 'p.paula@usp', 'Backend', '15,00', 'Em serviço' ),
    createData('Guilherme', 'gui@usp', 'Backend', '25,00', 'Disponível' ),
    createData('Dudu', 'dudu@usp', 'FrontEnd', '20,00', 'Disponível' ),
    createData('Guilherme', 'gui@usp', 'Backend', '25,00', 'Disponível' ),
    createData('Dudu', 'dudu@usp', 'FrontEnd', '20,00', 'Disponível' ),
    createData('Paulo de Paula', 'p.paula@usp', 'Backend', '15,00', 'Em serviço' ),
    createData('Guilherme', 'gui@usp', 'Backend', '25,00', 'Disponível' ),
    createData('Dudu', 'dudu@usp', 'FrontEnd', '20,00', 'Disponível' ),
    createData('Paulo de Paula', 'p.paula@usp', 'Backend', '15,00', 'Em serviço' ),
    createData('Guilherme', 'gui@usp', 'Backend', '25,00', 'Disponível' ),
    createData('Dudu', 'dudu@usp', 'FrontEnd', '20,00', 'Disponível' ),
    createData('Paulo de Paula', 'p.paula@usp', 'Backend', '15,00', 'Em serviço' ),
    createData('Guilherme', 'gui@usp', 'Backend', '25,00', 'Disponível' ),
    createData('Dudu', 'dudu@usp', 'FrontEnd', '20,00', 'Disponível' ),
    createData('Guilherme', 'gui@usp', 'Backend', '25,00', 'Disponível' ),
    createData('Dudu', 'dudu@usp', 'FrontEnd', '20,00', 'Disponível' ),
    createData('Paulo de Paula', 'p.paula@usp', 'Backend', '15,00', 'Em serviço' ),
    createData('Guilherme', 'gui@usp', 'Backend', '25,00', 'Disponível' ),
    createData('Dudu', 'dudu@usp', 'FrontEnd', '20,00', 'Disponível' ),
    createData('Paulo de Paula', 'p.paula@usp', 'Backend', '15,00', 'Em serviço' ),
    createData('Guilherme', 'gui@usp', 'Backend', '25,00', 'Disponível' ),
    createData('Dudu', 'dudu@usp', 'FrontEnd', '20,00', 'Disponível' ),
    createData('Paulo de Paula', 'p.paula@usp', 'Backend', '15,00', 'Em serviço' ),
    createData('Guilherme', 'gui@usp', 'Backend', '25,00', 'Disponível' ),
    createData('Dudu', 'dudu@usp', 'FrontEnd', '20,00', 'Disponível' ),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  tableWrapper: {
    maxHeight: 500,
    overflow: 'auto',
  },
});

const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: '#999999',
      fontWeight: 'bold',
    },
  }))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(even)': {
            backgroundColor: '#E0E0E0',
        },
    },
  }))(TableRow);

export default function TalentTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <StyledTableRow>
              {columns.map(column => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => {
              return (
                <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    const value = row[column.id];
                    return (
                      <StyledTableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </StyledTableCell>
                    );
                  })}
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </Paper>
  );
}