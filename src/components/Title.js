import React from 'react';

const Title = ({title, alertTitle, profile, profiles}) => {
    alertTitle();
    return (
        <h1>
            {JSON.stringify(profile)};
            {JSON.stringify(profiles)};
            Title : {title} || {profile.name} || {profile.location};
        </h1>
    );
};

export default Title;