import React from "react";
import styled from "styled-components";
import Head from "next/head";
import { useRouter } from "next/router";

import db from "../db.json";
import Widget from "../src/components/Widget";
import QuizBackground from "../src/components/QuizBackground";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";
import QuizLogo from "../src/components/QuizLogo";

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>One Piece - Quiz</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>One Piece</h1>
          </Widget.Header>

          <Widget.Content>
            <form 
              onSubmit={(e) => {
                router.push(`/quiz?name=${name}`);
            }}
            >
              <input 
                onChange={(e) => {
                  setName(e.target.value);
              }}
                placeHolder="Type your name" 
              />
              <button type="submit" disabled={name.length === 0}>
                Start 
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
              <h1>Quiz:</h1>
              <p>DESCRIPTION</p>
            </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/yuukiasuna00/onepiece-quiz"/>
    </QuizBackground>
  );
}
