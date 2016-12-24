import React from 'react';
import {Input} from 'antd';

export default ({onPress,value}) => (
  <div className="example-input">
    <Input size="large" placeholder="输入内容" onPressEnter={onPress} />
  </div>
)
