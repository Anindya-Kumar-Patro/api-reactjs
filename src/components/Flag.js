import React,{useState,useEffect} from 'react'
import './Flag.css'
import axios from 'axios'

const Flag = () => {
    const [apidata, setApidata] = useState([])
    const [name, setName] = useState('')

    const getData = async () =>{
        const res = await fetch('https://restcountries.eu/rest/v2/region/asia')
        const countries = await res.json()
        console.log(countries)
        setApidata(countries)
    }

    const reload = () => {
        window.location.reload(true)
    }

    useEffect(() =>{
        
        getData()
        
        
        
        },[])
        console.log(apidata)
    return (
        <div className="flag-container">
            <button onClick={reload}>Reload the Api</button>
            {
                
                apidata.map((a)=>{
                    const {numericCode,name,capital,borders,flag,languages,population,subregion} = a;
                    return <article key={numericCode}>
                        <div className="container">
                            <img src={flag} alt={name} className="flag-image"/>
                            <h3 className="name-span">
                                 Name: <span className="namespan">{name}</span>
                            </h3>
                            <h3 className="name-span">
                                 Capital: <span className="capitalspan">{capital}</span>
                            </h3>
                            <h3 className="population-data">
                                Population: <span className="popspan">{population}</span>
                            </h3>
                            <h3 className="subregion">
                                Subregion: <span className="srspan">{subregion}</span>
                            </h3>
                            <h3 className="languages">
                               Languages: {languages.map(language=><span className="lspan">{language.name},</span>)}
                            </h3>
                            <h3 className="borders">
                                Borders: {borders.map(border=><span className="bspan">{border},</span>)}
                            </h3>

                        </div>

                    </article>
                })
                
            }
            
        </div>
    )
}

export default Flag
