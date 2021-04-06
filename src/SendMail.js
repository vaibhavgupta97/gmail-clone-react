import React from 'react';
import './SendMail.css';
import {Button} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useForm } from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {closeSendMessage} from './features/mailSlice';
import {db} from "./firebase";
import firebase from 'firebase';
function SendMail() {
const { register, handleSubmit, errors } = useForm();
const dispatch = useDispatch(); 
const onSubmit=(formData)=>{
    console.log(formData);
    db.collection("emails").add({
to:formData.to,
subject:formData.subject,
message:formData.message,
timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        }
    )
    dispatch(closeSendMessage());
}
return (
<div className="sendMail">
<div className="sendMail__header">
<h3>New Message</h3>
<CloseIcon className="semdMail__close"
onClick={()=>dispatch(closeSendMessage())}/>
</div>
<form onSubmit={handleSubmit(onSubmit)} >
<input name="to" placeholder="To:" type="email" 
style={{border: "none"}}
ref={register({required:true})}/>
{errors.to && <p className="sendMail__error">
To is required</p>}
<input name="subject" placeholder="Subject" type="text"
style={{border: "none"}}
ref={register({required:true})}/>
{errors.subject && <p className="sendMail__error">
Subject is required</p>}
<input  name="message" 
style={{border: "none"}}
placeholder="Message..." 
type="text"
ref={register({required:true})}
className="sendMail__message"/>
{errors.message && <p className="sendMail__error">
Message is required</p>}
<div className="sendMail__options">
<Button 
className="sendMail__send"
color="primary"
type="submit"
variant="contained">Send</Button>
</div>
</form>
</div>
)
}
export default SendMail;