import axios from "axios"
import { useState } from "react"

export const Content = () => {

  const [hash, setHash] = useState("")

  const claim = () => {
    axios
      .post('/contract/issueTokens', {
        address: [],
        itemIds: [3]
      })
      .then((response) => {
        setHash(response.data)
      })
      .catch(error => {
        alert(`Failed! ` + error)
      })
  }

  return (
    <div className='content'>

    <div className='sub-text'>PUBLISHED 14.01.2023</div>
    <div className='title'>CRISTAL TRENCH</div>
    <div className='text'>by LUCII</div>

    <div className='utility'>
    
      <div className='utility-title'>Utilities</div>
      <hr style={{position: "absolute", width: "5rem"}}/>
      <hr style={{opacity: "0.3"}}/>

      <div className='utility-desc'>

        <div className="utility-title" style={{marginTop: "2rem"}}>Metaverse Wearable</div>

        <div style={{display: "flex", justifyContent: "space-between", marginTop: "1rem"}}>
          <div className="default-text">Claim decentraland wearable</div>
          <button className="btn-fill" onClick={hash && hash.length ? "" : claim}>
            {hash && hash.length ? hash : 'Claim'}
          </button>
        </div>

        <div className="utility-title" style={{marginTop: "2rem"}}>AR Filter</div>

        <div style={{display: "flex", justifyContent: "space-between", marginTop: "1rem"}}>
          <div className="default-text">Scan snapcode</div>
          <div>
            <img className="snapcode" src="src\assets\snapcode.png"></img>
          </div>
          <video width="150" height="280" autoPlay loop muted>
            <source src="src\Components\Cristal Trench.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

      </div>

    </div>
    
  </div>
  )
}