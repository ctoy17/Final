import { Link } from 'react-router-dom'
import PracticePlanPage from '../PracticePlanPage/PracticePlanPage';

export default function NewTeamPage() {
    return (
        <>
            <h1>New Team </h1>
            <Link to="/practiceplan" className="button btn-sm">PREVIOUS PRACTICES </Link>
        </>
    );
}