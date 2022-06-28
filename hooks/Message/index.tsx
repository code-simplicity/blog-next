/*
 * @Author: bugdr
 * @Date: 2022-06-28 08:55:19
 * @LastEditors: bugdr
 * @LastEditTime: 2022-06-28 09:56:14
 * @FilePath: \blog-next\hooks\Message\index.tsx
 * @Description:消息提示封装的hooks
 */
import type { MantineNumberSize } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { BsFillCheckCircleFill, BsFillInfoCircleFill } from 'react-icons/bs';
import { RiCloseCircleFill, RiErrorWarningFill } from 'react-icons/ri';

interface NotificationProps {
  id?: string;
  color?: string;
  radius?: MantineNumberSize;
  className?: string;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  loading?: boolean;
  message: React.ReactNode;
  autoClose?: boolean | number;
  disallowClose?: boolean;
  onClose?(props: NotificationProps): void;
  onOpen?(props: NotificationProps): void;
}

export declare type NotificationPlacement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
export declare type IconType = 'success' | 'default' | 'error' | 'warning';

export interface ModalOptionsEx extends Omit {
  iconType: 'warning' | 'success' | 'error' | 'default';
}

// 获取icon
function getIcon(iconType: any = 'success'): React.ReactNode {
  if (iconType === 'warning') return <RiErrorWarningFill />;
  if (iconType === 'success') return <BsFillCheckCircleFill />;
  if (iconType === 'default') return <BsFillInfoCircleFill />;
  if (iconType === 'error') return <RiCloseCircleFill />;
}

// 展示提示框
const useNotifications = (option: NotificationProps) => {
  return showNotification({
    id: option.id,
    disallowClose: true,
    onClose: () => console.log('unmounted'),
    autoClose: 3000, // 自动关闭
    title: option.title,
    message: option.message,
    color: 'red',
    icon: getIcon(option.icon),
    loading: option.loading ? true : false,
  });
};

// 消息提示的封装
export function useMessage() {
  return {
    useNotifications,
  };
}
