import React from 'react';
import {ArrowCounterclockwise} from 'react-bootstrap-icons'
import {Outlet, useParams, useNavigate, useOutletContext} from 'react-router';

import {seedGenerator} from '../../../services/seido-helpers';
import Person from '../../../models/person';

import FriendList from '../components/friend-list';
import FriendDetailsView from '../components/friend-details-view';
  
export function OutletExample()
{
  const _seeder = new seedGenerator();
  const seededData = new Person().seedMany(_seeder, 100);
  return (
    <div className="container px-4 py-4 text-start">

        <Outlet  context={seededData}/>

    </div>
  );
}

export function OutletExampleList() {
  const seededData = useOutletContext();
  const navigate = useNavigate();

  const onView = (e) => 
  {
    console.log(e.rowid);
    navigate(`/outlet-example/${e.rowid}`);
  }

  return (
    <>
      <h2 className="pb-2 border-bottom">My friends</h2>
      <FriendList friends={seededData} onView={onView}/>
    </>
  );
}

export function OutletExampleView() {
const seededData = useOutletContext();
  const navigate = useNavigate();
  const { id } = useParams();
  const person = seededData.find((item) => item.id === id);

  if(!person) {
    return <span>The person doesn't exist.</span>;
  }

  const onUndo = (e) => 
  {
    navigate(`/outlet-example`);
  }  

  return (
    <>
      <h1>
        View details of my friend {person.firstName} 
        <button className="btn btn-primary-outline" onClick={onUndo}>
          <ArrowCounterclockwise className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"/>
        </button>
      </h1>
      <FriendDetailsView friend={person}/>
    </>
  );
}