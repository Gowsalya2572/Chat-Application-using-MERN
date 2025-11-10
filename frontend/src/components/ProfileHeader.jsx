import React, { useRef, useState } from 'react'
import {useAuthStore} from '../store/useAuthStore'
import { useChatStore } from '../store/useChatStore';

const ProfileHeader = () => {
     const {logout,authUser,updateProfile}=useAuthStore();
     const {isSoundEnabled,toggleSound} =useChatStore();
     const {selectedImg,setSelectedImg}=useState();

     const fileInputRef =useRef(null);

     const handleImageUpload=(e)=>{
      
     }




  return (
    <div className='p-6 border-b border-slate-700/50'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
           {/* avathar */}
          <div className="avatar online">
            <button className='size-14 rounded-full overflow-hidden relative group'
            onClick={()=> fileInputRef.current.click()}>
                <img src={selectedImg ||  authUser.profilePic  || "/avatar.png"} alt='user image'
                className='size-full object-cover'/>
                
            </button>

           <input type='file' accept='image/*' ref={fileInputRef} onChange={handleImageUpload} className='hidden'/>
           </div>
        </div>
      </div>
      
    </div>
  )
}

export default ProfileHeader
