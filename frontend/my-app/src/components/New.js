import React, {useState} from "react";
import axios from "axios";
import {Navigate} from 'react-router-dom';
import Global from "../Global";

const New = () =>{

    const url = Global.url;

    const [article, setArticle] = useState({
        nombre: null,
        categoria: null
    });

    const [redirect, setRedirect] = useState(false);

    let nombreRef = React.createRef();
    let categoriaRef = React.createRef();

    const changeState = () =>{
        setArticle({
            nombre: nombreRef.current.value,
            categoria: categoriaRef.current.value
        });
        console.log(article);
    }

    //const datos = {nombre: article.nombre, categoria: article.categoria}

    const sendData = (event)=>{
        event.preventDefault();
        changeState();

        axios.post(url, article.nombre).then(res =>{
            setRedirect(true);
            console.log(res.data);
        })

        /*axios.post(url, {body: {nombre: article.nombre, categoria: article.categoria}}).then(res =>{
            setRedirect(true);
            console.log(res.data);
        })*/

        
    }
    if(redirect){
        return <Navigate to="articles" />
    }


    return(
        <div className="nueva-publicacion">
            <div id="formulario" className="card mx-auto mb-3 mt-5" style={{width: '30em'}}>                

                <div className="card-header text-dark">
                    <h4>Nuevo Producto</h4>
                </div>

                <div className="card-body">

                    <form onSubmit={sendData}>
                        <div className="mb-3">
                            <label>Nombre: </label>
                            <input type="text" className="from-control" id="title" 
                            ref={nombreRef} onChange={changeState} name="title" required/>
                        </div>

                        <div className="mb-3">
                            <label>Categoria: </label>
                            <input type="text" className="from-control" id="content" 
                            ref={categoriaRef} onChange={changeState} name="content" required/>
                        </div>

                        <div className="mb-3">
                            <input className="form-control btn btn-primary" type="submit" 
                            id="publish" value="Insertar"/>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    );
}

export default New;