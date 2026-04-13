import React, {useState} from 'react';
import { useParams } from 'react-router';

import { seedGenerator } from '../../../services/seido-helpers';
import Person from '../../../models/person';

import FriendList from '../components/friend-list';
import ListPager from '../components/list-pager';
  
export function ListPagination()
{
    const _seeder = new seedGenerator();

    if (!sessionStorage.persons)
      sessionStorage.persons = JSON.stringify(new Person().seedMany(_seeder,100));

    const seededData = JSON.parse(sessionStorage.persons);
  
    //initial pagenr to present
    let { pageNr } = useParams();
    pageNr ||= 0;
    
    //paging dimensions
    const pageSize = 5;
    const nrVisiblePages = 3;

    //state manegement so List is re-render when state->props change
    const [currentPage, setCurrentPage] = useState(pageNr);
    const [pageData, setPageData] = useState(seededData.slice(pageSize*pageNr, pageSize*pageNr+pageSize));
    const [maxNrPages, setMaxNrPages] = useState(Math.ceil(seededData.length/pageSize));

    //Load page data
    const onPageChange = (e) =>
    {
      const pData = seededData.slice(pageSize*e.currentPage, pageSize*e.currentPage+pageSize);
      setPageData([...pData]);
      setCurrentPage (e.currentPage);
    }

  return (
    <div className="container px-4 py-4 text-start">

      <FriendList friends={pageData}/>
      <ListPager nrVisiblePages={nrVisiblePages} currentPage={currentPage} maxNrPages={maxNrPages}
          onPageChange={onPageChange}/>

    </div>
  );
}