import React from 'react';
import {Input,Button,Icon} from 'antd';

export default ({onPress,value}) => (
  <div className="example-input">
    <Input size="large" placeholder="输入内容" onPressEnter={onPress} defaultValue={value} />
    <Button type="primary" shape="circle" onClick={onPress} value={value} style={{height:45,width:45,marginLeft:10}}><Icon type="plus" style={{fontSize:30}} /></Button>
    {/* <Icon type="plus-square-o" /> */}
  </div>
)
