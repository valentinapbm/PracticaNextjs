import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Characters = ({ dataRickMorty }) => {
    const router = useRouter();
    const [data, setData] = useState(dataRickMorty.results);
    console.log("data", data)


    const handleClick = (id) => {
        router.push({
            pathname: `/characters/${id}`,
            });
    }


    return (
        <div>
            {data.map((character, index)=>(
                <div key={character.id}>
                <img src={character.image}></img>
                <p>{character.name}</p>
                <p>{character.location.name}</p>
                <button onClick={() => handleClick(character.id)}>Ver detalles</button>
                </div>
            ))}
        
        <button onClick={handleClick}>Ir al Home</button>
        </div>
    );
    };

    export async function getServerSideProps({ params }) {
    const apiRickMorty = await fetch(
        `https://rickandmortyapi.com/api/character`,
        {
        method: "GET",
        }
    );
    const dataRickMorty = await apiRickMorty.json();

    return {
        props: {
        dataRickMorty,
        },
    };
    }

export default Characters;