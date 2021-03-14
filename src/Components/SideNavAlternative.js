import React from 'react'
import styled  from 'styled-components';
import { db } from '../firebase';
import {useDispatch} from 'react-redux';
import { enterRoom } from '../features/appSlice';


function SideNavAlternative({Icon, title, addChannelOption, id}) {
const dispatch = useDispatch();
const addChannel = () =>{
    const channelName= prompt("Enter channel name");

    if(channelName){
        db.collection("rooms").add({
            name: channelName,
        });
    }

}
const selectChannel = () =>{
    if(id){
        dispatch(enterRoom({
            roomId: id,
        }))
    }
}

    return (
        <SideNavAlternativeContainer
        onClick={addChannelOption ? addChannel : selectChannel}
        >
           {Icon && <Icon fontsize="small" style={{padding:10}}  />} 
           {Icon ? (
          <h3>{title}</h3>
           ): (
             <SideNavAlternativeChannel>
                 <span>#</span>{title}
             </SideNavAlternativeChannel>
           )}
        </SideNavAlternativeContainer>
    )
}

export default SideNavAlternative;

const SideNavAlternativeContainer= styled.div`
display:flex;
padding-left:2px;
font-size:12px;
align-items:center; 
cursor:pointer;

:hover{
    opacity:0.9;
    border-color:#340e36;
}
>h3{
    font-weight:400;
}
>h3 >span{
    padding:15px;
}
`;
const SideNavAlternativeChannel= styled.h3`
padding: 10px 0;
font-weight:300;
`;

