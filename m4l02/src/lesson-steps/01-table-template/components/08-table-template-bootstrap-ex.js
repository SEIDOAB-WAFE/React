import React from 'react'

export function TableTemplate08() {
  return (
    <>
      <h1>Table template using bootstrap 08</h1>
      <h2>Bootstrap starting point</h2>

      <div className="row mb-2 text-center">
          <div className="col-md-4 themed-grid-head-col">Head2</div>
          <div className="col-md-2 themed-grid-head-col">Head2</div>
          <div className="col-md-1 themed-grid-head-col">Head3</div>
      </div>
  
      <div className="row mb-2 text-center" >

          <div className="col-md-4 themed-grid-col">
            Cell1
          </div>

          <div className="col-md-2 themed-grid-col">
            Cell2
          </div>

          <div className="col-md-1 themed-grid-col">
            Cell3
          </div>
      </div>
    </>
  )
}

/* Exercises
1. Follow the table template steps to create table animals. Each row should show
   Animal name, type, age och mood
2. add a click event to the row in the table that displays an alert() a message of what animal
   has been clicked
3. Create two Table-use components. One components only displays Zebras, the other only elephants 
*/
