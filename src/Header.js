import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import {Avatar,IconButton} from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import {useDispatch,useSelector} from 'react-redux';
import {logout,selectUser} from './features/userSlice';
import {auth} from './firebase';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
function Header() {
    const user= useSelector(selectUser);
    const dispatch=useDispatch();
    const signOut=()=>{
      auth.signOut().then(()=>{
          dispatch(logout())
      });

    };
return (
<div className="header">
<div className="header__left">
<IconButton>
<MenuIcon className="header__menu"/> 
</IconButton>
<img 
src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r2.png" 
alt="gmail"
/></div>
<div className="header__middle">
<SearchIcon />
<input placeholder="Search mail" type="text"/>
<ArrowDropDownIcon className="header__inputCaret"/>
</div>
<div className="header__right">
<IconButton>
<HelpOutlineIcon className="header__rightIcon" />
</IconButton>
<IconButton>
<SettingsIcon className="header__rightIcon" />
</IconButton>
<IconButton>
<AppsIcon className="header__rightIcon" /> 
</IconButton>
<IconButton>
<Avatar onCliock={signOut} className="header__rightIcon" 
src={user?.photoUrl}/>
</IconButton>
</div>
</div>
)
}
export default Header;
