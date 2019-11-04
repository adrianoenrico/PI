import React from 'react';
import NavBar from './NavBar';


function App() {
  return (
    <div>
      <div className="container-fluid intro" style={{backgroundColor:'black'}}>
        <header>
          <NavBar navBarBrand='{PI}' navBarConfig='navbar navbar-expand-lg navbar-dark' navBarBrand_1='{Events}' navBarBrand_2='{Newsletter}' navBarBrand_3='{Donate}' />
        </header>
        <div className='row'>
          <div className='col-sm'>
            <h1>Porto, Inclusive</h1>
          </div>
        </div>
        <div className='row'>
          <img itemID='prideBar' src='prideBar.png' alt='Rainbow bar'></img>
        </div>
        <div className='row'>
          <div className='col-sm'>
            <h2>Eventos e mobilização q no porto</h2>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm'>
            <a href='%ADD LINKS HERe%'></a>
            <a href='%ADD LINKS HERE5'></a>
          </div>
          <div className='col-sm'>
            <a href='#form'></a>
          </div>
        </div>
      </div>
      <div className='container-fluid overview'>
        <div className='row'>
          <div className='col-sm'>
            <img></img>
          </div>
          <div className='col-sm'>
            <h3></h3>
            <p></p>
          </div>
        </div>
      </div>
      <div className='container-fluid album'>
          <div itemID="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="..." className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..."/>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
        </div>
      </div>
      <div className='container-fluid cta'>
        <div className='col-sm'>
          <h3></h3>
          <p></p>
        </div>
        <div className='col-sm'>
          <form>
            <div className="form-group">
              <label for="inputName">Nome</label>
              <input type="text" className="form-control" itemID="inputName" placeholder="Nome & Apelido"/>
            </div>
            <div className="form-group">
              <label for="inputEmail1">Email</label>
              <input type="email" className="form-control" itemID="inputEmail1" aria-describedby="emailHelp" placeholder="ex: me@gigle.com"/>
              <small itemID="emailHelp" className="form-text text-muted">Nunca compartlharemos seu E-mail com outros.</small>
            </div>
            <button type="submit" className="btn btn-primary">Inscreva-me!</button>
            <small itemID='TOS' className='form-text text-muted'>Clicando em subscrever concordas em receber alertas e novidades.</small>
          </form>
        </div>
      </div>
      <div className='container-fluid outro'>
        <div className='col-sm'>
          <a></a>
          <a></a>
        </div>
        <div className='col-sm'>
          <a></a>
        </div>
      </div>
    </div>
  );
}

export default App;
