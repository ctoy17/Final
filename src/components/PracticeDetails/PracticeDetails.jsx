export default function PracticeDetails({practicePlan, user}){

    return(
        <div className="practicePlan">
                <h4>date: {practicePlan.date}</h4>
                <p>input by: {practicePlan.username}</p>
                <p>team: {practicePlan.team}</p>
                <p>start: {practicePlan.startTime}</p>
                <p>end:{practicePlan.endTime}</p>
                <p>equip: {practicePlan.equipment}</p>
                <p>drill: {practicePlan.drill}</p>
                <p>announce: {practicePlan.announcement}</p>
        </div> 
    )
}