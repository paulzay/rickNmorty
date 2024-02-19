"use client"

import Search from "./components/Search/Search";
import List from "./components/List/List";
import { useEffect, useState } from 'react';
import { LOAD_LOCATIONS } from "@/app/api/GraphQl/Queries";
import { useQuery } from '@apollo/client';

export default function Home() {
  const { loading, data } = useQuery(LOAD_LOCATIONS);
  const [locations, setLocations] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (data) {
      setLocations(data.locations.results)
    }
  }, [data]);

  return (
    <main className="h-screen w-screen bg-white">
      <nav className="bg-black p-5">
        <Search searchText={query} setSearchText={setQuery} />
      </nav>
      {loading ? <p>Loading</p> : <List locations={locations} query={query} />}
    </main>
  );
}

