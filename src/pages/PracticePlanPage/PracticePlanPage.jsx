import { useState, useEffect, useRef } from 'react';
// import * as itemsAPI from '../../utilities/items-api';
// import './NewOrderPage.css';
import { Link, useHistory } from 'react-router-dom';


export default function PracticePlanPage({ user, setUser }) {
  const [practice, setPractice] = useState(null);
//   const categoriesRef = useRef([]);
  const history = useHistory();

//   useEffect(function() {
//     async function getPractice() {
//       const plans = await plansAPI.getAll();
//     }
//     getPlans();

    async function getPractice(){
      const practice = await practicesAPI.getPractice();
      console.log('practice get is ', practice)
      setPractice(practice);
    }
    getPractice();
}, []);  // an empty dependency array will run the effect after the first render only

  // Event HANDLERS


  async function handleSchedule() {
    await practicesAPI.schedule();
    history.push('./practices');
  }

  return (
    <main className="PracticePlanPage">
      <aside>
        <Link to="/practices" className="button btn-sm">PREVIOUS PRACTICES</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <PracticeDetail 
        practice={practice}
        handleSchedule={handleSchedule}
      />
    </main>
  );
}