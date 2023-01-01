import {useState} from 'react';

const TechnoAdd = (props) => {
    const [techno,setTechno] = useState({
        technoname:"",
        technocategory:"",
        technodescription:""
    })

    const {addTechno} = props

    function handleChange(event){
        // ici je récupère le nom et la valeur de mon input quand je saisi
        const {name,value} = event.target
        // puis j'éclate mon objet techno dans un nouvel objet en ajoutant une clé [name] qui est le name de l'input
        setTechno({...techno,[name]:value})
    }
    
    function submit(event){
        event.preventDefault()
        addTechno(techno)
        setTechno({
            technoname:"",
            technocategory:"",
            technodescription:"",
        })
    }
    
    return(
        <div className='techno-add'>
        <h1>Ajouter une Techno</h1>
        <div>
            <form onSubmit={(event)=> submit(event)}>
                    <label htmlFor="technoname" className="form-label">Name:</label>
                    <br />
                    <input type="text" name='technoname' className="techno-name" id="technoname" value={techno.technoname} placeholder="John DOE" onChange={(event)=>handleChange(event)} required  />
                    <br />
                    <br />
                    <label htmlFor="technocategory" className='form-control'>Catégorie:</label>
                    <br />
                    <select name="technocategory" value={techno.technocategory} onChange={(event)=>handleChange(event)} id="techno-category">
                        <optgroup label="Developpement">
                            <option value="">select a category</option>
                            <option value="front">Front</option>
                            <option value="back">Back</option>
                            <option value="fullstack">Full Stack</option>
                            <option value="autres">Autres</option>
                        </optgroup>
                    </select>
                    <br />
                    <br />
                    <label htmlFor="technodecription">Description:</label>
                    <br />
                    <textarea name="technodescription" value={techno.technodescription} onChange={(event)=>handleChange(event)} id="techno-description" cols="30" rows="10">
                    </textarea>
                    <br />
                    <input type="submit" className='btn btn-primary' value="Ajouter" />
            </form>
        </div>
    </div>
    );
};

export default TechnoAdd;