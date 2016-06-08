import React from 'react';

const VideoExplanation = function() {
  return (
    <div className="videoExplanation">
        <div className="col-lg-5 col-md-4 col-sm-6 col-xs-12">
          <h2> What is Chutte?</h2>
            <p>In the simplest terms Chutte is a Ducth Auction website allowing users to sell items until a market equilibrium is reached</p>
        </div>
        <div className="col-lg-6 col-md-8 col-sm-6 col-xs-12">
          <iframe width="530" height="315" src="https://www.youtube.com/embed/L0rUpUCV1jk" frameborder="0" allowfullscreen></iframe>
        </div>
    </div>
  )
};

export default VideoExplanation;
