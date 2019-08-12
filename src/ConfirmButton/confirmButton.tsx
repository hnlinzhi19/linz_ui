import React, { FC } from 'react';
import Button, { ButtonProps } from 'antd/lib/button';
import Popconfirm from 'antd/lib/popconfirm';

import 'antd/lib/button/style/css/';
import 'antd/lib/popconfirm/style/css/';

interface IComp {
  okText?: string;
  cancelText?: string;
  buttonTypes?: ButtonProps;
  text: string;
  buttonText: string;
  confirm: () => void;
}

export const ConfirmButton: FC<IComp> = ({
  text,
  confirm,
  okText,
  cancelText,
  buttonText,
  buttonTypes
}) => {
  return (
    <Popconfirm
      title={text}
      onConfirm={confirm}
      okText={okText || '确定'}
      cancelText={cancelText || '取消'}>
      <Button type='danger' {...buttonTypes}>{buttonText}</Button>
    </Popconfirm>
  );
};
