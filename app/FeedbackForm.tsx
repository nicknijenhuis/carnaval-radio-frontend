import Script from 'next/script';
import React from 'react';
import './feedback.css'


const FeedbackForm = () => {

  return <>
    <Script src="https://form.jotform.com/static/feedback2.js" strategy='beforeInteractive' />
    <Script src="/assets/js/feedback.js" strategy='beforeInteractive' />
    <Script src="/assets/js/initFeedback.js" strategy='beforeInteractive' />
  </>
};

export default FeedbackForm;
