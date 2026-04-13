import React from 'react';
import { useNavigate } from 'react-router';

import { seedGenerator } from '../../../services/seido-helpers';
import Person from '../../../models/person';

import FriendList from '../components/friend-list';
  

export function FriendsListPage()
{
    const _seeder = new seedGenerator();

    if (!sessionStorage.persons)
      sessionStorage.persons = JSON.stringify(new Person().seedMany(_seeder,100));

    const seededData = JSON.parse(sessionStorage.persons);
    const navigate = useNavigate();

    const onView = (e) => 
    {
      console.log(e.rowid);
      navigate(`/friends-view-page/${e.rowid}`);
    }

    return (
      <div className="container px-4 py-4 text-start">

          <h2 className="pb-2 border-bottom">My friends</h2>
          <FriendList friends={seededData} onView={onView}/>
      </div>
    );
}