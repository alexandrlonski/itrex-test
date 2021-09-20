import { FC } from 'react';
import './style.scss';
import { TableHead } from './TableHead';
import { TableBody } from './TableBody';


const UserTable: FC = () => {

  return (
    <div className="table">
      <TableHead />
      <TableBody />
    </div >
  );
};

export default UserTable;
