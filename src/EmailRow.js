import React from 'react';
import './EmailRow.css';
import {Checkbox, IconButton} from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {useHistory} from 'react-router-dom';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { selectMail } from './features/mailSlice';
import {useDispatch} from 'react-redux';
function EmailRow({id,title,subject,description,time}) {
const history=useHistory();
const dispatch=useDispatch();
const openMail=()=>{
    dispatch(selectMail({
        id,title,subject,description,time,
    })
    );
    history.push("/mail");
}
return (
<div onClick={openMail}
 className="emailRow">
<div className="emailRow__option">
<Checkbox  className="emailRow__options"/>
<IconButton>
<StarBorderIcon className="emailRow__options"/>
</IconButton>
<IconButton>
<LabelImportantIcon className="emailRow__option1"/>
</IconButton>
</div>
<h3 className="emailRow__title">
{title}</h3>
<div className="emailRow__message">
<h4>{subject}<span>
<div className="emailRow__description">
{description}</div></span></h4></div>
<p className="emailRow__time">
{time}</p>

</div>
)
}

export default EmailRow;
