import React from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next/types";
import { Main } from "@/components/main";

export const Home = ({ characters }:InferGetServerSidePropsType<typeof getServerSideProps>) => {

    return (
        <>
        <div>
          <Main characters={characters}/>
        </div>
        </>
    )
}

export const getServerSideProps: GetServerSideProps<{
    characters: CharactersResult["results"];
  }> = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const charactersResult = (await response.json()) as CharactersResult;
  
    return {
      props: { characters: charactersResult.results },
    };
  };
  
  export default Home