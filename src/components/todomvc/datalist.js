import React from 'react';
import { Table, Icon } from 'antd';
const { Column, ColumnGroup } = Table;

const data = [{
  key: '1',
  firstName: 'John',
  lastName: 'Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  firstName: 'Jim',
  lastName: 'Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}];


export default ()=>(
  <Table dataSource={data} bordered>
    <Column
      title="First Name"
      dataIndex="firstName"
      key="firstName"
    />
    <Column
      title="Age"
      dataIndex="age"
      key="age"
    />
    <Column
      title="Content"
      key="address"
      dataIndex="address"
    />
  </Table>
)
