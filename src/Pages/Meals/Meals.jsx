import React, { useState } from 'react';
import Flexbox from '../../components/Flexbox/Flexbox';
import Heading from '../../components/Heading/Heading';
import { mealsData } from '../../mock/meals';
import { Meal } from './Meal';
import { Wrapper } from './Meals.style';

const Meals = () => {
  const [meals, setMeals] = useState(mealsData);

  return (
    <Wrapper>
      <Heading size="lg">Ovqatlar menyusi</Heading>
      <Flexbox flexDirection="row" flexWrap="wrap" gap="20px">
        {meals.map((meal) => (
          <Meal key={meal.id} meal={meal} />
        ))}
      </Flexbox>
    </Wrapper>
  );
};

export default Meals;
