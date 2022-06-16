import { useState, useEffect } from 'react';
import * as practicePlanAPI from '../../utilities/practiceplan-api';
import { Link, useHistory } from 'react-router-dom';


export default function PracticePlanPage({ user, setUser }) {
  const [practicePlans, setPracticePlans] = useState(null);

  const history = useHistory();

   useEffect(function() {
     async function getPractice() {
       const response = await practicePlanAPI.practiceList();
       const json = await response.json()
       if(response.ok){
           setPracticePlans(json)
       }
    }
     getPractice();

    // async function getPractice(){
    //   const practice = await practicePlanAPI.getPractice();
    //   console.log('practice get is ', practice)
    //   setPractice(practice);
    // }
    // getPractice();
}, []);  // an empty dependency array will run the effect after the first render only

  // Event HANDLERS




  return (
    <main className="PracticePlanPage">
      <aside>
        <Link to="/practices" className="button btn-sm">PREVIOUS PRACTICES</Link>
        {practicePlans && practicePlans.map((practicePlans)=>(
            <p key={practicePlans._id}>{practicePlans}</p>
        ))}
      </aside>
      
    </main>
  );
}