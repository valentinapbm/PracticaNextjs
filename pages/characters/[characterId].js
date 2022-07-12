import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Character = ({ dataRickMorty }) => {
    const router = useRouter();
    const [data, setData] = useState(dataRickMorty);



    return (
        <div>
        <p>
            {` este es el producto ${dataRickMorty.name}`}{" "}
        </p>
        </div>
    );
    };

    export async function getServerSideProps({ params }) {
    const apiRickMorty = await fetch(
        `https://rickandmortyapi.com/api/character/${params.characterId}`,
        {
        method: "GET",
        }
    );
    const dataRickMorty = await apiRickMorty.json();
    console.log("dataServer:", dataRickMorty);

    return {
        props: {
        dataRickMorty,
        }, // will be passed to the page component as props
    };
    }

export default Character;