import React, { useState } from 'react'
import { Save, ArrowCounterclockwise } from 'react-bootstrap-icons'

export function FormHandleChange04(props) {

  const [friend, setFriend] = useState(props.friend);

  const handleChange = (e) => {

    const id = e.target.id;
    const val = e.target.value;
    const f = { ...friend };
    f.address = { ...friend.address };

    switch (id) {
      case 'firstName':
        f.firstName = val;
        break;
      case 'lastName':
        f.lastName = val;
        break;
      case 'email':
        f.email = val;
        break;
      case 'birthday':
        f.birthDate = val;
        break;
      case 'street':
        f.address.street = val;
        break;
      case 'zip':
        f.address.zipCode = val;
        break;
      case 'city':
        f.address.city = val;
        break;
      case 'country':
        f.address.country = val;
        break;
      default:
        return;
    }
    setFriend(f);
    console.log(f.firstName, f.address.zipCode);
}

  const onSave = (e) => {
    //We are going to add validation here later 
    e.person = friend;

    if (props.onSave) 
      props.onSave(e);
  }
  const onUndo = (e) => {
    console.log(`onUndo invoked`);

    setFriend(props.friend);
    e.person = props.friend;

    if (props.onUndo)
      props.onUndo(e);
  }
  return (
    <>
      <div className="container px-4 py-4" id="edit-item">
        <h1>
          Edit details of my friend {props.friend.firstName}
          <button className="btn btn-primary-outline" onClick={onSave}>
            <Save className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em" />
          </button>
          <button className="btn btn-primary-outline" onClick={onUndo}>
            <ArrowCounterclockwise className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em" />
          </button>
        </h1>
        <div className="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-5">
          <div className="col-md-7 col-lg-8">
            <form className="needs-validation">
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">First name</label>
                  <input type="text" className="form-control" id="firstName" value={friend.firstName} onChange={handleChange} required />
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">Last name</label>
                  <input type="text" className="form-control" id="lastName" value={friend.lastName} onChange={handleChange} required />
                </div>

                <div className="col-sm-6">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" value={friend.email} onChange={handleChange} required />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="birthday" className="form-label">Birthday</label>
                  <input type="date" className="form-control" id="birthday" value={friend.birthDate} onChange={handleChange} required />
                </div>

                <div className="row g-3 visible">
                  <div className="col-12">
                    <label htmlFor="street" className="form-label">Address</label>
                    <input type="text" className="form-control" id="street" value={friend.address.street} onChange={handleChange} required />
                  </div>

                  <div className="col-md-3">
                    <label htmlFor="zip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="zip" value={friend.address.zipCode} onChange={handleChange} required />
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" className="form-control" id="city" value={friend.address.city} required onChange={handleChange} />
                  </div>

                  <div className="col-md-5">
                    <label htmlFor="country" className="form-label">Country</label>
                    <input type="text" className="form-control" id="country" value={friend.address.country} onChange={handleChange} required />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}


/* Exercise
1. Modify the animal form to a controlled form by 
  - add props to allow you to change the properties of an animal
  - add animal as a state
  - set value in the <input> tags
  - adding a change handler
  - add an onUndo handler
*/