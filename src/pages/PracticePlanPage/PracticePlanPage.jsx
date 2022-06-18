import { useState } from 'react';
import * as practicePlanAPI from '../../utilities/practiceplan-api';
import { useHistory } from 'react-router-dom';


export default function PracticePlanPage() {
  const [practice, setPractice] = useState({
    date: "",
    equipment: "",
    startTime: "",
    endTime: "",
    drill: "",
    announcement: ""
  });

  const history = useHistory();
  
  function handleChange(evt){
    setPractice({...practice, [evt.target.name]: evt.target.value });
  }
  async function handleSubmit(evt) {
    evt.preventDefault();
    await practicePlanAPI.createPractice(practice)
    history.push('/');
  }


return (
  <div className='practicePlan'>
      <form className="createPlan" onSubmit={handleSubmit} >
          <h3>Input Practice Plan</h3>
          <br/>
          <label>Date</label>
              <input type="text" name="date" value={practice.date} onChange={handleChange} />
          <label>Start Time</label>
              <input type="text" name="startTime" value={practice.startTime} onChange={handleChange} />
          <label>End Time</label>
              <input type="text" name="endTime" value={practice.endTime} onChange={handleChange} />
          <label>Equipment Needed</label>
              <input type="text" name="equipment" value={practice.equipment} onChange={handleChange}/>
          <label>Drill</label>
              <input type="text" name="drill" value={practice.drill} onChange={handleChange} />
          <label>Announcements</label>
              <input type="text" name="announcement" value={practice.announcement} onChange={handleChange} />
          <button type="submit">Submit</button>
      </form>
  </div>
  );
}
