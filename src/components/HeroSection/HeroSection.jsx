import React from 'react'
import estilo from './HeroSection.module.css'
import logo from '../../media/images/impacto-logo-333-red.png'
import video from '../../media/videos/Pexels Videos 1716043.mp4'

const HeroSection = () => {
	return (
		<div className={estilo.contenedorGeneralHero}>
			<div className={estilo.contenedorMedia}>
				<img src={logo} alt="Logo Impacto" />
				<p>THIS IS A SAMPLE TEXT</p>
				<button>impacto @ gmail.com</button>
				<video src={video} autoPlay loop muted></video>
			</div>
		</div>
	)
}

export default HeroSection
