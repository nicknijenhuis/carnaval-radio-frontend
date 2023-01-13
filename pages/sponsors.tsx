import { ApolloClient, InMemoryCache } from '@apollo/client';
import React from 'react'
import { GET_ALL_SPONSORS } from '../graphql/sponsor_queries';
import { Sponsor } from '../types/sponsorTypes';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_STRAPI_URL,
  cache: new InMemoryCache(),
});


interface Props {
  sponsors: Sponsor[];
}

const sponsors = ({sponsors}: Props) => {
  return (
    <ul>{sponsors.map(x => {return (
      <li key={x.Name}>{x.Name}</li>
    )})}</ul>
  )
}

export async function getStaticProps(){
  const { data } = await client.query({query: GET_ALL_SPONSORS});

  const sponsors: Sponsor[] = data.sponsors.data.map((x: { attributes: { Name: string; }; }) => { return {
    Name: x.attributes.Name
  } as Sponsor    
  });

  return { props: {
      sponsors
    }
  }  
};

export default sponsors