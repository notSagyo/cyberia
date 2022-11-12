'use client';
// Page used to test stuff or smth
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';

interface TestProps {}

const CustomPlayer = dynamic(
  () => import('/components/CustomPlayer/CustomPlayer'),
  { ssr: false }
);

const TestPage = ({ ...props }: TestProps) => {
  const [playing, setPlaying] = useState(true);

  return (
    <React.Fragment {...props}>
      <CustomPlayer autoplay url="https://youtu.be/6Obd-qh9LJU" />
    </React.Fragment>
  );
};

export default TestPage;

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};
