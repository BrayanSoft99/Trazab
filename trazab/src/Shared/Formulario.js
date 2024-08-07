import { useState } from 'react';

const formulario = () => {

    let nombre = "";

    return (
    <div className="formularioPrincipal">
        <form className="form0">
            <div className="row">
            <div className='col-3'>
            <label className='form-label' htmlFor="campo1">Nombres</label>
            <input className='form-control' type="text" id="campo1"/>
            </div>
            
            <div className='col-3'>
            <label className='form-label' htmlFor="campo2">Apellidos</label>
            <input className='form-control' type="text" id="campo2"/>
            </div>

            <div className='col-3'>
            <label className='form-label' htmlFor="campo3">Identificación</label>
            <input className='form-control' type="text" id="campo3"/>
            </div>
            </div>
            <button type="button" class='btn btn-primary'>Aceptar</button>
        </form>

        
    </div>
    )
}


export default formulario;