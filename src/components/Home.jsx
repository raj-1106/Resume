import React from "react";
import "../App.css";
import profilePic from "../assets/Profile.jpeg";

const Home = () => (
  <section className="home">
    <h2>Hi, I’m Raj Lathigra. Explore my work.</h2>
    <img src={profilePic} alt="Raj Lathigra" className="profile-pic" />
    <p>Backend Developer || Solidity || Web3</p>
    <p className="intro">
      I'm a passionate blockchain developer with two years of experience specializing in smart contract development and decentralized application architecture. I hold a B.Tech in Information Technology and have worked on diverse projects, including decentralized storage solutions, Web3 games, and NFT platforms, showcasing my ability to solve complex problems in the blockchain space.
    </p>
    <p className="vision">
      I’m particularly excited about contributing to the Web3 ecosystem because of its potential to redefine industries through decentralization and transparency. I’m skilled in Solidity, Web3.js, Node.js, and frameworks like Hardhat, and I take pride in following best practices to ensure security and efficiency in my code.
    </p>
  </section>
);

export default Home;
