import React from 'react';

const Profile: React.FC = () => {
    const member = {
        photo: 'path/to/photo.jpg',
        name: 'John Doe',
        contact: 'john.doe@example.com',
        bio: 'A passionate learner and developer.',
        department: 'Computer Science',
        graduationYear: 2023,
    };

    return (
        <div className="profile-container">
            <img src={member.photo} alt={`${member.name}'s profile`} className="profile-photo" />
            <h1 className="profile-name">{member.name}</h1>
            <p className="profile-contact">Contact: {member.contact}</p>
            <p className="profile-bio">{member.bio}</p>
            <p className="profile-department">Department: {member.department}</p>
            <p className="profile-graduation-year">Graduation Year: {member.graduationYear}</p>
        </div>
    );
};

export default Profile;