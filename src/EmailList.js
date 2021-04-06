import React, {useState,useEffect} from 'react'
import './EmailList.css';
import EmailRow from './EmailRow';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import {Checkbox, IconButton} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
// import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import Section from './Section';
import PeopleIcon from '@material-ui/icons/People';
import InboxIcon from '@material-ui/icons/Inbox';
import {db} from './firebase';
function EmailList() {
    const[emails,setEmails]=useState([]);
    useEffect(() => {
      db.collection("emails").orderBy("timestamp","desc")
      .onSnapshot((snapshot)=>
      setEmails(
          snapshot.docs.map((doc)=>
          ({
          id:doc.id,
          data:doc.data(),
      }))
      )
      );
    }, [])
return (
<div className="emailList">
<div className="emailList__settings">
<div className="emailList__settingsLeft">
<Checkbox/>
<IconButton>
<ArrowDropDownIcon />
</IconButton>
<IconButton>
<RedoIcon />
</IconButton>
<IconButton>
<MoreVertIcon/>
</IconButton>
</div>
<div className="emailList__settingsRight">
<IconButton>
<ChevronLeftIcon/>
</IconButton>
<IconButton>
<ChevronRightIcon/>
</IconButton>
</div>
</div>
<div className="emailList__sections">
<Section Icon={InboxIcon} title='Primary' 
color='red' selected={true}/>
<Section Icon={PeopleIcon} title='Social' 
color='#1a73e8'/>
<Section Icon={LocalOfferIcon} title='Promotions' 
color='green'/>
</div>
<div className="emailList__list">
{emails.map(({id,data:{to,subject,message,timestamp
}}) =>(
    <EmailRow
    id={id}
    key={id}
    title={to}
    subject={subject}
    description={message}
    time={new Date(timestamp?.seconds * 1000).toUTCString}
    />
))}
<EmailRow title="insta"
subject="follow me there"
description="for testing purpose
for testing purpose
for testing purpose"
time="10pm"/>
<EmailRow title="insta"
subject="follow me there"
description="for testing purpose
for testing purpose"
time="10pm"/>
</div>
</div>
)
}

export default EmailList
