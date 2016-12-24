import React from 'react';
import {Input} from 'antd';
import '../../style/todo.scss'

export default ({onPress}) => (
  <div className="example-input">
    <Input size="large" placeholder="large size" onPressEnter={onPress}/>
  </div>
)
