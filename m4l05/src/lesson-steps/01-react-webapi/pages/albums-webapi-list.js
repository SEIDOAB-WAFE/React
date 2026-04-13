import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router';

import musicService from '../../../services/music-group-f-service';
import AlbumList from '../components/album-list';
  

export function AlbumsWebApiList() {
  const navigate = useNavigate();

  const [serviceData, setServiceData] = useState();
  useEffect(() => {
     async function readWebApi() {
        const service = new musicService(`https://music.api.public.seido.se/api`);
        const data = await service.readAlbumsAsync(0);
        setServiceData(data);
     }
     
     readWebApi();
  }, [])


  const onView = (e) => 
  {
    console.log(e.rowid);
    navigate(`/albums-webapi-view/${e.rowid}`);
  }

  // You need to handle the render when serviceData is null, i.e. async call has not yet completed
  return (
    <>
      <div className="container px-4 py-4 text-start">

        <h2 className="pb-2 border-bottom">My favorite albums</h2>
        <AlbumList serviceData={serviceData} onView={onView}/>
      </div>
    </>
  );
}
  
