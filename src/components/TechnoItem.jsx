import React from 'react';

const TechnoItem = (props) => {
    const {techno,supprimerTechno} = props

    return (
        <div className='card'>
            <h2>Le titre de la technologie est {techno.technoname}</h2>
            <h3>La catégorie:</h3>
            <p>{techno.technocategory}</p>
            <h3>La description:</h3>
            <p>{techno.technodescription}</p>
            <div className="footer">
                <button className="btn-delete" onClick={()=>supprimerTechno(techno.technoid)}>supprimer</button>
            </div>
        </div>
    );
};

export default TechnoItem;