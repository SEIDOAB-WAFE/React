import React from 'react'
import {Routes, Route } from "react-router";

import Home from '../pages/home';
import About from '../pages/about';
import Page1 from '../pages/page1';
import Page2 from '../pages/page2';
import Page3 from '../pages/page3';
import Error from '../pages/error';

import {Posts, PostLists, Post} from '../pages/posts';
import {OutletExample, OutletExampleList, OutletExampleView} from '../pages/outlet-example';

import {FriendsListPage} from '../pages/friends-list-page';
import {FriendsViewPage} from '../pages/friends-view-page';
import {FriendsEditPage} from '../pages/friends-edit-page';


import {ListPagination} from '../pages/list-pagination';

import {AlbumsWebApiList} from '../pages/albums-webapi-list';
import {AlbumsWebApiView} from '../pages/albums-webapi-view';
import {AlbumsWebApiEdit} from '../pages/albums-webapi-edit';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      {/* Nested Routes example */}
      <Route path="/outlet-example" element={<OutletExample />}>

        {/* Index routes render into their parent's Outlet at their parent's URL */}
        <Route index element={<OutletExampleList />} />
        <Route index path=":id" element={<OutletExampleView />} />
      </Route>

      <Route path="/friends-list-page" element={<FriendsListPage />} />
      <Route path="/friends-view-page/:id" element={<FriendsViewPage />} />
      <Route path="/friends-edit-page/:id" element={<FriendsEditPage />} />

      <Route path="/list-pagination" element={<ListPagination />} />
     
      <Route path="/albums-webapi-list" element={<AlbumsWebApiList />} />
      <Route path="/albums-webapi-view/:id" element={<AlbumsWebApiView />} />
      <Route path="/albums-webapi-edit/:id" element={<AlbumsWebApiEdit />} />

      {/* Nested Routes */}
      <Route path="/posts" element={<Posts />}>

        {/* Index routes render into their parent's Outlet at their parent's URL */}
        <Route index element={<PostLists />} />
        <Route index path=":id" element={<Post />} />
      </Route>

      {/* Passing parameters as part of the route */}
      <Route path="/page1" element={<Page1/>}/>
      <Route path="/page1/:param1" element={<Page1/>}/>
      <Route path="/page1/:param1/:param2" element={<Page1/>}/>
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page3" element={<Page3 />} />
      
      {/* Passing a property when rendering and element */}
      <Route path="*" element={<Error details={{msg: "Page not found"}} />} />
    </Routes>
  )
}

export default AppRouter