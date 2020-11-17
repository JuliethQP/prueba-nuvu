import Footer from './Footer'

export default function Header() {

  return (
    <div className="container">
      <div className="container-section">
        <p>Hola, Camila</p>
        <img src="./img/notification.svg" alt="notification" />
      </div>
      <div className="background-blue">
        <img src="/img/background.svg" alt="background" />
      </div>
      <img className="image-girl" src="/img/girl.svg" alt="girl" />
      <div className="container-table">
        <img src="./img/table.svg" alt="table" />
      </div>
      <div className="container-goals">
        <p>Tus metas</p>
        <img src="./img/plus.svg" alt="plus" />
      </div>
      <div className="row">
        <div className="column">
          <img src="./img/travel.svg" alt="travel"/>
        </div>
        <div className="column">
          <img src="./img/mack.svg" alt="mack"/>
        </div>
      </div>
      <div className="container-portafolio">
        <p>Conoce tu portafolio</p>
        <img src="./img/domicile.svg" alt="domicile" />
      </div>
      <div className="img-portafolio">
        <img src="./img/portafolio.svg" alt="portafolio" />
      </div>
      <p className="text-saving">Los P*t@s del ahorro</p>
      <div className="container-saving">
        <img src="./img/play_circle_outline.svg" alt="play circle" className="img-saving" />
        <img src="./img/counter.svg" alt="counter" className="img-counter" />
      </div>
      <div className="container-expenses">
        <img src="./img/expenses.svg" alt="expenses" />
      </div>
      <Footer />
    </div>
  )
}
