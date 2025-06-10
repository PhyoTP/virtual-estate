import { useParams } from "react-router-dom";

const Navigation = () => {
    const { level } = useParams();
    const lvl = level ? level : "1"; // Default to level 1 if not specified
    console.log("Navigation level:", level);
    return (
        <div className="square">
            <h1>Level {lvl}</h1>
        </div>
    );
}
export default Navigation;