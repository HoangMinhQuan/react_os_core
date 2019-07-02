import React, { Component } from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const TAX_RATE = 0.07;

const mockData = {
  list: [{stt: 1.1, ndcv: 'Khoảng cách di chuyển đến các hố 0-100m', kkcd: 'Đất đá cấp I-III', ldkt: 305.646, ldpt: 0, vl: 0, ccdc: 903, nl: 111}, 
  {stt: 1.1, ndcv: 'Khoảng cách di chuyển đến các hố 0-100m', kkcd: 'Đất đá cấp I-III', ldkt: 305.646, ldpt: 0, vl: 0, ccdc: 903, nl: 111}, 
  {stt: 1.1, ndcv: 'Khoảng cách di chuyển đến các hố 0-100m', kkcd: 'Đất đá cấp I-III', ldkt: 305.646, ldpt: 0, vl: 0, ccdc: 903, nl: 111}, 
  {stt: 1.1, ndcv: 'Khoảng cách di chuyển đến các hố 0-100m', kkcd: 'Đất đá cấp I-III', ldkt: 305.646, ldpt: 0, vl: 0, ccdc: 903, nl: 111}]
}

const useStyles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
    border: '1px',
  },
  borderColum: {
    border: '1px solid rgba(0, 0, 0, 1)',
    padding: '14px 14px 14px 14px',
    color: 'rgba(0, 0, 0, 1)',
  }
});

function createRow1({stt, ndcv, kkcd, ldkt, ldpt, vl, ccdc, nl}) {
  return { stt, ndcv, kkcd, ldkt, ldpt, vl, ccdc, nl};
}

function createRow2(stt, ndcv, kkcd, ldkt, ldpt, vl, ccdc, nl) {
  return { stt, ndcv, kkcd, ldkt, ldpt, vl, ccdc, nl};
}

const rows1 = mockData.list.map(item => createRow1(item))

const rows2 = [
  createRow2(2.1, 'Khoảng cách di chuyển đến các hố 0-100m', 'Đất đá cấp I-III', 305.646, 0, 0, 903, 0),
  createRow2(2.2, 'Khoảng cách di chuyển đến các hố 100-200m', 'Đất đá cấp IV', 370.557, 0, 0, 1084, 0),
  createRow2(2.3, 'Khoảng cách di chuyển đến các hố 100-200m', 'Đất đá cấp I-III', 317.401, 0, 0, 773, 0),
  createRow2(2.4, 'Khoảng cách di chuyển đến các hố 200-300m', 'Đất đá cấp IV', 382.313, 0, 0, 1111, 0),
  createRow2(2.5, 'Khoảng cách di chuyển đến các hố 200-300m', 'Đất đá cấp I-III', 382.333, 0, 0, 1003, 0),
];

class TableComponent extends Component {
  
  render(){

    const { classes } = this.props;
    console.log("classes", classes);

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead >
            <TableRow>
              <TableCell className={classes.borderColum} align="center" rowSpan={3}>#</TableCell>
              <TableCell className={classes.borderColum} align="center" rowSpan={3}>Nội dung công việc</TableCell>
              <TableCell className={classes.borderColum} align="center" rowSpan={3}>Khó khăn, chức danh</TableCell>
              <TableCell className={classes.borderColum} align="center" colSpan={5}>Chi phí trực tiếp</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className={classes.borderColum} align="center" colSpan={2}>Chi phí phân công</TableCell>
              <TableCell className={classes.borderColum} align="center" rowSpan={3}>Vật liệu</TableCell>
              <TableCell className={classes.borderColum} align="center" rowSpan={3}>Công cụ, công dụng</TableCell>
              <TableCell className={classes.borderColum} align="center" rowSpan={3}>Năng lượng</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className={classes.borderColum} align="center" >LĐKT</TableCell>
              <TableCell className={classes.borderColum} align="center" >LĐPT</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
                <TableCell className={classes.borderColum} align="center">1</TableCell>
                <TableCell className={classes.borderColum} align="left" colSpan={7}>Thi công hố</TableCell>
            </TableRow>

              {rows1.map(row => (
                <TableRow>
                  <TableCell className={classes.borderColum} align="center">{row.stt}</TableCell>
                  <TableCell className={classes.borderColum} align="center">{row.ndcv}</TableCell>
                  <TableCell className={classes.borderColum} align="center">{row.kkcd}</TableCell>
                  <TableCell className={classes.borderColum} align="center">{row.ldkt}</TableCell>
                  <TableCell className={classes.borderColum} align="center">{row.ldpt}</TableCell>
                  <TableCell className={classes.borderColum} align="center">{row.vl}</TableCell>
                  <TableCell className={classes.borderColum} align="center">{row.ccdc}</TableCell>
                  <TableCell className={classes.borderColum} align="center">{row.nl}</TableCell>
                </TableRow>
              ))}

            <TableRow>
                <TableCell className={classes.borderColum} align="center">2</TableCell>
                <TableCell className={classes.borderColum} align="left" colSpan={7}>Thi công hố 2</TableCell>
            </TableRow>

            {rows2.map(row => (
                <TableRow>
                  <TableCell className={classes.borderColum} align="center">{row.stt}</TableCell>
                  <TableCell className={classes.borderColum} align="center">{row.ndcv}</TableCell>
                  <TableCell className={classes.borderColum} align="center">{row.kkcd}</TableCell>
                  <TableCell className={classes.borderColum} align="center">{row.ldkt}</TableCell>
                  <TableCell className={classes.borderColum} align="center">{row.ldpt}</TableCell>
                  <TableCell className={classes.borderColum} align="center">{row.vl}</TableCell>
                  <TableCell className={classes.borderColum} align="center">{row.ccdc}</TableCell>
                  <TableCell className={classes.borderColum} align="center">{row.nl}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
export default withStyles(useStyles)(TableComponent) ;

