import React from 'react'
import estilo from './SimpleFSImage.module.css'
import ads from '../../media/images/branding-example.jpg'

const SimpleFSImage = ({source, alt}) => {
    console.log(source)
	return (
		<div className={estilo.generalSimpleFSImage}>
			<div className={estilo.contenedorGeneralSimpleFSImage}>
                <img src={source} alt={alt} />
            </div>
		</div>
	)
}

export default SimpleFSImage
