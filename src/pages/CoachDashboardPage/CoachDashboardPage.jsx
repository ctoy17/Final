import * as practicePlanAPI from '../../utilities/practiceplan-api';
import PracticePlanForm from '../../components/PracticePlanForm/PracticePlanForm';
import PracticeDetails from '../../components/PracticeDetails/PracticeDetails'
import { useEffect } from 'react';
import { usePracticePlanContext } from '../../hooks/usePracticePlanContext';


export default function CoachDashboardPage({user}) {
    const {practicePlans, dispatch} = usePracticePlanContext()
    

    useEffect(function(){
        async function getPractice(){
        const response = await practicePlanAPI.practiceList();
        dispatch({type: 'SET_PRACTICEPLANS', payload: response})
        }
    getPractice()
}, [dispatch]); 




    return (
        <main className="coachDashboard">
            <div className='practicePlan'>
            {practicePlans && practicePlans.map((practicePlan)=>(
            <PracticeDetails key={practicePlan._id} practicePlan={practicePlan} />))}
                
            </div>
            <PracticePlanForm user={user}/>
        </main>
    );
}