import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Modal, Button } from "antd";
import styled from "styled-components";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};
export default function Cart() {
  const [cart, setCart] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState(null);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  const { Meta } = Card;

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    console.log(windowDimensions);
  }, [windowDimensions]);
  useEffect(() => {
    axios
      .get("https://api.pexels.com/v1/search?query=nature&per_page=18", {
        headers: {
          Authorization:
            "563492ad6f91700001000001e1cfb70ed64349ef95d5a1aa3753dd50",
        },
      })
      .then((res) => {
        const data = res.data;
        setCart(data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const showModal = (item) => {
    setIsModalVisible(true);
    setData(item);
    console.log(item);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return cart ? (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto auto auto auto",
      }}
    >
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={(80 * windowDimensions.width) / 100}
      >
        <div style={{ width: "100%", overFlow: "scroll" }}>
          {data && <img src={data.src.original} style={{ width: "100%" }} />}
        </div>
      </Modal>
      {cart.photos.map((item, index) => {
        return (
          <Card
            onClick={() => showModal(item)}
            hoverable
            style={{
              width: 240,
              marginBottom: "30px",
              borderRadius: "10px",
              cursor: "zoom-in",
            }}
            key={index}
            id={index}
            cover={
              <img
                src={item.src.large}
                style={{
                  height: 300,
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
            }
          >
            <Meta
              avatar={<img src={item.src.tiny} style={{ width: 20 }} />}
              title={item.photographer}
              description={item.photographer_url}
            />
          </Card>
        );
      })}
    </div>
  ) : null;
}
// const Styledhoverable = styled(Card.hoverable)`
//   pointer-events: none;
// `;
