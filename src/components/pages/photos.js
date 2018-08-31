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
		src: 'https://scontent.flhr3-2.fna.fbcdn.net/v/t31.0-8/10295468_10208613548679136_2663430456730850361_o.jpg?_nc_cat=0&oh=bc15b6f24339299d8b7f70f8a3cec770&oe=5BC6B363',
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
	},
	{
		src: 'https://c1.staticflickr.com/2/1571/24612468155_8799fffbdd_b.jpg',
		width: 2,
		height: 1
	},
	{
		src: 'https://c1.staticflickr.com/2/1484/24316941210_053771c523_b.jpg',
		width: 1,
		height: 1
	},
	{
		src: 'https://scontent.flhr3-2.fna.fbcdn.net/v/t1.0-9/12523904_10208680829361111_2069827767328674789_n.jpg?_nc_cat=0&oh=a61fa7717fb0b764d3347ef8eb7e3b78&oe=5C0FC5C1',
		width: 2,
		height: 1
	},
	{
		src: 'https://scontent.flhr3-2.fna.fbcdn.net/v/t1.0-9/12523107_10208676130163634_6833255741151839623_n.jpg?_nc_cat=0&oh=220979b041aee124a70e0d8a23e2eb8b&oe=5C01A66C',
		width: 1,
		height: 1
	},
	{
		src: 'https://scontent.flhr3-2.fna.fbcdn.net/v/t1.0-9/12509302_10208676129683622_4962543752431442804_n.jpg?_nc_cat=0&oh=a174d928e080acbe9f261b1740ded311&oe=5BFF93B2',
		width: 1,
		height: 1
	},
	{
		src: 'https://scontent.flhr3-2.fna.fbcdn.net/v/t1.0-9/12540694_10208664358189342_1452130282820219062_n.jpg?_nc_cat=0&oh=dbb54b5763b630cdd4e71779d5bf4526&oe=5BC99925',
		width: 1,
		height: 1
	},
	{
		src: 'https://scontent.flhr3-2.fna.fbcdn.net/v/t1.0-9/1451334_10208664357949336_1069573408006424380_n.jpg?_nc_cat=0&oh=7f0f89382946f9670868fa37aa1ba27e&oe=5C0D1C16',
		width: 3,
		height: 2
	},
	{
		src: 'https://scontent.flhr3-2.fna.fbcdn.net/v/t1.0-9/12565509_10208664357789332_421326155324770027_n.jpg?_nc_cat=0&oh=ffef4c1ea5dc4888a6987996299c4736&oe=5C0D0145',
		width: 3,
		height: 2
	},
	{
		src: 'https://scontent.flhr3-2.fna.fbcdn.net/v/t1.0-9/12508683_10208664357189317_292485835012264224_n.jpg?_nc_cat=0&oh=af469df3a0e94d078876578e59cfb4b8&oe=5BFF9ED2',
		width: 2,
		height: 1
	},
	{
		src: 'https://scontent.flhr3-2.fna.fbcdn.net/v/t1.0-9/12565521_10208664356869309_3573262802320648799_n.jpg?_nc_cat=0&oh=2c01148f6ddca5a8b5bcc98baf82ede9&oe=5BFC7E22',
		width: 1,
		height: 1
	},
	{
		src: 'https://scontent.flhr3-2.fna.fbcdn.net/v/t1.0-9/12553048_10208655768094595_3026502914367811678_n.jpg?_nc_cat=0&oh=476747344e513ee9a74a2598a33f4035&oe=5C0EB155',
		width: 1,
		height: 1
	},
	{
		src: 'https://scontent.flhr3-2.fna.fbcdn.net/v/t1.0-9/12510228_10208655767934591_1033555540595098725_n.jpg?_nc_cat=0&oh=20dd11a719cc4120215ee2cbb889e8e7&oe=5C13AC0B',
		width: 1,
		height: 1
	},
	{
		src: 'https://scontent.flhr3-2.fna.fbcdn.net/v/t1.0-9/1916657_10208655767614583_2003482324400022956_n.jpg?_nc_cat=0&oh=96a9d95cbaedda7a13bbe9179ef30f54&oe=5C052F8F',
		width: 1,
		height: 1
	},
	{
		src: 'https://scontent.flhr3-2.fna.fbcdn.net/v/t1.0-9/12472681_10208655767294575_3352206195842951482_n.jpg?_nc_cat=0&oh=bc883538a973db19f163c643203522d5&oe=5BFA09B9',
		width: 2,
		height: 1
	},
	{
		src: 'https://scontent.flhr3-2.fna.fbcdn.net/v/t1.0-9/12549084_10208646223975998_1067056787151812243_n.jpg?_nc_cat=0&oh=06beda293102aeffff80d9bff9bd4aec&oe=5BFF4417',
		width: 2,
		height: 1
	},
	{
		src: 'https://scontent.flhr3-2.fna.fbcdn.net/v/t1.0-9/1937004_10208645970529662_7710019848312488010_n.jpg?_nc_cat=0&oh=706b9610256079641ac2047cb3b9a8fb&oe=5C033A9D',
		width: 1,
		height: 1
	},
	{
		src: 'https:////c1.staticflickr.com/2/1595/24612539305_663ed00228_n.jpg',
		width: 1,
		height: 1
	},
	{
		src: 'https://scontent.flhr3-2.fna.fbcdn.net/v/t1.0-9/12509427_10208645970369658_4750897074216186570_n.jpg?_nc_cat=0&oh=c2ee669c73c88941416b54f50d8fd17c&oe=5C092D55',
		width: 4,
		height: 2
	},
	{
		src: 'https://scontent.flhr3-2.fna.fbcdn.net/v/t1.0-9/12400679_10208640923923500_5710909107952331412_n.jpg?_nc_cat=0&oh=bb53771f9ab1fb40c35659d7a9ec9c4d&oe=5BFB8F67',
		width: 3,
		height: 2
	},
	{
		src: 'https://scontent.flhr3-2.fna.fbcdn.net/v/t1.0-9/10301073_10208640923723495_6759878288527856644_n.jpg?_nc_cat=0&oh=653d938b48fed1b3b4ede2d79bac8165&oe=5BC5CB1E',
		width: 3,
		height: 2
	},
	{
		src: 'https://scontent.flhr3-2.fna.fbcdn.net/v/t1.0-9/12510426_10208626074352270_6232506558201574352_n.jpg?_nc_cat=0&oh=10ab3b245785f81cc0b14534cc9c0f30&oe=5C0BCEFF',
		width: 1,
		height: 1
	},
	{
		src: 'https://c1.staticflickr.com/2/1533/23984486404_274cfdd3b1_n.jpg',
		width: 2,
		height: 1
	}
	,
	{
		src: 'https://c1.staticflickr.com/2/1616/24612321255_3ebcaa0c56_n.jpg',
		width: 1,
		height: 1
	}
];



export default Photos;
