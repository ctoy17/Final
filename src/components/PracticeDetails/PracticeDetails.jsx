export default function PracticeDetails({practicePlan}){
    return(
        <div className="practicePlan">
            <h4>{practicePlan.date}</h4>
            <p>{practicePlan.startTime}</p>
            <p>{practicePlan.endTime}</p>
            <p>{practicePlan.equipment}</p>
            <p>{practicePlan.drill}</p>
            <p>{practicePlan.announcement}</p>
        </div>
    )
}