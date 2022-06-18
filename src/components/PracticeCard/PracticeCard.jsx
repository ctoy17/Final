
export default function PracticeCard({ coachPlan, handleDelete }){
    return(
        <>
        <div>
            <p>date: {coachPlan.date}</p>
            <p>start: {coachPlan.startTime}</p>
            <p>end: {coachPlan.endTime}</p>
            <p>equip: {coachPlan.equipment}</p>
            <p>drill: {coachPlan.drill}</p>
            <p>announce: {coachPlan.announcement}</p>
        </div>
        <button type="button" onClick={(evt)=>handleDelete(coachPlan._id)}>Remove</button>
</>
    )
};
