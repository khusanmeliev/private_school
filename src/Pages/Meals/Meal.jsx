import React from 'react';
import Text from '../../components/Text/Text';
import { Card, CardDetails, CardImage } from './Meals.style';

export const Meal = ({ meal }) => {
  return (
    <Card key={meal.id}>
      <CardImage src={meal.image} alt={meal.name} />
      <CardDetails>
        {meal.ingredients.map((item) => (
          <Text key={item} style={{ margin: 0 }}>
            {item}
          </Text>
        ))}
      </CardDetails>
    </Card>
  );
};
