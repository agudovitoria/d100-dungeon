import React from 'react';
import { D100Stage } from '../components/D100Stage';
import { dungeons } from '../shapes/dungeons';

export const Showcase = () => (<D100Stage dungeons={dungeons}/>);
