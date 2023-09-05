import React, { useState } from 'react';
import dotsImg from '../../images/dots.png';
import { Menu, MenuItem } from '@mui/material';

function ActionMenu(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isActionsMenuOpen, setIsActionsMenuOpen] = useState(false);

  const onClickHanlder = (e) => {
    if (isActionsMenuOpen) {
      setAnchorEl(null);
      setIsActionsMenuOpen(false);
      return;
    }
    setAnchorEl(e.currentTarget);
    setIsActionsMenuOpen(true);
  };
  return (
    <>
      <div
        className='overflow-hidden bg-slate-200 p-1 rounded-full cursor-pointer hover:bg-slate-300'
        onClick={onClickHanlder}
      >
        <img width={20} src={dotsImg} alt='menu' />
      </div>
      <Menu
        id='long-menu'
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={isActionsMenuOpen}
        onClose={onClickHanlder}
      >
        {['action 1', 'action 2'].map((option, idx) => (
          <MenuItem key={`option-${idx}`} onClick={onClickHanlder}>
            <span>{option}</span>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default ActionMenu;
