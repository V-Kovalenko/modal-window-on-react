import React, {useEffect, useMemo, useRef, useState} from 'react'
import './App.scss';
import Button from "./components/Button/Button";
import './assets/scss/reset.scss'
import Context from './Context/Context'
const initModalWindow = ['Modal Window','Modal Window', 'Modal Window']

function App() {
    const [toggle, setToggle] = useState(false)

    const onClickOpenModalWindow = () => {
        setToggle(true)
    }

    const onClickCloseModalWindow = () => {
        setToggle(false)
    }

    const handleKeyDown = (event) => {
        console.log(event.key);
       if(event.key === 'Escape' && toggle) {
           setToggle(false)
       }
    }
    const ref = useRef(null)
    useEffect(() => {
        ref.current.focus()
    })


  return (
      <Context.Provider value={{onClickOpenModalWindow, initModalWindow}}>
          <div className="App">
              <header className="header">
                  <Button/>
              </header>
              <div className="main">
                  <div className={toggle? 'modal-window' : 'modal-window modal-window_hidden'}>
                      <button onClick={onClickCloseModalWindow} className="modal-window__close">&times;</button>
                      <h1 className="modal-window__h1">
                         Modal Window
                      </h1>
                      <p className="modal-window__p">
                          Бокс (от фр. boxe — «бокс» и boxeur — «боксёр», которые происходят от англ. to box — «драться на ринге», «боксировать», или же непосредственно из англ. boxing, to box, происходящих, видимо, от англ. box — «коробка», «ящик», «ринг») — контактный вид спорта, единоборство, в котором спортсмены наносят друг другу удары кулаками обычно в специальных перчатках. Рефери контролирует бой, который длится до 12 раундов. Победа присваивается тому из противников, который набрал в итоге большее число очков, либо победителем объявляют того боксера, которому удалось сбить соперника с ног, после чего последний не смог подняться в течение десяти секунд (нокаут); травма, не позволяющая продолжать бой, может стать причиной т. н. технического нокаута. Если после установленного количества раундов поединок не был прекращён, то победитель определяется оценками судей.
                      </p>
                  </div>
              </div>
              <div ref={ref} onKeyDown={handleKeyDown} onClick={onClickCloseModalWindow} tabIndex={0} className={toggle?'overlay' : 'overlay overlay_hidden'}></div>
          </div>
      </Context.Provider>

  );
}

export default App;

