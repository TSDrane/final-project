import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import styles from "./splitbutton.module.css"

export default function SplitButton({ mealCategories, mealCategoryFetchFunctions }) {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const resetView = () => {
        window.scrollTo ({
            top:0,
            behaviour: "smooth"
        });
    }; 

    const handleClick = () => {
        mealCategoryFetchFunctions[selectedIndex]();
        resetView();
    };

    const handleMenuItemClick = (index) => {
    setSelectedIndex(index);
    setOpen(false);
    mealCategoryFetchFunctions[index](); 
    resetView();   
    };

    const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
    }

    setOpen(false);
    };

    return (
    <React.Fragment>
        <ButtonGroup
        variant="contained"
        ref={anchorRef}
        aria-label="Button group with a nested menu"
        >
        <Button className={styles.splitButton} onClick={handleClick}>{mealCategories[selectedIndex]}</Button>
        <Button
            size="small"
            aria-controls={open ? 'split-button-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={handleToggle}
        >
            <ArrowDropDownIcon />
        </Button>
        </ButtonGroup>
        <Popper
        sx={{
            zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        >
        {({ TransitionProps, placement }) => (
            <Grow
            {...TransitionProps}
            style={{
                transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
            >
            <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                    {mealCategories.map((mealCategory, index) => (
                    <MenuItem
                        key={mealCategory}
                        selected={index === selectedIndex}
                        onClick={() => handleMenuItemClick(index)}
                    >
                        {mealCategory}
                    </MenuItem>
                    ))}
                </MenuList>
                </ClickAwayListener>
            </Paper>
            </Grow>
        )}
        </Popper>
    </React.Fragment>
    );
}
