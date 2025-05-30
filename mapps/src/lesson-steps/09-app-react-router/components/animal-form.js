import React, {useState} from 'react'
import {Save, ArrowCounterclockwise} from 'react-bootstrap-icons'

export function AnimalForm(props) {

  const [animal, setAnimal] = useState(props.animal);

  const handleChange = (e) => {

    const id = e.target.id;
    const val = e.target.value;
    const a = { ...animal };
 
    switch (id) {
      case 'name':
        a.name = val;
        break;
      case 'type':
        a.type = val;
      break;
      case 'age':
        a.age = val;
        break;
      default:
        return;
    }
    setAnimal(a);
  }

  const onSave = (e) => 
  { 

    //const form = document.querySelector('#formid')
    const form = document.querySelector('.needs-validation')
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
      form.classList.add('was-validated')
    }
    else{
        e.animal = animal;

        const a = {...animal}
        setAnimal(a);

        if (props.onSave) props.onSave(e);
    }


  }  

  const onUndo = (e) =>{

    console.log(props.animal)
    setAnimal(props.animal)

    if (props.onUndo) props.onUndo(e);
  }

  return (
    <>
      <div className="container px-4 py-4" id="edit-item">
        <h1>
           Edit details of my pet {props.animal.name} 
           <button className="btn btn-primary-outline" onClick={onSave}>
            <Save className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"/>
          </button>
          <button className="btn btn-primary-outline" onClick={onUndo}>
            <ArrowCounterclockwise className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"/>
          </button>
        </h1>
        <div className="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-5">
          <div className="col-md-7 col-lg-8">
            <form className="needs-validation">
              <div className="row g-3">

                <div className="col-sm-4">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" value={animal.name} onChange={handleChange} required/>
                  <div className="invalid-feedback">
                    You must provide a pet name.
                  </div>
                  <div className="valid-feedback">
                    Pet name looks ok
                  </div>
                </div>
                <div className="col-sm-4">
                  <label htmlFor="type" className="form-label">Type</label>
                  <input type="text" className="form-control" id="type" value={animal.type} onChange={handleChange} required/>
                  <div className="invalid-feedback">
                    What kind of animal is your pet?
                  </div>
                </div>
                <div className="col-sm-4">
                  <label htmlFor="age" className="form-label">Age</label>
                  <input type="number" className="form-control" id="age" value={animal.age} onChange={handleChange} required/>
                  <div className="invalid-feedback">
                    What is the age of your pet?
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
