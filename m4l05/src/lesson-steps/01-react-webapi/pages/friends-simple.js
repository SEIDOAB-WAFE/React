import React from 'react';
import {ArrowCounterclockwise} from 'react-bootstrap-icons'
import { Outlet, useParams, useNavigate, useOutletContext } from 'react-router';

import { uniqueId, seedGenerator } from '../../../services/seido-helpers';

import FriendList from '../components/friend-list';
import FriendDetailsView from '../components/friend-details-view';
  
export function FriendsSimple()
{
  const seededData = initialData();
  return (
    <div className="container px-4 py-4 text-start">

        
        <Outlet  context={seededData}/>

    </div>
  );
}

export function FriendsSimpleList() {
  const seededData = useOutletContext();
  const navigate = useNavigate();

  const onView = (e) => 
  {
    console.log(e.rowid);
    navigate(`/friends-simple/${e.rowid}`);
  }

  return (
    <>
      <h2 className="pb-2 border-bottom">My friends</h2>
      <FriendList friends={seededData} onView={onView}/>
    </>
  );
}

export function FriendsSimpleView() {
const seededData = useOutletContext();
  const navigate = useNavigate();
  const { id } = useParams();
  const person = seededData.find((item) => item.id === id);

  if(!person) {
    return <span>The person doesn't exist.</span>;
  }

  const onUndo = (e) => 
  {
    navigate(`/friends-simple`);
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

function Person() {

  this.id = undefined;
  this.firstName = undefined;
  this.lastName = undefined;
  this.birthDate = undefined;
  this.email = undefined;

  this.address = {};
  this.address.country = undefined;
  this.address.city = undefined;
  this.address.street = undefined;
  this.address.zipCode = undefined;

}

Person.prototype = {
  
  createRandom: function (_sgen) {
    const p = new Person();
    p.id = uniqueId();
    p.firstName = _sgen.firstName;
    p.lastName = _sgen.lastName;
    p.birthDate = _sgen.dateAndTime(1970, 2000).toLocaleDateString('sv-SE');
    p.email = _sgen.email(p.firstName, p.lastName)

    p.address.country = _sgen.country;
    p.address.city = _sgen.city(p.address.country);
    p.address.street = _sgen.street(p.address.country);
    p.address.zipCode = _sgen.zipCode;

    return p;
  },
  
  createRandomMany: function (_sgen, nrOfItems) {
    return _sgen.toArray(nrOfItems, this.createRandom)
  }
}

function initialData()
{
    const _seeder = new seedGenerator();
    return new Person().createRandomMany(_seeder, 100)
}