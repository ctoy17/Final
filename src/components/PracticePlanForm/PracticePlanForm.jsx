import { useState } from 'react'
import { usePracticePlanContext } from '../../hooks/usePracticePlanContext'
import * as practicePlanAPI from '../../utilities/practiceplan-api'

const PracticePlanForm = () => {
    const {dispatch} = usePracticePlanContext()
    
    const [date, setDate] = useState('')
    const [equipment, setEquipment] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')
    const [drill, setDrill] = useState('')
    const [announcement, setAnnouncement] = useState('')
    
    const [emptyFields, setEmptyFields] = useState([])
    const [error, setError] = useState('')
    

    
    async function handleSubmit(evt) {
        evt.preventDefault();
        const planData = {date, equipment, startTime, endTime, drill, announcement}
        try{ 
            const practicePlan = await practicePlanAPI.addPracticePlan(planData);
            setEmptyFields([])
            setError(null)
            setDate('')
            setEquipment('')
            setStartTime('')
            setEndTime('')
            setDrill('')
            setAnnouncement('') 
            dispatch({type: 'CREATE_PRACTICEPLANS', payload: practicePlan})
        }catch{
            setError('please fill out fields')
        }
    }
        

    return(
        <form className="createPlan" onSubmit={handleSubmit}>
            <h3>Input Practice Plan</h3>
            <br/>
            <label>Date</label>
            <input type="text" onChange={(e) => setDate(e.target.value)} value={date} className={emptyFields.includes('date') ? 'error' : ''} />
            <label>Start Time</label>
            <input type="text" onChange={(e) => setStartTime(e.target.value)} value={startTime} className={emptyFields.includes('startTime') ? 'error' : ''} />
            <label>End Time</label>
            <input type="text" onChange={(e) => setEndTime(e.target.value)} value={endTime} className={emptyFields.includes('endTime') ? 'error' : ''} />
            <label>Equipment Needed</label>
            <input type="text" onChange={(e) => setEquipment(e.target.value)} value={equipment} className={emptyFields.includes('equipment') ? 'error' : ''} />
            <label>Drill</label>
            <input type="text" onChange={(e) => setDrill(e.target.value)} value={drill} className={emptyFields.includes('drill') ? 'error' : ''} />
            <label>Announcements</label>
            <input type="text" onChange={(e) => setAnnouncement(e.target.value)} value={announcement} className={emptyFields.includes('announcement') ? 'error' : ''} />
            <button type="submit"  >Submit</button>
            {error && <div className='error'>{error}</div>}
        </form>
    )
}
export default PracticePlanForm