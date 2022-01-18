import React from 'react';
import { D100Stage } from '../components/D100Stage';
import { dungeons } from '../shapes/dungeons';

export const Dungeons = () => (<D100Stage dungeons={dungeons}/>);
