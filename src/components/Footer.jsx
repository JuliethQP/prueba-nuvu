
export default function Footer() {

  return (

    <div className="footer-icons">
      <img className="blue-circle" src="./img/circle.svg" alt="circle"/>
      <div className='footer-columns'>
        <div className='row-footer'>
          <div className='column-footer'>
            <div >
              <img src="./img/home.svg" alt="home"/>
              <p style={{ color: '#54D1ED' }}>Inicio</p>
            </div>
          </div>
          <div className='column-footer'>
            <div >
              <img src="./img/editor.svg" alt="editor"/>
              <p>Historial</p>
            </div>
          </div>
          <div className='column-footer'>
            <div className="empty-column">
              <p>Ahorrar</p>
            </div>
          </div>
          <div className='column-footer'>
            <div>
              <img src="./img/account.svg" alt="account"/>
              <p>Mi perfil</p>
            </div>
          </div>
          <div className='column-footer'>
            <div className='green-column'>
              <img src="./img/navigation.svg" alt="navigation"/>
              <p>Más</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
