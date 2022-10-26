import { useNavigate } from 'react-router'
import {motion} from 'framer-motion'

function Logout (){
   
 function destroy (){
    return(
        window.sessionStorage.removeItem('loggedAppUser'),
        window.location.href = 'http://localhost:3000/'
    )
 }
    
    return (
            <div>
            <motion.button  whileHover={{ scale: 1.5 }}
    whileTap={{ scale: 0.4 }} onClick={()=>destroy()} className="btn btn-danger ">Logout</motion.button>
          </div>
    )
}

export default Logout