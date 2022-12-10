import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
interface IProps {
  children?: ReactNode;
}

const Discover: FC<IProps> = (props) => {
  return (
    <div>
      <div>Template</div>
    </div>
  );
};
export default memo(Discover);
