import React from 'react';
import { useSelector } from 'react-redux';
import { getDungeons } from '../redux/dungeons/dungeonsSlice';
import { D100Stage } from '../components/D100Stage';

export const Home = () => (<D100Stage dungeons={useSelector(getDungeons)} />);
