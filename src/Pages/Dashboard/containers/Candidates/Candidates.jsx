import React, { useEffect, useState } from 'react';
import eliteRegisterApi from '../../../../api/api';
import Heading from '../../../../components/Heading/Heading';
import { Table, Wrapper } from './Candidates.style';

const Candidates = () => {
  const [candidates, setCandidates] = useState();

  useEffect(() => {
    eliteRegisterApi.get('/candidates').then((res) => setCandidates(res.data));
  }, []);

  if (!candidates)
    return (
      <Wrapper>
        <Heading align="start">Yuklanmoqda...</Heading>
      </Wrapper>
    );

  return (
    <Wrapper>
      <Heading color="#262729" align="start">
        Ro`yxatdan o`tganlar
      </Heading>
      <Table>
        <thead>
          <tr>
            <th>№</th>
            <th>F.I.O</th>
            <th>Sinf</th>
            <th>Manzil</th>
            <th>Telefon raqam</th>
            <th>Otasi</th>
            <th>Onasi</th>
            <th>To`lov turi</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate, index) => (
            <tr key={candidate.id}>
              <td>{index + 1}</td>
              <td>{candidate.full_name}</td>
              <td>{candidate.grade}</td>
              <td>{candidate.address}</td>
              <td>{candidate.phone_number}</td>
              <td>{candidate.job_of_father}</td>
              <td>{candidate.job_of_mother}</td>
              <td>{candidate.payment_mode}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default Candidates;
