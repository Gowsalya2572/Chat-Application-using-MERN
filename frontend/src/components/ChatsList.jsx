import React, { useEffect } from 'react'
import { useChatStore } from '../store/useChatStore'
import UsersLoadingSkeleton from './UserLoadingSkeleton';
import NoChatsFound from './NoChatsFound';

const ChatsList = () => {
  const {getMyChatPartners,chats,isUserLoading,SetSelectedUser}=useChatStore();
  
  useEffect(()=>{
    getMyChatPartners();
  },[getMyChatPartners]);

  if(isUserLoading) return <UsersLoadingSkeleton/>;
  if(chats.length===0) return <NoChatsFound/>;
  return (
    <>
      {chats.map(chat=>(
        <div key={chat._id}
        className='bg-cyan-500/10 p-4 rounded-lg cursor-pointer hover:bg-cyan-500/20 transition-colors'
        onClick={()=> SetSelectedUser(chat)}>

        </div>
      ))}
    </>
  )
}

export default ChatsList
