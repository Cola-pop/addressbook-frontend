import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

import readmePath from '../../assets/README.md';

const ReadMe = () => {
  const [readmeText, setReadmeText] = useState('');

  useEffect(() => {
    fetch(readmePath)
      .then((res) => res.text())
      .then((text) => setReadmeText(text));
  }, []);

  return <ReactMarkdown children={readmeText} />;
};

export default ReadMe;
