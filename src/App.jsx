import './App.css'

function App() {
  document.addEventListener("keydown", (e) => {
    console.log(e.code);

    let btn = document.getElementById(e.code);
    btn.style.backgroundColor = 'white';
    btn.style.color = 'black';
  })

  return (
    <div className="keyboard">
      <h1>Key Tester</h1>
      <p style={{textAlign: "center"}}>Press any key</p>
      <div className="keys">
        <div className="keys-sec1">
          <div className="keys-row">
            <button id="Escape" className="fn-key">esc</button>
            <button id="F1" className="fn-key">F1</button>
            <button id="F2" className="fn-key">F2</button>
            <button id="F3" className="fn-key">F3</button>
            <button id="F4" className="fn-key">F4</button>
            <button id="F5" className="fn-key">F5</button>
            <button id="F6" className="fn-key">F6</button>
            <button id="F7" className="fn-key">F7</button>
            <button id="F8" className="fn-key">F8</button>
            <button id="F9" className="fn-key">F9</button>
            <button id="F10" className="fn-key">F10</button>
            <button id="F11" className="fn-key">F11</button>
            <button id="F12" className="fn-key">F12</button>
            <button id="Insert" className="fn-key">insert</button>
            <button id="btn" className="fn-key">prt sc</button>
            <button id="Delete" className="fn-key">delete</button>
          </div>
          <div className="keys-row">
            <button id="Backquote" className="key">
              <p>~</p>
              <p>`</p>
            </button>
            <button id="Digit1" className="key">
              <p>!</p>
              <p>1</p>
            </button>
            <button id="Digit2" className="key">
              <p>@</p>
              <p>2</p>
            </button>
            <button id="Digit3" className="key">
              <p>#</p>
              <p>3</p>
            </button>
            <button id="Digit4" className="key">
              <p>$</p>
              <p>4</p>
            </button>
            <button id="Digit5" className="key">
              <p>%</p>
              <p>5</p>
            </button>
            <button id="Digit6" className="key">
              <p>^</p>
              <p>6</p>
            </button>
            <button id="Digit7" className="key">
              <p>&</p>
              <p>7</p>
            </button>
            <button id="Digit8" className="key">
              <p>*</p>
              <p>8</p>
            </button>
            <button id="Digit9" className="key">
              <p>(</p>
              <p>9</p>
            </button>
            <button id="Digit0" className="key">
              <p>)</p>
              <p>0</p>
            </button>
            <button id="Minus" className="key">
              <p>_</p>
              <p>-</p>
            </button>
            <button id="Equal" className="key">
              <p>+</p>
              <p>=</p>
            </button>
            <button id="Backspace" className="key">backspace</button>
          </div>
          <div className="keys-row">
            <button id="Tab" className="key">tab</button>
            <button id="KeyQ" className="key">Q</button>
            <button id="KeyW" className="key">W</button>
            <button id="KeyE" className="key">E</button>
            <button id="KeyR" className="key">R</button>
            <button id="KeyT" className="key">T</button>
            <button id="KeyY" className="key">Y</button>
            <button id="KeyU" className="key">U</button>
            <button id="KeyI" className="key">I</button>
            <button id="KeyO" className="key">O</button>
            <button id="KeyP" className="key">P</button>
            <button id="BracketLeft" className="key">
              <p>&#123;</p>
              <p>[</p>
            </button>
            <button id="BracketRight" className="key">
              <p>&#125;</p>
              <p>]</p>
            </button>
            <button id="Backslash" className="key">
              <p>|</p>
              <p>\</p>
            </button>
          </div>
          <div className="keys-row">
            <button id="CapsLock" className="key">caps lock</button>
            <button id="KeyA" className="key">A</button>
            <button id="KeyS" className="key">S</button>
            <button id="KeyD" className="key">D</button>
            <button id="KeyF" className="key">F</button>
            <button id="KeyG" className="key">G</button>
            <button id="KeyH" className="key">H</button>
            <button id="KeyJ" className="key">J</button>
            <button id="KeyK" className="key">K</button>
            <button id="KeyL" className="key">L</button>
            <button id="Semicolon" className="key">
              <p>:</p>
              <p>;</p>
            </button>
            <button id="Quote" className="key">
              <p>"</p>
              <p>'</p>
            </button>
            <button id="Enter" className="key">enter</button>
          </div>
          <div className="keys-row">
            <button id="ShiftLeft" className="key shift">shift</button>
            <button id="KeyZ" className="key">Z</button>
            <button id="KeyX" className="key">X</button>
            <button id="KeyC" className="key">C</button>
            <button id="KeyV" className="key">V</button>
            <button id="KeyB" className="key">B</button>
            <button id="KeyN" className="key">N</button>
            <button id="KeyM" className="key">M</button>
            <button id="Comma" className="key"><p>&lt;</p><p>,</p></button>
            <button id="Period" className="key"> <p>&gt;</p><p>.</p></button>
            <button id="Slash" className="key">
              <p>?</p>
              <p>/</p>
            </button>
            <button id="ShiftRight" className="key shift">shift</button>
          </div>
          <div className="keys-row">
            <button id="ControlLeft" className="key">ctrl</button>
            <button id="btn" className="key">Fn</button>
            <button id="MetaLeft" className="key">
              <img className="icon" src="https://cdn-icons-png.flaticon.com/512/732/732225.png" alt="" />
            </button>
            <button id="AltLeft" className="key">alt</button>
            <button id="Space" className="key"></button>
            <button id="AltRight" className="key">alt</button>
            <button id="btn" className="key">ctrl</button>
            <button id="ArrowLeft" className="key">
              <img className="icon left-icon" src="https://cdn-icons-png.flaticon.com/512/13/13021.png" alt="" />
            </button>
            <div id="up-dn">
              <button id="ArrowUp" className="key">
                <img className="icon up-icon" src="https://cdn-icons-png.flaticon.com/512/13/13021.png" alt="" />
              </button>
              <button id="ArrowDown" className="key">
                <img className="icon dn-icon" src="https://cdn-icons-png.flaticon.com/512/13/13021.png" alt="" />
              </button>
            </div>
            <button id="ArrowRight" className="key">
              <img className="icon right-icon" src="https://cdn-icons-png.flaticon.com/512/13/13021.png" alt="" />
            </button>
          </div>
        </div>
        <div className="keys-sec2">
          <div className="keys-sec2-sec1">
            <div className="keys-sec2-sec1-sec1">
              <div className="keys-column">
                <button id="Home" className="fn-key num-key">home</button>
                <button id="NumLock" className="key num-key">num lock</button>
                <button id="Numpad7" className="key num-key">7</button>
                <button id="Numpad4" className="key num-key">4</button>
                <button id="Numpad1" className="key num-key">1</button>
              </div>
              <div className="keys-column">
                <button id="End" className="fn-key num-key">end</button>
                <button id="NumpadDivide" className="key num-key">/</button>
                <button id="Numpad8" className="key num-key">8</button>
                <button id="Numpad5" className="key num-key">5</button>
                <button id="Numpad2" className="key num-key">2</button>
              </div>
            </div>
            <button id="Numpad0" className="key num-key keys-column">0</button>
          </div>
          <div className="keys-sec2-sec2">
            <div className="keys-column">
              <button id="btn" className="fn-key num-key">pg up</button>
              <button id="NumpadMultiply" className="key num-key">*</button>
              <button id="Numpad9" className="key num-key">9</button>
              <button id="Numpad6" className="key num-key">6</button>
              <button id="Numpad3" className="key num-key">3</button>
              <button id="NumpadDecimal" className="key num-key">.</button>
            </div>
            <div className="keys-column">
              <button id="btn" className="fn-key num-key">pg dn</button>
              <button id="NumpadSubtract" className="key num-key">-</button>
              <button id="NumpadAdd" className="key num-key">+</button>
              <button id="NumpadEnter" className="key num-key">enter</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
