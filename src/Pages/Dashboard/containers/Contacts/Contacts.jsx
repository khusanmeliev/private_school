import React, { useEffect, useState } from 'react';
import eliteRegisterApi from '../../../../api/api';
import Heading from '../../../../components/Heading/Heading';
import Text from '../../../../components/Text/Text';
import { Table, Wrapper } from './Contacts.style';

const Contacts = () => {
  const [contacts, setContacts] = useState();

  useEffect(() => {
    eliteRegisterApi.get('/contacts').then((res) => setContacts(res.data));
  }, []);

  if (!contacts)
    return (
      <Wrapper>
        <Heading align="start">Yuklanmoqda...</Heading>
      </Wrapper>
    );

  return (
    <Wrapper>
      <Heading color="#262729" align="start">
        Xabarlar
      </Heading>
      <Table>
        <thead>
          <tr>
            <th>№</th>
            <th>F.I.O</th>
            <th>Telefon raqam</th>
            <th>Xabar</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length === 0 && (
            <tr>
              <td colSpan={4} style={{ padding: '20px' }}>
                <Text align="center">Xabarlar yo`q!</Text>
              </td>
            </tr>
          )}
          {contacts.map((contact, index) => (
            <tr key={contact.id}>
              <td>{index + 1}</td>
              <td>{contact.full_name}</td>
              <td>{contact.phone_number}</td>
              <td>{contact.comment}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default Contacts;
