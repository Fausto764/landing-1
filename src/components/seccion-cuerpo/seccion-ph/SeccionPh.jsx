import './Seccionph.css'


export function SeccionPh (){
    return(
        <>
           <section className="seccionImagen">
                <img src={'/src/messi.png'} className="seccionImagen__img"/> 
                <img src={'/src/messi2.png'} className="seccionImagen__img"/> 
                <div className='seccionImagen-container-left'>
                    <div className="seccionImagen__div">Build your metavers look</div>
                    <div className="seccionImagen__div-2"></div>
                </div>
                <div className='seccionImagen-container-right'>
                     <img src={'/src/logo.jpg'} className="seccionImagen__img-r"/>
                     <div className='container-right-line'>
                            <div className='line'></div>
                            <h5 className='right-text'>Cooperate as designer/media</h5>
                     </div>
                </div>
               
                
            </section>
        </>
    )
} 