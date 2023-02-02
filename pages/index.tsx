import { GetServerSideProps, InferGetServerSidePropsType } from "next/types";
import { useEffect, useState } from "react";
import Head from "next/head";
import { Pagination } from "@/components/pagination";
import { Search } from "@/components/search";
import { Characters } from "@/components/characters";
import { Filter } from "@/components/filter";

const defaultEndpoint: string = "https://rickandmortyapi.com/api/character/"

export const getServerSideProps: GetServerSideProps<{
  characters: CharactersResult;
}> = async () => {

  const response = await fetch(defaultEndpoint);
  const charactersResult = (await response.json()) as CharactersResult;

  return {
    props: { characters: charactersResult },
  };
};

export const Home = ({ characters }: InferGetServerSidePropsType<typeof getServerSideProps>) => {


  const { info, results: defaultResults = [] } = characters;
  const [results, setResults] = useState(defaultResults);
  const [page, setPage] = useState({ ...info, current: defaultEndpoint });

  const { current } = page;

  useEffect(() => {
    if (current === defaultEndpoint) return;

    console.log (current)
    async function request() {
      await fetch(current)
        .then((res) => res.json())
        .then((data) => {
          if (data == null) {
            setResults(defaultResults);
          } else {
            setResults(data.results); setPage({ ...data.info, current:current })
          }
        })
    }

    request()
  }, [current])

  return (
    <div>
      <Head>
        <title>Rick & Morty App</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous"/>
      </Head>

      <main>
        <div className="navbar">
          <div>
            <h3>Rick & Morty App</h3>
          </div>
          <Filter  setPage={setPage} page={page} />
          <Search  setPage={setPage} page={page} />
        </div>
        <Characters results={results} />
        <div className="d-flex justify-content-center mt-4 mb-4">
          <Pagination setPage={setPage} page={page} />
        </div>
      </main>
    </div >
  )
}

export default Home