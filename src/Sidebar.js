import React from 'react';
import './Sidebar.css';
import AddIcon from '@material-ui/icons/Add';
import {Button,IconButton} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import SidebarOption from './SidebarOption';
import StarIcon from '@material-ui/icons/Star';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import SendIcon from '@material-ui/icons/Send';
import NoteIcon from '@material-ui/icons/Note';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import DuoIcon from '@material-ui/icons/Duo';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import {useDispatch} from 'react-redux';
import {openSendMessage} from './features/mailSlice';
function Sidebar() {
const dispatch = useDispatch();
    return (
<div className="sidebar">
<Button 
startIcon={<AddIcon fontSize='large'/>} 
className="sidebar__compose"
onClick={()=>dispatch(openSendMessage())}>Compose
</Button>
<SidebarOption Icon={InboxIcon} title="Inbox"
number={1024} selected={true}/>

<SidebarOption Icon={StarIcon} title="Starred"
number={54} />

<SidebarOption Icon={LabelImportantIcon} title="Important"
number={5} />

<SidebarOption Icon={WatchLaterIcon} title="Snoozed"/>

<SidebarOption Icon={SendIcon} title="Sent"
/>

<SidebarOption Icon={NoteIcon} title="Drafts"
number={25} />

<SidebarOption Icon={ExpandMoreIcon} title="More"
/>
<div className="sidebar__footer">
<div className="sidebar__footerIcons">
<IconButton>
<PersonIcon />
</IconButton>
<IconButton>
<DuoIcon />
</IconButton>
<IconButton>
<PhoneIcon />
</IconButton>
</div>
</div>
</div>
    )
}

export default Sidebar
