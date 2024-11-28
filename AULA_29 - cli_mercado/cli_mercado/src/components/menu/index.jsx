function Menu (){
    return(

        <>
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Cliente</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon"></span>
                    &nbsp;&nbsp;Senai

                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/cliente">Cliente <span className="sr-only">(Página atual)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/pedido">Pedido</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/produto">Produto</a>
                        </li>
                        
                    </ul>
                </div>
            </nav>
            
        </>
    )

}

export default Menu