import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Block = () => {
    const { name } = useParams();
    let link = "https://api.phyotp.dev/virtualestates/name";
    if (name != undefined || name != null) {
        link += `?name=${name}`;
    }
    const { data, loading, error } = useFetch(link);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading data.</p>;
    console.log("Block data:", data);
    if (!data || !data[name ? name : ""] || !data[name ? name : ""].blocks) return <p>No data found.</p>;

    return (
        <div className="square">
            {data[name ? name : ""].blocks.map((block, index) =>
                block.text ? <p key={index}>{block.text}</p> : null
            )}
        </div>
    );
};

export default Block;
