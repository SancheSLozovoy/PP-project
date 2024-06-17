import React, { useState } from 'react';
import './Member.css';

const Member = ({ members }) => {
  const [selectedMember, setSelectedMember] = useState(members[0]);
  const [isEditing, setIsEditing] = useState(false);
  const [memberData, setMemberData] = useState(members);

  const handleInputChange = (index, event) => {
    const { name, value, files } = event.target;
    const updatedMembers = [...memberData];
    if (name === "image" && files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        updatedMembers[index][name] = reader.result;
        setMemberData(updatedMembers);
        setSelectedMember(updatedMembers[index]);
      };
      reader.readAsDataURL(files[0]);
    } else {
      updatedMembers[index][name] = value;
      setMemberData(updatedMembers);
      setSelectedMember(updatedMembers[index]);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <div className="member-container">
      <div className="tabs">
        {memberData.map((member, index) => (
          <button 
            key={index} 
            className="tab" 
            onClick={() => setSelectedMember(member)}
          >
            {member.name}
          </button>
        ))}
        <button onClick={handleEditClick} className="edit-button">
          Редактировать
        </button>
      </div>
      <div className="content">
        <div className="image-placeholder">
          <img src={selectedMember.image} alt={selectedMember.name} className="member-image" />
          {isEditing && (
            <input 
              type="file" 
              name="image" 
              accept="image/*" 
              onChange={(event) => handleInputChange(memberData.indexOf(selectedMember), event)} 
              className="image-input"
            />
          )}
        </div>
        <div className="description">
          {isEditing ? (
            <>
              <input
                type="text"
                name="name"
                value={selectedMember.name}
                onChange={(event) => handleInputChange(memberData.indexOf(selectedMember), event)}
                className="member-input"
              />
              <textarea
                name="description"
                value={selectedMember.description}
                onChange={(event) => handleInputChange(memberData.indexOf(selectedMember), event)}
                className="member-textarea"
              />
              <button onClick={handleSaveClick} className="save-button">Сохранить</button>
            </>
          ) : (
            <>
              <h3 className='name'>{selectedMember.name}</h3>
              <p className='descr'>{selectedMember.description}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Member;
