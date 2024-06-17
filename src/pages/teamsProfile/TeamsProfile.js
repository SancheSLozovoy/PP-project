import React, { useState } from 'react';
import './TeamsProfile.css';
import logo from './logo512.png';
import Member from '../../components/member/Member';
import Header from '../../components/header/Header';

const initialTeamData = {
  name: 'Название команды',
  image: logo,
  members: [
    {
      name: 'Участник 1',
      description: 'Описание участника 1',
      image: logo,
    },
    {
      name: 'Участник 2',
      description: 'Описание участника 2',
      image: logo,
    },
    {
      name: 'Участник N',
      description: 'Описание участника N',
      image: logo,
    }
  ]
};

export default function TeamsProfile () {
  const [teamData, setTeamData] = useState(initialTeamData);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;
    if (name === "image" && files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setTeamData({ ...teamData, [name]: reader.result });
      };
      reader.readAsDataURL(files[0]);
    } else {
      setTeamData({ ...teamData, [name]: value });
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <div className="TeamsProfile">
    <Header></Header>
      <div className="TeamsProfile-info">
        <div className="TeamsProfile-info__img-container">
          <img className='TeamsProfile-info__img' src={teamData.image} alt="logo" />
          {isEditing && (
            <input 
              type="file" 
              name="image" 
              accept="image/*" 
              onChange={handleInputChange} 
              className="image-input"
            />
          )}
        </div>
        <div className='Team-description'>
            {isEditing ? (
            <>
                <input
                type="text"
                name="name"
                value={teamData.name}
                onChange={handleInputChange}
                className="team-input"
                />
                <button onClick={handleSaveClick} className="save-button">Сохранить</button>
            </>
            ) : (
            <>
                <h3 className='TeamsProfile-info__h2'>{teamData.name}</h3>
                <button onClick={handleEditClick} className="edit-button">Редактировать</button>
            </>
            )}
        </div>
      </div>
      <div className="TeamsProfile-members">
        <Member members={teamData.members} />
      </div>
    </div>
  );
}
