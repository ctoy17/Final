import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import PracticeCard from "../../components/PracticeCard/PracticeCard";
import * as practicePlanAPI from '../../utilities/practiceplan-api'


export default function CoachDashboardPage() {
    const [coachPlan, setCoachPlan] = useState([]);
    useEffect(function(){
        async function getPractice(){
            const practices = await practicePlanAPI.getCoachPractices();
            setCoachPlan(practices);
            console.log(practices)
        }getPractice();
    }, []);

    const handleDelete = async (id) => {
        const practices = await practicePlanAPI.removePracticePlan(id);
        setCoachPlan(practices);
        console.log(practices)
    };

    return (
        <main className="coachDashboard">
            <div className='practicePlan'>
                <>
                {coachPlan.length ? coachPlan.map((coachPlan)=>(
                    <PracticeCard coachPlan={coachPlan} key={coachPlan._id} handleDelete={handleDelete}/>
                )) : <h3> No Practices Have Been Added! </h3>}
                </>
            </div>
            <Link to="/create"> Add a New Plan </Link>
        </main>
    );
}