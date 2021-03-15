import React from 'react';
import { useParams } from 'react-router-dom';
import { CountryInterface } from '../../../../src/resources/countries/country.types';

import Layout from '../../components/Layout/Layout';
import { AttractionResponseInterface } from '../../types/atraction.interface';

import './Country.scss';

const Country = () => {
  // let {id keyof Params} = useParams();
  // console.log(id.id);

  let { id } = useParams<{ id: string }>();
  console.log(id);

  return (
    <>
      <Layout>Country Page</Layout>
    </>
  );
};

export default Country;
