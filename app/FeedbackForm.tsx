import Script from 'next/script';
import React from 'react';

const FeedbackForm = () => {

  return <>
    <Script src="https://form.jotform.com/static/feedback2.js" strategy='beforeInteractive' />
    <Script src="/assets/feedback.js" strategy='beforeInteractive' />
    <Script src="/assets/initFeedback.js" strategy='beforeInteractive' />
  </>
};

export default FeedbackForm;
