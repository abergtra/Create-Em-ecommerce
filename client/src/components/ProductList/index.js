//import react and query
import React from "react";
import { useQuery } from '@apollo/client';
//import product items
import ProductItem from '../ProductItem';
import { QUERY_PRODUCTS } from '../../utils/queries';
import spinner from '../../assets/spinner.gif';
