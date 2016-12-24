import React from 'react';
import { Table, Icon } from 'antd';
const { Column, ColumnGroup } = Table;

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User',    // Column configuration not to be checked
  }),
};

const columns = [{
  title: '时间',
  dataIndex: 'time',
  key: 'time',
}, {
  title: '内容',
  dataIndex: 'content',
  key: 'content',
}];

export default ({dataSource})=>(
  <Table
    dataSource={dataSource}
    columns={columns}
    pagination={false}
    rowSelection={rowSelection}
    bordered
  />
)
