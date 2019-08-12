import { FC } from 'react';
import { ButtonProps } from 'antd/lib/button';
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
export declare const ConfirmButton: FC<IComp>;
export {};
