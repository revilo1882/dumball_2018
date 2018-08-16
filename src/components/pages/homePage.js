import React, { Component } from 'react';
import pic from './photos/story-pic.jpg';

class Homepage extends Component {
  render() {
    return (
        <div className="container-fluid">

        <p>
          <img
            src={pic}
            alt=""
            style={{
            float: "right",
            width: "50%"}} />
        </p>
        <h1>
        The Indian Drifters are back!!
        </h1>
        <p>
          ....and this time it{"'"}s personal (it’s
          literally no more personal than last time).
        </p>
        <p>
          We (Matt Reade, Ashley Johnson and Matt Joyce) had so much fun taking
          part and raising money for Dumball 2016 we wanted to do it all again in
          2018. So here we are, the band are back together!!
        </p>
        <p>
          This time round we{"'"}ll be driving from Margate to Corfu cooped up in
          a clapped out old banger recording our progress (lack of it) for your
          amusement. You can expect more blogging, Instagramming and much, much
          more ridiculous fancy dress as we try to navigate our way across 2000km
          of Europeans lesser known roads.
        </p>

        <p>
          We will be raising money for the Teenage Cancer Trust. Most of us
          probably know someone who has been affected by cancer. I wouldn’t even
          want to imagine how devastating this must be for someone in their
          teenage years.
        </p>
        <p >
          Every penny we raise goes directly to the charity to help provide
          life-changing care and support so young people don’t have to face cancer
          alone. Please help us raise as much money as possible!
          through JustGiving is simple, fast and totally secure. Your details are
          safe with JustGiving –they’ll never sell them on or send unwanted
          emails. Once you donate, they’ll send your money directly to the
          charity. So it’s the most efficient way to donate – saving time and
          cutting costs for the charity.
        </p>

        <p>
          It is also important to mention that the trip, the car, the awesome
          fancy dress is all funded by us. 100% of your donation go’s straight
          to the Teenage Cancer Trust.
        </p>
        <p>
          They’ll be tears, tantrums and tyre trouble…. but once we get out of
          Margate we’ll be fine 😉.  We{"'"}d be honoured if you follow our
          journey and spare a few ££ to help us raise as much money for Teenage
          Cancer Trust as possible. The charity are truly remarkable.
        </p>
        <p>
          Much Love
        </p>
        <p>
          Ash, Matt & Matt xx
        </p>

        </div>
    );
  }
}

export default Homepage;
