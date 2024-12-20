"use client";

import { useEffect } from 'react';

const ApolloScheduler = () => {
  useEffect(() => {
    // Load Apollo's scheduling widget script
    const script = document.createElement('script');
    script.src = 'https://cdn.apollo.io/scheduling-embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Initialize the widget once the script loads
    script.onload = () => {
      // @ts-ignore - Apollo's scheduling widget is loaded globally
      if (window.ApolloMeetings) {
        // @ts-ignore
        window.ApolloMeetings.initWidget({
          appId: 'YOUR_APP_ID', // You'll need to get this from Apollo
          schedulingLink: 'geeta_revns/15-min',
          // Optional: Specify where to mount the widget
          // domElement: document.getElementById('apollo-scheduling-embed')
        });
      }
    };

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full h-screen">
      <div id="apollo-scheduling-embed" className="w-full h-full" />
    </div>
  );
};

export default ApolloScheduler;