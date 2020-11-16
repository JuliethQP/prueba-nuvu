import Footer from './Footer'

export default function Header() {

  return (
    <div className="container">
      <div className="container-section">
        <p >Hola, Camila</p>
        <img src="./img/notification.svg" alt="notification" />
      </div>
      <img src="/img/background.svg" alt="background" className="background-blue"></img>
      <img className="image-girl" src="/img/girl.svg" alt="girl" />
      <img className="img-table" src="./img/table.svg" alt="table" />
      <div className="container-goals">
        <p>Tus metas</p>
        <img src="./img/plus.svg" alt="plus"/>
      </div>
      <div className="row">
        <div className="column">
          <img className="img-card" src="./img/travel.svg" alt="travel"></img>
        </div>
        <div className="column">
          <img className="img-card" src="./img/mack.svg" alt="mack"></img>
        </div>
      </div>
      <div className="container-portafolio">
        <p>Conoce tu portafolio</p>
        <img src="./img/domicile.svg" alt="domicile"/>
      </div>
      <img className="img-portafolio" src="./img/portafolio.svg" alt="portafolio" />
      <div className="container-saving">Los P*t@s del ahorro</div>
      <img className="img-saving" src="./img/play_circle_outline.svg" alt="play circle"/>
      <img className="img-counter" src="./img/counter.svg" alt="counter" />
      <img src="./img/expenses.svg" className="img-expenses" alt="expenses"/>
      <Footer />
    </div>
  )
}
