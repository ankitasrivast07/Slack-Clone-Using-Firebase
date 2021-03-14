import React from 'react'
import styled from 'styled-components';
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
import CreateIcon from "@material-ui/icons/Create"
import SideNavAlternative from './SideNavAlternative';
import InsertCommentIcon from "@material-ui/icons/InsertComment"
import InboxIcon from "@material-ui/icons/Inbox"
import DraftsIcon from "@material-ui/icons/Drafts"
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder"
import FileCopyIcon from "@material-ui/icons/FileCopy"
import PeopleAltIcon from "@material-ui/icons/PeopleAlt"
import AppsIcon from "@material-ui/icons/Apps"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import AddIcon from "@material-ui/icons/Add"
import { db } from '../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../firebase";

function SideNav() {
const[channels] =useCollection(db.collection("rooms"));
const [user] =useAuthState(auth);
    return (
        <SideNavContainer>
        <SideNavHeader>
         <SideNavContent>
         <h2>XYZ Company</h2>
         <h3>
           <FiberManualRecordIcon/>
             {user?.displayName}
         </h3>
         </SideNavContent>
         <CreateIcon/>
         </SideNavHeader>
       <SideNavAlternative Icon={InsertCommentIcon} title="Threads"/>
       <SideNavAlternative Icon={InboxIcon} title="Mentions & reactions"/>
       <SideNavAlternative Icon={DraftsIcon} title="Saved items"/>
       <SideNavAlternative Icon={BookmarkBorderIcon} title="Channel browser"/>
       <SideNavAlternative Icon={PeopleAltIcon} title="People & user groups"/>
       <SideNavAlternative Icon={AppsIcon} title="Apps"/>
       <SideNavAlternative Icon={FileCopyIcon} title="File browser"/>
       <SideNavAlternative Icon={ExpandLessIcon} title="Show less"/>
       <hr/>
       <SideNavAlternative Icon={ExpandMoreIcon} title="Channels"/>
        <hr />
       <SideNavAlternative Icon={AddIcon} addChannelOption title="Add channels"/>

       {channels?.docs.map(doc=> (
       <SideNavAlternative key={doc.id} id={doc.id}  title={doc.data().name}/>

       ))}

        </SideNavContainer>
    )
}

export default SideNav;

const SideNavContainer = styled.div`
flex:0.3;
color:white;
background-color:var(--slack-color);
border-top: 1px solid #49274b;
max-width:260px;
margin-top:60px;

>hr{
    margin-top:10px;
    margin-bottom:10px;
    border: 1px solid #49274b;
}
`;

const SideNavHeader  = styled.div`
display:flex;
border-top: 1px solid #49274b;
padding:13px;

>.MuiSvgIcon-root{
    padding:8px;
    color:#49274b;
    font-size:18px;
    background-color:white;
    border-radius:999px;
}
`;

const SideNavContent  = styled.div`
flex:1;
> h2{
    font-size:15px;
    font-weight:900;
    margin-bottom:5px;
}
>h3{
    display:flex;
    font-size:13px;
    font-weight:400;
    align-items:center;
}
> h3 > .MuiSvgIcon-root{
    font-size:14px;
    margin-top:1px;
    margin-right:2px;
    color:green;
}

`;
