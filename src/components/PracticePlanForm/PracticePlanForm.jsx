import { useState } from 'react'
import * as practicePlan from '../../utilities/practiceplan-api'

export default function PracticePlanForm(){
    const [practice, setPractice] = useState({
        user: '',
        date: '',
        equipment: '',
        startTime: '',
        endTime: '',
        drill: '',
        announcement: ''
    });

    const handleChange = (evt) => {
        setPractice(oldPractice =>({
            ...oldPractice,
            [evt.target.name]: evt.target.value
        }));
    }
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        alert(JSON.stringify(this.state));
        try{
            const planData = {...this.state};
            const practice = await practicePlan(planData);
            this.props.setPractice(practice);
            console.log(practice);
        } catch {
            this.setState({ error: 'Sign Up Failed - Try Again' });
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <button type="submit">Submit</button>
        </form>
    )
}