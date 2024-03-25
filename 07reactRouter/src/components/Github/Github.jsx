import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData();

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch("https://api.github.com/users/rudradcruze")
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data);
    //             setData(data);
    //         });
    // }, []);

    return (
        <div className="text-center bg-gray-600 m-4 p-4 text-white text-3xl">
            <h2>Github Followers: {data.followers}</h2>
            <img src={data.avatar_url} alt={data.name} width="300px" />
        </div>
    );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/rudradcruze");
    return response.json();
};
