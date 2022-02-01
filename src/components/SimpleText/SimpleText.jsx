import React from 'react'
import estilo from './SimpleText.module.css'

const SimpleText = ({textoLineOne, textoLineTwo}) => {
	return (
		<div className={estilo.generalSimpleText}>
			<div className={estilo.contenedorSimpleText}>
                <p>{textoLineOne}</p>
                <p>{textoLineTwo}</p>
            </div>
		</div>
	)
}

export default SimpleText
