import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, button } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { ConfirmButton } from '../src/ConfirmButton/confirmButton';

const stories = storiesOf('ConfirmButton', module);

stories.add(
  'basic',
  withInfo({
    inline: true,
    text: '删除确定按钮',
  })(() => (
    <ConfirmButton
      text={text('test', '确定要删除吗')}
      buttonText={text('butn', '删除')}
      confirm={() => {
        console.log('test');
      }}
    />
  )),
);
