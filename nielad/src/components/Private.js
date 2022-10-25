import React, { useState } from 'react'
import axios from 'axios'




const Private = () => {

  const {tokenRiot} = require('./config.json')
  const[id, setId]=useState('')
  const[accountId, setAccountId]=useState('')
  const[puuid, setPuuid]=useState('')
  const[name, setName]=useState('')
  const[profileIconId, setProfileIconId]=useState('')
  const[revisionDate, setRevisionDate]=useState('')
  const[summonerLevel, setSummonerLevel]=useState('')
  

  const [searchText, setSearchText] = useState("")

  function searchSumoner(event){
    event.preventDefault()
    const apiCall = "https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+searchText+"?api_key="+tokenRiot

    axios.get(apiCall).then(function(response){
      setId(response.data.id)
      setAccountId(response.data.accountId)
      setPuuid(response.data.puuid)
      setName(response.data.name)
      setProfileIconId(response.data.profileIconId)
      setRevisionDate(response.data.revisionDate)
      setSummonerLevel(response.data.summonerLevel)
    }).catch(function(error){
      console.log(error)
    })
  }


  return (
    <div className='container'>
        <h1>Sumoner Name</h1>
        <form className="col-sm-6 offset-3">
        <label htmlFor="name" className="form-label">
        Sumoner Name
            </label>
            <input
              className="form-control"
              type="text"
              name="sumonerName"
              placeholder="Sumoner Name"
              onChange={e=> setSearchText(e.target.value)}
              required
            ></input>
            
            <button onClick={e=>searchSumoner(e)} className="btn btn-success mt-3">Search</button>
        </form>
        <div className="col-sm-6 offset-3 mt-3 ">
        <ul className="list-group ">
          <li className='list-group-item bg-info text-white'>Id:</li>
          <li className="list-group-item text-white">{id}</li>
          <li className='list-group-item bg-info text-white'>accountId:</li>
          <li className="list-group-item text-white">{accountId}</li>
          <li className='list-group-item bg-info text-white'>puuid:</li>
          <li className="list-group-item text-white">{puuid}</li>
          <li className='list-group-item bg-info text-white'>name:</li>
          <li className="list-group-item text-white">{name}</li>
          <li className='list-group-item bg-info text-white'>profileIconId:</li>
          <li className="list-group-item text-white">{profileIconId}</li>
          <li className='list-group-item bg-info text-white'>revisionDate:</li>
          <li className="list-group-item text-white">{revisionDate}</li>
          <li className='list-group-item bg-info text-white'>summonerLevel:</li>
          <li className="list-group-item text-white">{summonerLevel}</li>
        </ul>
        </div>
    </div>
  )
}

export default Private