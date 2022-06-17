import PracticeDetails from "../../components/PracticeDetails/PracticeDetails";
import { usePracticePlanContext } from "../../hooks/usePracticePlanContext"
import { useEffect } from 'react';
import * as teamAPI from '../../utilities/team-api'


export default function TeamSchedulePage() {
    const {practicePlans, dispatch} = usePracticePlanContext()

    useEffect(function(){
        async function getPractice(){
        const response = await teamAPI.teamList();
        dispatch({type: 'SET_PRACTICEPLANS', payload: response})
        }
    getPractice()
}, [dispatch]); 

    return (
        
        //user={user.filter(user=>user.id === practicePlan.username)}
    
        <h1>Team Schedule</h1>
    );
}