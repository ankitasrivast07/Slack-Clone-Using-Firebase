import React, { useState} from 'react'
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { db } from '../firebase';
import firebase from "firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import { auth } from '../firebase'


function ChatInput({channelName, channelId, chatRef}) {
    const [user] = useAuthState(auth);
  const [message, setMessage] = useState('');
    const sendMessage=(e)=>{
        e.preventDefault(); //prevent referesh

        if(!channelId){
            return false;
        }
        db.collection("rooms").doc(channelId).collection("messages").add({
            message: message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
         
            user: user.displayName,
            userImage: user.photoURL,
        })
        chatRef.current.scrollIntoView({
            behaviour: "smooth",
          });
        setMessage("");
    }
    return (
        <ChatInputContainer>
           <form>
               <input value={message} 
               onChange={(e)=>setMessage(e.target.value)}
               placeholder={`Message #${channelName}`}/>
               <Button hidden type='submit' onClick={sendMessage}>
                 SEND
               </Button>
           </form> 
        </ChatInputContainer>
    )
}

export default ChatInput;

const ChatInputContainer= styled.div`   
border-radius:20px;

>form{
    position: relative;
    display:flex;
    justify-content:center;
}
> form > input{
position:fixed;
bottom:30px;
width:80%;
border: 1px solid gray;
border-radius:3px;padding:20px;
outline:none;
}

> form > Button{
    display:none!important;
}
`;
