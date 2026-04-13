import React, {useState, useEffect} from 'react';
import {PencilSquare, ArrowCounterclockwise} from 'react-bootstrap-icons'
import { useParams, useNavigate } from 'react-router';

import musicService from '../../../services/music-group-f-service';
import AlbumDetailsView from '../components/album-details-view';
  

export function AlbumsWebApiView() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [serviceData, setServiceData] = useState();
  useEffect(
    //equvalent to componentDidMount
    () => {
      async function readWebApi() {
        
        const service = new musicService(`https://music.api.public.seido.se/api`);
        const data = await service.readAlbumAsync(id);
        setServiceData(data.item);
      }
      readWebApi(id);
  }, [id])

  const onEdit = (e) => 
  {
    navigate(`/albums-webapi-edit/${id}`);
  }
  const onUndo = (e) => 
  {
    navigate(`/albums-webapi-list`);
  }  
  
  // You need to handle the render when serviceData is null, i.e. async call has not yet completed
  return (
    <>      
    <div className="container px-4 py-4 text-start">
      <h1 hidden={serviceData === undefined}>
        {serviceData?.name} 
        <button className="btn btn-primary-outline" onClick={onEdit}>
          <PencilSquare className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"/>
        </button>
        <button className="btn btn-primary-outline" onClick={onUndo}>
          <ArrowCounterclockwise className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"/>
        </button>
      </h1>
      <AlbumDetailsView album={serviceData}/>
    </div>
    </>
    );
  }
  
