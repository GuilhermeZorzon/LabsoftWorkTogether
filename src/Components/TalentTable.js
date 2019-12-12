import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import Typography from '@material-ui/core/Typography';
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
      backgroundColor: '#353535',
      color: 'white',
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

export const TalentTable = (props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Typography align="center" className={classes.title} variant="h5" style={{backgroundColor: '#353535', color: 'white'}}>
          Talentos
        </Typography>
        <hr style={{margin: '0px', color: '#c5c5c5'}}></hr>
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
            {props.rows.map(row => {
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