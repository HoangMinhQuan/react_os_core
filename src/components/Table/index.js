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

function createRow({ stt, ndcv, kkcd, ldkt, ldpt, vl, ccdc, nl }) {
  return { stt, ndcv, kkcd, ldkt, ldpt, vl, ccdc, nl };
}

function creatTitle ({title}) {
  return {title}
}


const mockData = {
  index1: {
    title: [{title: "Thi công hố"}],
    list: [{ stt: 1.1, ndcv: 'Khoảng cách di chuyển đến các hố 0-100m', kkcd: 'Đất đá cấp I-III', ldkt: 305.646, ldpt: 0, vl: 0, ccdc: 903, nl: 111 },
    { stt: 1.2, ndcv: 'Khoảng cách di chuyển đến các hố 0-100m', kkcd: 'Đất đá cấp I-III', ldkt: 305.646, ldpt: 0, vl: 0, ccdc: 903, nl: 111 },
    { stt: 1.3, ndcv: 'Khoảng cách di chuyển đến các hố 0-100m', kkcd: 'Đất đá cấp I-III', ldkt: 305.646, ldpt: 0, vl: 0, ccdc: 903, nl: 111 },
    { stt: 1.4, ndcv: 'Khoảng cách di chuyển đến các hố 0-100m', kkcd: 'Đất đá cấp I-III', ldkt: 305.646, ldpt: 0, vl: 0, ccdc: 903, nl: 111 }]
  },
  index2: {
    title: [{title: "Thi công hố 2"}],
      list: [{ stt: 2.1, ndcv: 'Khoảng cách di chuyển đến các hố 0-100m', kkcd: 'Đất đá cấp I-III', ldkt: 305.646, ldpt: 0, vl: 0, ccdc: 903, nl: 111 },
    { stt: 2.2, ndcv: 'Khoảng cách di chuyển đến các hố 0-100m', kkcd: 'Đất đá cấp I-III', ldkt: 305.646, ldpt: 0, vl: 0, ccdc: 903, nl: 111 },
    { stt: 2.3, ndcv: 'Khoảng cách di chuyển đến các hố 0-100m', kkcd: 'Đất đá cấp I-III', ldkt: 305.646, ldpt: 0, vl: 0, ccdc: 903, nl: 111 },
    { stt: 2.4, ndcv: 'Khoảng cách di chuyển đến các hố 0-100m', kkcd: 'Đất đá cấp I-III', ldkt: 305.646, ldpt: 0, vl: 0, ccdc: 903, nl: 111 }]
  }
}


const rows1 = mockData.index1.list.map(item => createRow(item))

const rows2 = mockData.index2.list.map(item => createRow(item))

const titleRow1 = mockData.index1.title.map(item => creatTitle(item))

const titleRow2 = mockData.index2.title.map(item => creatTitle(item))


class TableComponent extends Component {
 

  render() {

    const { classes } = this.props;

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

            {titleRow1.map(row => (
              <TableRow>
                <TableCell className={classes.borderColum} align="center">1</TableCell>
                <TableCell className={classes.borderColum} align="left" colSpan={7}>{row.title}</TableCell>
              </TableRow>
            ))}

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

            {titleRow2.map(row => (
              <TableRow>
                <TableCell className={classes.borderColum} align="center">2</TableCell>
                <TableCell className={classes.borderColum} align="left" colSpan={7}>{row.title}</TableCell>
              </TableRow>
            ))}

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
export default withStyles(useStyles)(TableComponent);

