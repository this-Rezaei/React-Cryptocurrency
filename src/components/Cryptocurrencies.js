import React, { useState } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
const Cryptocurrencies = () => {
    const { data: cryptosList, isFetching } = useGetCryptosQuery();
    const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
    console.log(cryptos);
    return (
            <>
            Cryptocurrencies
            </>

    );
};

export default Cryptocurrencies;
