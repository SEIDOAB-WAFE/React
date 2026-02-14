import React from 'react';
import { useParams } from 'react-router';

export default function Page1()
{
    const params  = useParams();

    return (
        <div className="container px-4 py-4 text-start">
 
            <h2 className="pb-2 border-bottom">Page 1</h2>
            <p>This is a page 1.</p>
            <p>{params.id !== undefined ?`id is ${params.id}` :null} </p>
            <p>{params.filter !== undefined ?`filter is ${params.filter}` :null} </p>
        </div>
    );
}