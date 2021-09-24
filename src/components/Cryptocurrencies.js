import React, { useState, useEffect } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

const Cryptocurrencies = ({ simplified }) => {
    const count = simplified ? 10 : 100;
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
        // setCryptos(cryptosList?.data?.coins);
        const filteredData = cryptosList?.data?.coins.filter((coin) =>
            coin.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setCryptos(filteredData);
    }, [cryptosList, searchTerm]);
    if (isFetching) return "Loading...";

    return (
        <>
            {!simplified && (
                <div className="search-crypto">
                    <Input
                        placeholder="Search Coin"
                        onClick={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            )}
            <Row gutter={[32, 32]} className="crypto-card-container">
                {cryptos?.map((currency) => (
                    <Col
                        xs={24}
                        sm={12}
                        lg={6}
                        className="crypto-card"
                        key={currency.id}
                    >
                        <Link to={`/crypto/${currency.id}`}>
                            <Card
                                title={`${currency.rank}. ${currency.name}`}
                                extra={
                                    <img
                                        className="crypto-image"
                                        src={currency.iconUrl}
                                    />
                                }
                                hoverable
                            >
                                <p className="price">
                                    Price:
                                    <p style={{ fontWeight: 700 }}>
                                        {millify(currency.price)}
                                    </p>
                                </p>
                                <p className="price">
                                    Market Cap:
                                    <p style={{ fontWeight: 700 }}>
                                        {millify(currency.marketCap)}
                                    </p>
                                </p>
                                <p className="price">
                                    Daily Change:
                                    <p
                                        className={
                                            millify(currency.change) > 0
                                                ? "price-hi"
                                                : "price-low"
                                        }
                                    >
                                        {millify(currency.change)}%
                                    </p>
                                </p>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default Cryptocurrencies;
