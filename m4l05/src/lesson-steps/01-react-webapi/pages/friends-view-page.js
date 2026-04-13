import React from 'react';
import {PencilSquare, ArrowCounterclockwise} from 'react-bootstrap-icons'
import {useParams, useNavigate } from 'react-router';

import FriendDetailsView from '../components/friend-details-view';
  
export function FriendsViewPage()
{
    const seededData = JSON.parse(sessionStorage.persons);
    const navigate = useNavigate();    
    
    const { id } = useParams();
    const person = seededData.find((item) => item.id === id);

    if(!person) {
      return <span>The person doesn't exist.</span>;
    }

    const onEdit = (e) => 
    {
      navigate(`/friends-edit-page/${id}`);
    }
    const onUndo = (e) => 
    {
      navigate(`/friends-list-page`);
    }  

    return (
        <div className="container px-4 py-4 text-start">
          <h1>
            View details of my friend {person.firstName} 
            <button className="btn btn-primary-outline" onClick={onEdit}>
              <PencilSquare className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"/>
            </button>
            <button className="btn btn-primary-outline" onClick={onUndo}>
              <ArrowCounterclockwise className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"/>
            </button>
          </h1>
          <FriendDetailsView friend={person}/>
        </div>
    );
}

