import './Project.css'

function Project({img,title,desc,git,demo}) {
    return(
        <div className='project-card'>
            <a href={demo} className='imgref'>
                <img className='project-img' src={img}></img>
            </a>
            <h4 className='project-title'>{title}</h4>
            <p className='project-desc'>{desc}</p>
            <a className='github' href={git}><u>Github</u></a>
            <a className='demo' href={demo}><u>Demo</u></a>
        </div>
    )
}

function Projects() {
    return(
        <div className='projects'>
            <Project
            img="https://portfolio-franzcastillo.vercel.app/static/media/bliss.f710bd4f093144532ecd.png"
            title="Bliss"
            desc="Desarrollo de la página de venta en línea y administración de transacciones para la empresa Bliss."
            git="https://github.com/FranzCastillo/Bliss"
            demo="https://bliss-gt.web.app"
            />
            <Project
            img="https://assets-ng.maxroll.gg/images/maxroll-mark-icon.svg"
            title="MaxRoll Clone"
            desc="A clone of the webpage Maxroll.gg."
            git="https://github.com/Mendezg1/proyecto1-Maxroll"
            demo="https://mendezg1-maxroll-imitation.netlify.app"
            />
            <Project
            img="./memory.png"
            title="Memory Game"
            desc="A memory game made with React.js."
            git="https://github.com/Mendezg1/Memory"
            demo="https://mendezg1s-memory.netlify.app/"
            />
            <Project
            img="./duck.PNG"
            title="DuckDuckGo Clone"
            desc="A DuckDuckGo clone with eslint's airbnb rules applied."
            git="https://github.com/Mendezg1/Linting"
            demo="https://mendezg1-duckduckgo-clone.netlify.app"
            />
            <Project
            img="./calc.png"
            title="Calculator"
            desc="A webpage imitating the basic functions of a Casio calculator."
            git="https://github.com/Mendezg1/Calculadora"
            demo="https://mendezg1scalcutator.netlify.app"
            />
            <Project
            img="./port.png"
            title="Portfolio"
            desc="This page is also one of my projects in which I can show you my web abilities."
            git="https://github.com/Mendezg1/Portfolio"
            demo="https://mendezg1sportfolio.netlify.app"
            />
            
        </div>
    )
}

export default Projects