import React from 'react';
import {useParams, useNavigate} from 'react-router';

import FriendDetailsEditValidation from '../components/friend-details-edit-validation';
  
export function FriendsEditPage()
{
    const seededData = JSON.parse(sessionStorage.persons);
    const navigate = useNavigate();
    const { id } = useParams();

    //React state lifting. The person is state in FriendsEditEdit and passed as props to FriendDetailsEdit
    const p = seededData.find((item) => item.id === id);

    if(!p) {
      return <span>The person doesn't exist.</span>;
    }

    const onSave = (e) => 
    {
      const idx = seededData.findIndex((item) => item.id === id);
      
      seededData[idx] = e.editedFriend;
      sessionStorage.persons = JSON.stringify(seededData);
      
      navigate(`/friends-view-page/${id}`);
    }  

    const onUndo = (e) => 
    {
      navigate(`/friends-view-page/${id}`);
    }  

    return (
      <div className="container px-4 py-4 text-start">
          <FriendDetailsEditValidation friend={p} onSave={onSave} onUndo={onUndo}/>
      </div>
  );
}


