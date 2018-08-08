import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';


class Photos extends Component {
  render() {
    return (
        <div className="container-fluid">
        <Gallery photos={PHOTO_SET} />
        </div>
    );
  }
}

const PHOTO_SET = [
  {
    src: 'https://scontent.flhr3-2.fna.fbcdn.net/v/t1.0-9/12523904_10208680829361111_2069827767328674789_n.jpg?_nc_cat=0&oh=a61fa7717fb0b764d3347ef8eb7e3b78&oe=5C0FC5C1',
    width: 2,
    height: 1
  },
  {
    src: 'https://scontent.flhr3-2.fna.fbcdn.net/v/t1.0-9/12524210_10208680829161106_4518267949524949667_n.jpg?_nc_cat=0&oh=857d08f6652058f6e526ea68cc6c2fec&oe=5BFC5FDC',
    width: 1,
    height: 1
  },
  {
    src: 'https://scontent.flhr3-2.fna.fbcdn.net/v/t1.0-9/12507592_10208680829001102_8974610524742624524_n.jpg?_nc_cat=0&oh=98ec351527bbd98cd2e88c1466225759&oe=5C00E75A',
    width: 1,
    height: 1
  },
  {
    src: 'https://scontent.flhr3-2.fna.fbcdn.net/v/t1.0-9/12523043_10208680827401062_2711869123040442639_n.jpg?_nc_cat=0&oh=da514392c3f8f762608bdfbf673825b7&oe=5C0A2CE4',
    width: 1,
    height: 1
  }
];

export default Photos;
