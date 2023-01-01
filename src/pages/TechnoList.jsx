import React from 'react';
import TechnoItem from '../components/TechnoItem';

const TechnoList = (props) => {
    const {technos,supprimerTechno} = props
    return (
        <div className="techno-list">
            <h1>All Technos</h1>
            <p>Pour afficher toutes les techno ajoutés.</p>
            <div>
                {
                    technos.map(techno=>(
                        <TechnoItem techno={techno} key={techno.technoid} supprimerTechno={supprimerTechno} />
                    ))
                }
            </div>
        </div>
    );
};

export default TechnoList;