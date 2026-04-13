import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router';

import musicService from '../../../services/music-group-f-service';
import AlbumDetailsEdit from '../components/album-details-edit';
  
  export function AlbumsWebApiEdit() {

    const navigate = useNavigate();
    const { id } = useParams();
  
    const [serviceData, setServiceData] = useState();
    useEffect(() => {
        async function readWebApi() {
          
          const service = new musicService(`https://music.api.public.seido.se/api`);
          const data = await service.readAlbumAsync(id);
          setServiceData(data.item);
        }
        readWebApi(id);
    }, [])

    //event handlers can be async, so it is straight forward to save async
    const onSave = async (e) => 
    {
      const album = e.editedAlbum;

      //the webapi needs dto objects to update and create
      const service = new musicService(`https://music.api.public.seido.se/api`);
      const dto = await service.readAlbumDtoAsync(id);
     
      dto.item.name = album.name;
      dto.item.copiesSold = album.copiesSold;
      dto.item.releaseYear = album.releaseYear;

      const updatedalbum = await service.updateAlbumAsync(dto.item.albumId, dto.item);
      navigate(`/albums-webapi-view/${updatedalbum.item.albumId}`);
    }  

    const onUndo = (e) => 
    {
      navigate(`/albums-webapi-view/${id}`);
    }  

    return (
      <>
        <div className="container px-4 py-4 text-start">
          <AlbumDetailsEdit album={serviceData} setAlbum={setServiceData} onSave={onSave} onUndo={onUndo}/>
        </div>
      </>
    );
  }
  
