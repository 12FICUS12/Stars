import React from 'react';
import { Star } from './Star';

interface StarsProps {
    count?: number;
  }

export function Stars({count = 0}: StarsProps) {
    if (typeof count !== 'number' || count < 1 || count > 5) return null;

    const starsArray = Array.from({length: count});

    return (
        <ul className="card-body-stars u-clearfix">
        {starsArray.map((_, index) => (
          <li key={index}>
            <Star />
          </li>
        ))}
      </ul>
    );
}