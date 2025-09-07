import { useState } from 'react'
import './App.css'



function App() {

  const [isClicked, setClicked] = useState(false);
 
  function clickButton(){
    setClicked(true);

  }

  return (
    <>
      <div>

        <div>
        <button onClick={clickButton} aria-label="follow" className={isClicked ? "follow-button follow-clicked" :"follow-button" }>
          
          <svg className="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
           2 5.42 4.42 3 7.5 3 9.24 3 10.91 3.81 12 5.08
           13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5
           c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
<svg className="heart-break" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 4096.0 3450.0">		<g id="document" transform="scale(1.0022127175632911 1.0022127175632911) translate(2048.0 1721.1391162029458)">			<path d="M-241.055,1425.54 C-20.0925,845.756 119.267,475.407 201.125,260.617 L-985.323,260.617 C-768.555,-252.224 -456.184,-991.253 -297.225,-1367.33 C-354.865,-1487 -719.641,-1637.33 -985.323,-1637.33 C-1541.85,-1637.33 -1998.02,-1185.72 -1998.02,-624.638 C-1998.02,-346.376 -1920.47,-141.1 -1738,41.3672 C-1719.75,59.614 -1669.57,109.792 -1642.2,137.163 L-241.055,1425.54 Z M19.6866,1637.33 L1642.2,137.163 C1669.57,109.792 1719.75,59.614 1738,41.3673 C1920.47,-141.1 1998.02,-346.375 1998.02,-624.638 C1998.02,-1185.72 1541.85,-1637.33 985.323,-1637.33 C719.641,-1637.33 354.865,-1487 297.225,-1367.33 C175.305,-1046.66 85.0077,-809.164 -117.085,-277.632 L985.323,-277.632 C985.323,-277.632 338.743,1007.46 19.6866,1637.33 Z " fill="#ffffffff" fill-opacity="1.00" />		</g>	</svg>
        <div className="follow-label">
Follow</div>
        </button>
       
        </div>


      </div>
    </>
  )
}

export default App
