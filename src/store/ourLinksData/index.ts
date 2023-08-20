import { combineReducers } from '@reduxjs/toolkit';

import data from './data';

const globalLinks = combineReducers({ data });

export default globalLinks;
