function Menu(){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">MENU</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
          <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
              <a className="nav-link" href="/">Início</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/cliente">Cliente <span className="sr-only">(página atual)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/produto">Produto</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/pedido">Pedido</a>
            </li>
          </ul>
        </div>
      </nav>
        </>
    )
}

export default Menu