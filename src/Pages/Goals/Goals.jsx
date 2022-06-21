import React from 'react';
import { BiTrendingUp } from 'react-icons/bi';
import Flexbox from '../../components/Flexbox/Flexbox';
import Heading from '../../components/Heading/Heading';
import Text from '../../components/Text/Text';
import { GoalsCard, GoalsWrapper } from './Goals.style';

const Goals = () => {
  return (
    <GoalsWrapper>
      <GoalsCard>
        <div style={{ fontSize: '90px', color: 'white' }}>
          <BiTrendingUp />
        </div>
        <Flexbox width="60%" gap="20px">
          <Heading color="white" style={{ margin: '0' }}>
            Bizning vazifamiz
          </Heading>
          <Text color="white" size="lg" align="center" style={{ margin: '0' }}>
            Hayotga tayyorlaymiz.
          </Text>
        </Flexbox>
      </GoalsCard>
      <GoalsCard>
        <div style={{ fontSize: '90px', color: 'white' }}>
          <BiTrendingUp />
        </div>
        <Flexbox alignItems="flexStart" gap="20px" width="60%" borderRadius="10px">
          <Heading color="white" style={{ margin: '0' }}>
            Bizning maqsadimiz
          </Heading>
          <Text color="white" size="lg" align="center" style={{ margin: '0' }}>
            Ta`lim sifatni saqlab va oshirgan holda xususiy maktablar orasida lider bo`lish.
          </Text>
        </Flexbox>
      </GoalsCard>
    </GoalsWrapper>
  );
};

export default Goals;
