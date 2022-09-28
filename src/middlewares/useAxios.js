import axios from "axios";
import React, { useEffect, useState } from "react";

import { url as baseUrl } from "./baseUrl.json";
const useAxios = (path) => {
  // Parametros
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  // Creamos una funcion useFetch

  useEffect(() => {
    // Realizamos la peticion
    setLoading(true);
    axios.get(`${baseUrl}${path}`).then( res => {
        setLoading(false);
        setData(res.data);
    }).catch( err => {
        setLoading(false);
        setError('ERROR');
    }).finally( () => {
        setLoading(false)
    });
  }, []);
  
  return [ data, loading, error ]

};

export default useAxios;
