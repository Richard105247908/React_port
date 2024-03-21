import React from 'react';
import data from './data';
import { useNavigate } from 'react-router-dom';

function Cards(props) {
  const navigate = useNavigate();
    
  return (
    <div>
        <h6>{props.title}</h6>
        <img src={props.image} width="400" height="400" alt="" />
        <div>
          <div>
        <a target="_blank" href={props.deployedlink}> Deployed  </a>
        </div>
        <div>
        <a target="_blank" href={props.githublink}> GitHubIcon  </a>
        </div>
        </div>
        

        
        

    </div>
  )
}

export default Cards