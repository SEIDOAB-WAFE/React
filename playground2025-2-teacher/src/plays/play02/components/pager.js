  export function Pager(props) {

    const onClickPrev = (e) => {

      if (props.onClickPrev){
        props.onClickPrev(e);
      }
    }
    const onClickNext = (e) => {

      if (props.onClickNext){
        props.onClickNext(e);
      }
    }

    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item"><button onClick={onClickPrev} className="page-link" href="#">Previous</button></li>
          <li className="page-item"><button onClick={onClickNext} className="page-link" href="#">Next</button></li>
        </ul>
      </nav>
    )
  }