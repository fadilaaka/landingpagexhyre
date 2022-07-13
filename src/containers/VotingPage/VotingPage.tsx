// // import type { NextPageWithLayout } from '@/types';
// import { useRouter } from 'next/router';
// import { NextSeo } from 'next-seo';
// // import routes from '@/config/routes';
// // import DashboardLayout from '@/layouts/dashboard/_dashboard';
// // import Button from '@/components/ui/button';

// // import Image from '@/components/ui/image';
// // import ParamTab, { TabPanel } from '@/components/ui/param-tab';
// // import { ExportIcon } from '@/components/icons/export-icon';
// // static data
// // import { getVotesByStatus } from '@/data/static/vote-data';
// import votePool from 'images/vote-pool.svg';


// import ButtonPrimary from 'shared/Button/ButtonPrimary';
// import NcImage from 'shared/NcImage/NcImage';
// import { FaSignOutAlt } from 'react-icons/fa';
// import ParamTab, { TabPanel } from 'containers/TabVoting/TabVoting';
// import VoteList from 'components/VoteList/VoteList';
// import { ReactElement, ReactNode } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import { NextPage } from 'next';

// type NextPageWithLayout<P = {}> = NextPage<P> & {
//   authorization?: boolean;
//   getLayout?: (page: ReactElement) => ReactNode;
// };

// let routes = {}

// const cripticVotes = [
//   {
//     id: '1',
//     title: 'PTIP 50 - Treasury Assets Management #1',
//     accepted: {
//       vote: 10303,
//       percentage: 90,
//     },
//     rejected: {
//       vote: 303,
//       percentage: 10,
//     },
//     executed_at: '2022-10-01T01:02:03',
//     proposed_by: {
//       id: '0x9aba...0bd8',
//       link: '#',
//     },
//     status: 'active',
//     votes: [
//       {
//         voter: { id: '0x9aba...0bd8', link: '#' },
//         voting_weight: 32125,
//         status: 'accepted',
//       },
//       {
//         voter: { id: '0x956aba...0263bd8', link: '#' },
//         voting_weight: 26081,
//         status: 'rejected',
//       },
//       {
//         voter: { id: '0x9aba...0bd8', link: '#' },
//         voting_weight: 2125,
//         status: 'accepted',
//       },
//       {
//         voter: { id: '0x956aba...0263bd8', link: '#' },
//         voting_weight: 6081,
//         status: 'accepted',
//       },
//       {
//         voter: { id: '0x9aba...0bd8', link: '#' },
//         voting_weight: 181,
//         status: 'rejected',
//       },
//       {
//         voter: { id: '0x956aba...0263bd8', link: '#' },
//         voting_weight: 32125,
//         status: 'accepted',
//       },
//       {
//         voter: { id: '0x9aba...0bd8', link: '#' },
//         voting_weight: 26081,
//         status: 'rejected',
//       },
//       {
//         voter: { id: '0x956aba...0263bd8', link: '#' },
//         voting_weight: 2125,
//         status: 'accepted',
//       },
//       {
//         voter: { id: '0x9aba...0bd8', link: '#' },
//         voting_weight: 6081,
//         status: 'accepted',
//       },
//       {
//         voter: { id: '0x956aba...0263bd8', link: '#' },
//         voting_weight: 181,
//         status: 'rejected',
//       },
//     ],
//     description: `
//       <h6>Simple Summary</h6>
//       <p>Extend POOL drip for UNI, COMP, Dai, USDC, and SUSHI Ethereum pools until the end of October. Extend prizes and drip for the POOL pool as well.</p>
//       <h6>Motivation</h6>
//       <p>The POOL drips for most Ethereum pools will be ending within the next 2 weeks (see details here). This proposal serves to maintain the statusquo of POOL incentives on Ethereum. However, it only extends the status quo for a relatively short amount of additional time. This is becausethe V4 prize pool will be launching in mid October and a larger incentive overhaul will be.</p>
//       <h6>Where Can I get Some?</h6>
//       <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
//     `,
//     action: [
//       {
//         id: uuidv4(),
//         contract: {
//           id: '0x9aba...0bd8',
//           link: '#',
//         },
//         method: 'transfer(address,uint256)',
//         inputs:
//           '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
//       },
//       {
//         id: uuidv4(),
//         contract: {
//           id: '0x9aba...0bd8',
//           link: '#',
//         },
//         method: 'transfer(address,uint256)',
//         inputs:
//           '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
//       },
//       {
//         id: uuidv4(),
//         contract: {
//           id: '0x9aba...0bd8',
//           link: '#',
//         },
//         method: 'transfer(address,uint256)',
//         inputs:
//           '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
//       },
//       {
//         id: uuidv4(),
//         contract: {
//           id: '0x9aba...0bd8',
//           link: '#',
//         },
//         method: 'transfer(address,uint256)',
//         inputs:
//           '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
//       },
//     ],
//   },
//   {
//     id: '2',
//     title: 'PTIP 51 - Retroactive Proxy Contract Airdrop — Phase One',
//     accepted: {
//       vote: 303,
//       percentage: 30,
//     },
//     rejected: {
//       vote: 787,
//       percentage: 70,
//     },
//     executed_at: '2021-02-01T01:02:03',
//     proposed_by: {
//       id: '0x9aba...0bd8',
//       link: '#',
//     },
//     status: 'past',
//     votes: [
//       {
//         voter: { id: '0x9aba...0bd8', link: '#' },
//         voting_weight: 32125,
//         status: 'accepted',
//       },
//       {
//         voter: { id: '0x956aba...0263bd8', link: '#' },
//         voting_weight: 26081,
//         status: 'rejected',
//       },
//       {
//         voter: { id: '0x9aba...0bd8', link: '#' },
//         voting_weight: 2125,
//         status: 'accepted',
//       },
//       {
//         voter: { id: '0x956aba...0263bd8', link: '#' },
//         voting_weight: 6081,
//         status: 'accepted',
//       },
//       {
//         voter: { id: '0x9aba...0bd8', link: '#' },
//         voting_weight: 181,
//         status: 'rejected',
//       },
//       {
//         voter: { id: '0x956aba...0263bd8', link: '#' },
//         voting_weight: 32125,
//         status: 'accepted',
//       },
//       {
//         voter: { id: '0x9aba...0bd8', link: '#' },
//         voting_weight: 26081,
//         status: 'rejected',
//       },
//       {
//         voter: { id: '0x956aba...0263bd8', link: '#' },
//         voting_weight: 2125,
//         status: 'accepted',
//       },
//       {
//         voter: { id: '0x9aba...0bd8', link: '#' },
//         voting_weight: 6081,
//         status: 'accepted',
//       },
//       {
//         voter: { id: '0x956aba...0263bd8', link: '#' },
//         voting_weight: 181,
//         status: 'rejected',
//       },
//     ],
//     description: `
//       <h6>Simple Summary</h6>
//       <p>Extend POOL drip for UNI, COMP, Dai, USDC, and SUSHI Ethereum pools until the end of October. Extend prizes and drip for the POOL pool as well.</p>
//       <h6>Motivation</h6>
//       <p>The POOL drips for most Ethereum pools will be ending within the next 2 weeks (see details here). This proposal serves to maintain the statusquo of POOL incentives on Ethereum. However, it only extends the status quo for a relatively short amount of additional time. This is becausethe V4 prize pool will be launching in mid October and a larger incentive overhaul will be.</p>
//       <h6>Where Can I get Some?</h6>
//       <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
//     `,
//     action: [
//       {
//         id: uuidv4(),
//         contract: {
//           id: '0x9aba...0bd8',
//           link: '#',
//         },
//         method: 'transfer(address,uint256)',
//         inputs:
//           '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
//       },
//       {
//         id: uuidv4(),
//         contract: {
//           id: '0x9aba...0bd8',
//           link: '#',
//         },
//         method: 'transfer(address,uint256)',
//         inputs:
//           '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
//       },
//       {
//         id: uuidv4(),
//         contract: {
//           id: '0x9aba...0bd8',
//           link: '#',
//         },
//         method: 'transfer(address,uint256)',
//         inputs:
//           '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
//       },
//       {
//         id: uuidv4(),
//         contract: {
//           id: '0x9aba...0bd8',
//           link: '#',
//         },
//         method: 'transfer(address,uint256)',
//         inputs:
//           '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
//       },
//     ],
//   },
//   {
//     id: '3',
//     title: 'PTIP 52 - Reduce the UNI proposal submission threshold to 2.5M',
//     accepted: {
//       vote: 7303,
//       percentage: 87,
//     },
//     rejected: {
//       vote: 813,
//       percentage: 23,
//     },
//     status: 'past',
//     executed_at: '2021-07-01T01:02:03',
//     proposed_by: {
//       id: '0x9aba...0bd8',
//       link: '#',
//     },
//     votes: [
//       {
//         voter: { id: '0x9aba...0bd8', link: '#' },
//         voting_weight: 32125,
//         status: 'accepted',
//       },
//       {
//         voter: { id: '0x956aba...0263bd8', link: '#' },
//         voting_weight: 26081,
//         status: 'rejected',
//       },
//       {
//         voter: { id: '0x9aba...0bd8', link: '#' },
//         voting_weight: 2125,
//         status: 'accepted',
//       },
//       {
//         voter: { id: '0x956aba...0263bd8', link: '#' },
//         voting_weight: 6081,
//         status: 'accepted',
//       },
//       {
//         voter: { id: '0x9aba...0bd8', link: '#' },
//         voting_weight: 181,
//         status: 'rejected',
//       },
//       {
//         voter: { id: '0x956aba...0263bd8', link: '#' },
//         voting_weight: 32125,
//         status: 'accepted',
//       },
//       {
//         voter: { id: '0x9aba...0bd8', link: '#' },
//         voting_weight: 26081,
//         status: 'rejected',
//       },
//       {
//         voter: { id: '0x956aba...0263bd8', link: '#' },
//         voting_weight: 2125,
//         status: 'accepted',
//       },
//       {
//         voter: { id: '0x9aba...0bd8', link: '#' },
//         voting_weight: 6081,
//         status: 'accepted',
//       },
//       {
//         voter: { id: '0x956aba...0263bd8', link: '#' },
//         voting_weight: 181,
//         status: 'rejected',
//       },
//     ],
//     description: `
//       <h6>Simple Summary</h6>
//       <p>Extend POOL drip for UNI, COMP, Dai, USDC, and SUSHI Ethereum pools until the end of October. Extend prizes and drip for the POOL pool as well.</p>
//       <h6>Motivation</h6>
//       <p>The POOL drips for most Ethereum pools will be ending within the next 2 weeks (see details here). This proposal serves to maintain the statusquo of POOL incentives on Ethereum. However, it only extends the status quo for a relatively short amount of additional time. This is becausethe V4 prize pool will be launching in mid October and a larger incentive overhaul will be.</p>
//       <h6>Where Can I get Some?</h6>
//       <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
//     `,
//     action: [
//       {
//         id: uuidv4(),
//         contract: {
//           id: '0x9aba...0bd8',
//           link: '#',
//         },
//         method: 'transfer(address,uint256)',
//         inputs:
//           '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
//       },
//       {
//         id: uuidv4(),
//         contract: {
//           id: '0x9aba...0bd8',
//           link: '#',
//         },
//         method: 'transfer(address,uint256)',
//         inputs:
//           '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
//       },
//       {
//         id: uuidv4(),
//         contract: {
//           id: '0x9aba...0bd8',
//           link: '#',
//         },
//         method: 'transfer(address,uint256)',
//         inputs:
//           '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
//       },
//       {
//         id: uuidv4(),
//         contract: {
//           id: '0x9aba...0bd8',
//           link: '#',
//         },
//         method: 'transfer(address,uint256)',
//         inputs:
//           '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
//       },
//     ],
//   },
//   {
//     id: '4',
//     title: 'PTIP 53 - Community-Enabled Analytics',
//     accepted: {
//       vote: 9303,
//       percentage: 90,
//     },
//     rejected: {
//       vote: 989,
//       percentage: 10,
//     },
//     status: 'past',
//     executed_at: '2021-03-01T01:02:03',
//     proposed_by: {
//       id: '0x9aba...0bd8',
//       link: '#',
//     },
//     votes: [
//       {
//         voter: { id: '0x9aba...0bd8', link: '#' },
//         voting_weight: 32125,
//         status: 'accepted',
//       },
//       {
//         voter: { id: '0x956aba...0263bd8', link: '#' },
//         voting_weight: 26081,
//         status: 'rejected',
//       },
//       {
//         voter: { id: '0x9aba...0bd8', link: '#' },
//         voting_weight: 2125,
//         status: 'accepted',
//       },
//       {
//         voter: { id: '0x956aba...0263bd8', link: '#' },
//         voting_weight: 6081,
//         status: 'accepted',
//       },
//       {
//         voter: { id: '0x9aba...0bd8', link: '#' },
//         voting_weight: 181,
//         status: 'rejected',
//       },
//       {
//         voter: { id: '0x956aba...0263bd8', link: '#' },
//         voting_weight: 32125,
//         status: 'accepted',
//       },
//       {
//         voter: { id: '0x9aba...0bd8', link: '#' },
//         voting_weight: 26081,
//         status: 'rejected',
//       },
//       {
//         voter: { id: '0x956aba...0263bd8', link: '#' },
//         voting_weight: 2125,
//         status: 'accepted',
//       },
//       {
//         voter: { id: '0x9aba...0bd8', link: '#' },
//         voting_weight: 6081,
//         status: 'accepted',
//       },
//       {
//         voter: { id: '0x956aba...0263bd8', link: '#' },
//         voting_weight: 181,
//         status: 'rejected',
//       },
//     ],
//     description: `
//       <h6>Simple Summary</h6>
//       <p>Extend POOL drip for UNI, COMP, Dai, USDC, and SUSHI Ethereum pools until the end of October. Extend prizes and drip for the POOL pool as well.</p>
//       <h6>Motivation</h6>
//       <p>The POOL drips for most Ethereum pools will be ending within the next 2 weeks (see details here). This proposal serves to maintain the statusquo of POOL incentives on Ethereum. However, it only extends the status quo for a relatively short amount of additional time. This is becausethe V4 prize pool will be launching in mid October and a larger incentive overhaul will be.</p>
//       <h6>Where Can I get Some?</h6>
//       <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
//     `,
//     action: [
//       {
//         id: uuidv4(),
//         contract: {
//           id: '0x9aba...0bd8',
//           link: '#',
//         },
//         method: 'transfer(address,uint256)',
//         inputs:
//           '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
//       },
//       {
//         id: uuidv4(),
//         contract: {
//           id: '0x9aba...0bd8',
//           link: '#',
//         },
//         method: 'transfer(address,uint256)',
//         inputs:
//           '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
//       },
//       {
//         id: uuidv4(),
//         contract: {
//           id: '0x9aba...0bd8',
//           link: '#',
//         },
//         method: 'transfer(address,uint256)',
//         inputs:
//           '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
//       },
//       {
//         id: uuidv4(),
//         contract: {
//           id: '0x9aba...0bd8',
//           link: '#',
//         },
//         method: 'transfer(address,uint256)',
//         inputs:
//           '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
//       },
//     ],
//   },
//   {
//     id: '5',
//     title: 'PTIP 61 - Stake XRP Earn Cake Syrup Pool',
//     accepted: {
//       vote: 10303,
//       percentage: 90,
//     },
//     rejected: {
//       vote: 303,
//       percentage: 10,
//     },
//     executed_at: '2022-11-01T01:01:11',
//     proposed_by: {
//       id: '0x9aba...0bd8',
//       link: '#',
//     },
//     status: 'active',
//     votes: [
//       {
//         voter: { id: '0x9aba...0bd8', link: '#' },
//         voting_weight: 32125,
//         status: 'accepted',
//       },
//       {
//         voter: { id: '0x956aba...0263bd8', link: '#' },
//         voting_weight: 26081,
//         status: 'rejected',
//       },
//       {
//         voter: { id: '0x9aba...0bd8', link: '#' },
//         voting_weight: 2125,
//         status: 'accepted',
//       },
//       {
//         voter: { id: '0x956aba...0263bd8', link: '#' },
//         voting_weight: 6081,
//         status: 'accepted',
//       },
//       {
//         voter: { id: '0x9aba...0bd8', link: '#' },
//         voting_weight: 181,
//         status: 'rejected',
//       },
//       {
//         voter: { id: '0x956aba...0263bd8', link: '#' },
//         voting_weight: 32125,
//         status: 'accepted',
//       },
//       {
//         voter: { id: '0x9aba...0bd8', link: '#' },
//         voting_weight: 26081,
//         status: 'rejected',
//       },
//       {
//         voter: { id: '0x956aba...0263bd8', link: '#' },
//         voting_weight: 2125,
//         status: 'accepted',
//       },
//       {
//         voter: { id: '0x9aba...0bd8', link: '#' },
//         voting_weight: 6081,
//         status: 'accepted',
//       },
//       {
//         voter: { id: '0x956aba...0263bd8', link: '#' },
//         voting_weight: 181,
//         status: 'rejected',
//       },
//     ],
//     description: `
//       <h6>Simple Summary</h6>
//       <p>Extend POOL drip for UNI, COMP, Dai, USDC, and SUSHI Ethereum pools until the end of October. Extend prizes and drip for the POOL pool as well.</p>
//       <h6>Motivation</h6>
//       <p>The POOL drips for most Ethereum pools will be ending within the next 2 weeks (see details here). This proposal serves to maintain the statusquo of POOL incentives on Ethereum. However, it only extends the status quo for a relatively short amount of additional time. This is becausethe V4 prize pool will be launching in mid October and a larger incentive overhaul will be.</p>
//       <h6>Where Can I get Some?</h6>
//       <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
//     `,
//     action: [
//       {
//         id: uuidv4(),
//         contract: {
//           id: '0x9aba...0bd8',
//           link: '#',
//         },
//         method: 'transfer(address,uint256)',
//         inputs:
//           '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
//       },
//       {
//         id: uuidv4(),
//         contract: {
//           id: '0x9aba...0bd8',
//           link: '#',
//         },
//         method: 'transfer(address,uint256)',
//         inputs:
//           '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
//       },
//       {
//         id: uuidv4(),
//         contract: {
//           id: '0x9aba...0bd8',
//           link: '#',
//         },
//         method: 'transfer(address,uint256)',
//         inputs:
//           '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
//       },
//       {
//         id: uuidv4(),
//         contract: {
//           id: '0x9aba...0bd8',
//           link: '#',
//         },
//         method: 'transfer(address,uint256)',
//         inputs:
//           '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
//       },
//     ],
//   },
//   {
//     id: '6',
//     title: 'PTIP 63 - Claim Rewards from Locked Staking',
//     accepted: {
//       vote: 1003,
//       percentage: 90,
//     },
//     rejected: {
//       vote: 303,
//       percentage: 10,
//     },
//     executed_at: '2022-11-05T01:06:15',
//     proposed_by: {
//       id: '0x9aba...0bd8',
//       link: '#',
//     },
//     status: 'active',
//     votes: [
//       {
//         voter: { id: '0x9aba...0bd8', link: '#' },
//         voting_weight: 32125,
//         status: 'accepted',
//       },
//       {
//         voter: { id: '0x956aba...0263bd8', link: '#' },
//         voting_weight: 26081,
//         status: 'rejected',
//       },
//       {
//         voter: { id: '0x9aba...0bd8', link: '#' },
//         voting_weight: 2125,
//         status: 'accepted',
//       },
//       {
//         voter: { id: '0x956aba...0263bd8', link: '#' },
//         voting_weight: 6081,
//         status: 'accepted',
//       },
//       {
//         voter: { id: '0x9aba...0bd8', link: '#' },
//         voting_weight: 181,
//         status: 'rejected',
//       },
//       {
//         voter: { id: '0x956aba...0263bd8', link: '#' },
//         voting_weight: 32125,
//         status: 'accepted',
//       },
//       {
//         voter: { id: '0x9aba...0bd8', link: '#' },
//         voting_weight: 26081,
//         status: 'rejected',
//       },
//       {
//         voter: { id: '0x956aba...0263bd8', link: '#' },
//         voting_weight: 2125,
//         status: 'accepted',
//       },
//       {
//         voter: { id: '0x9aba...0bd8', link: '#' },
//         voting_weight: 6081,
//         status: 'accepted',
//       },
//       {
//         voter: { id: '0x956aba...0263bd8', link: '#' },
//         voting_weight: 181,
//         status: 'rejected',
//       },
//     ],
//     description: `
//       <h6>Simple Summary</h6>
//       <p>Extend POOL drip for UNI, COMP, Dai, USDC, and SUSHI Ethereum pools until the end of October. Extend prizes and drip for the POOL pool as well.</p>
//       <h6>Motivation</h6>
//       <p>The POOL drips for most Ethereum pools will be ending within the next 2 weeks (see details here). This proposal serves to maintain the statusquo of POOL incentives on Ethereum. However, it only extends the status quo for a relatively short amount of additional time. This is becausethe V4 prize pool will be launching in mid October and a larger incentive overhaul will be.</p>
//       <h6>Where Can I get Some?</h6>
//       <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
//     `,
//     action: [
//       {
//         id: uuidv4(),
//         contract: {
//           id: '0x9aba...0bd8',
//           link: '#',
//         },
//         method: 'transfer(address,uint256)',
//         inputs:
//           '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
//       },
//       {
//         id: uuidv4(),
//         contract: {
//           id: '0x9aba...0bd8',
//           link: '#',
//         },
//         method: 'transfer(address,uint256)',
//         inputs:
//           '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
//       },
//       {
//         id: uuidv4(),
//         contract: {
//           id: '0x9aba...0bd8',
//           link: '#',
//         },
//         method: 'transfer(address,uint256)',
//         inputs:
//           '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
//       },
//       {
//         id: uuidv4(),
//         contract: {
//           id: '0x9aba...0bd8',
//           link: '#',
//         },
//         method: 'transfer(address,uint256)',
//         inputs:
//           '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
//       },
//     ],
//   },
//   {
//     id: '7',
//     title: 'PTIP 64 - Loan and/or fixed term with the Cake',
//     accepted: {
//       vote: 11003,
//       percentage: 90,
//     },
//     rejected: {
//       vote: 303,
//       percentage: 10,
//     },
//     executed_at: '2022-12-08T01:04:04',
//     proposed_by: {
//       id: '0x9aba...0bd8',
//       link: '#',
//     },
//     status: 'active',
//     votes: [
//       {
//         voter: { id: '0x9aba...0bd8', link: '#' },
//         voting_weight: 32125,
//         status: 'accepted',
//       },
//       {
//         voter: { id: '0x956aba...0263bd8', link: '#' },
//         voting_weight: 26081,
//         status: 'rejected',
//       },
//       {
//         voter: { id: '0x9aba...0bd8', link: '#' },
//         voting_weight: 2125,
//         status: 'accepted',
//       },
//       {
//         voter: { id: '0x956aba...0263bd8', link: '#' },
//         voting_weight: 6081,
//         status: 'accepted',
//       },
//       {
//         voter: { id: '0x9aba...0bd8', link: '#' },
//         voting_weight: 181,
//         status: 'rejected',
//       },
//       {
//         voter: { id: '0x956aba...0263bd8', link: '#' },
//         voting_weight: 32125,
//         status: 'accepted',
//       },
//       {
//         voter: { id: '0x9aba...0bd8', link: '#' },
//         voting_weight: 26081,
//         status: 'rejected',
//       },
//       {
//         voter: { id: '0x956aba...0263bd8', link: '#' },
//         voting_weight: 2125,
//         status: 'accepted',
//       },
//       {
//         voter: { id: '0x9aba...0bd8', link: '#' },
//         voting_weight: 6081,
//         status: 'accepted',
//       },
//       {
//         voter: { id: '0x956aba...0263bd8', link: '#' },
//         voting_weight: 181,
//         status: 'rejected',
//       },
//     ],
//     description: `
//       <h6>Simple Summary</h6>
//       <p>Extend POOL drip for UNI, COMP, Dai, USDC, and SUSHI Ethereum pools until the end of October. Extend prizes and drip for the POOL pool as well.</p>
//       <h6>Motivation</h6>
//       <p>The POOL drips for most Ethereum pools will be ending within the next 2 weeks (see details here). This proposal serves to maintain the statusquo of POOL incentives on Ethereum. However, it only extends the status quo for a relatively short amount of additional time. This is becausethe V4 prize pool will be launching in mid October and a larger incentive overhaul will be.</p>
//       <h6>Where Can I get Some?</h6>
//       <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
//     `,
//     action: [
//       {
//         id: uuidv4(),
//         contract: {
//           id: '0x9aba...0bd8',
//           link: '#',
//         },
//         method: 'transfer(address,uint256)',
//         inputs:
//           '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
//       },
//       {
//         id: uuidv4(),
//         contract: {
//           id: '0x9aba...0bd8',
//           link: '#',
//         },
//         method: 'transfer(address,uint256)',
//         inputs:
//           '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
//       },
//       {
//         id: uuidv4(),
//         contract: {
//           id: '0x9aba...0bd8',
//           link: '#',
//         },
//         method: 'transfer(address,uint256)',
//         inputs:
//           '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
//       },
//       {
//         id: uuidv4(),
//         contract: {
//           id: '0x9aba...0bd8',
//           link: '#',
//         },
//         method: 'transfer(address,uint256)',
//         inputs:
//           '0x000000000000000000000000bd537257fad96e977b9e545be583bbf7028f30b900000000000000000000000000000000000000000000065a4da25d3016c00000',
//       },
//     ],
//   },
// ];

// function getVotesByStatus(status: string) {
//   const votesByStatus = cripticVotes.filter((vote) => vote.status === status);
//   return {
//     votes: votesByStatus,
//     totalVote: votesByStatus.length,
//   };
// }

// const VotingPage: NextPageWithLayout = () => {
//   const router = useRouter();
//   const { totalVote: totalActiveVote } = getVotesByStatus('active');
//   const { totalVote: totalOffChainVote } = getVotesByStatus('off-chain');
//   const { totalVote: totalExecutableVote } = getVotesByStatus('executable');
//   const { totalVote: totalPastVote } = getVotesByStatus('past');
//   function goToCreateProposalPage() {
//     setTimeout(() => {
//       router.push(routes.createProposal);
//     }, 800);
//   }
//   return (
//     <>
//       <NextSeo
//         title="Proposal"
//         description="Criptic - React Next Web3 NFT Crypto Dashboard Template"
//       />
//       <section className="mx-auto w-full max-w-[1160px] text-sm sm:pt-10 4xl:pt-14">
//         <header className="mb-8 flex flex-col gap-4 rounded-lg bg-white p-5 py-6 shadow-card dark:bg-light-dark xs:p-6 sm:flex-row sm:items-center sm:justify-between">
//           <div className="flex items-start gap-4 xs:items-center xs:gap-3 xl:gap-4">
//             <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-dark">
//               <NcImage alt="Vote Pool" src={votePool} width={32} height={32} />
//             </div>
//             <div>
//               <h2 className="mb-2 text-base font-medium uppercase dark:text-gray-100 xl:text-lg">
//                 You have 100 votes
//               </h2>
//               <p className="leading-relaxed text-gray-600 dark:text-gray-400">
//                 You need CRIPTIC or CRIPTIC tokens to participate in governance.
//               </p>
//             </div>
//           </div>
//           <div className="shrink-0">
//             <ButtonPrimary
//               shape="rounded"
//               fullWidth={true}
//               className="uppercase"
//               onClick={() => goToCreateProposalPage()}
//             >
//               Create Proposal
//             </ButtonPrimary>
//           </div>
//         </header>
//         <ParamTab
//           tabMenu={[
//             {
//               title: (
//                 <>
//                   Active{' '}
//                   {totalActiveVote > 0 && (
//                     <span className="ltr:ml-0.5 rtl:mr-0.5 ltr:md:ml-1.5 rtl:md:mr-1.5 ltr:lg:ml-2 rtl:lg:mr-2">
//                       {totalActiveVote}
//                     </span>
//                   )}
//                 </>
//               ),
//               path: 'active',
//             },
//             {
//               title: (
//                 <>
//                   Off-Chain{' '}
//                   {totalOffChainVote > 0 && (
//                     <span className="ltr:ml-0.5 rtl:mr-0.5 ltr:md:ml-1.5 rtl:md:mr-1.5 ltr:lg:ml-2 rtl:lg:mr-2">
//                       {totalOffChainVote}
//                     </span>
//                   )}
//                 </>
//               ),
//               path: 'off-chain',
//             },
//             {
//               title: (
//                 <>
//                   Executable{' '}
//                   {totalExecutableVote > 0 && (
//                     <span className="ltr:ml-0.5 rtl:mr-0.5 ltr:md:ml-1.5 rtl:md:mr-1.5 ltr:lg:ml-2 rtl:lg:mr-2">
//                       {totalExecutableVote}
//                     </span>
//                   )}
//                 </>
//               ),
//               path: 'executable',
//             },
//             {
//               title: (
//                 <>
//                   Past{' '}
//                   {totalPastVote > 0 && (
//                     <span className="ltr:ml-0.5 rtl:mr-0.5 ltr:md:ml-1.5 rtl:md:mr-1.5 ltr:lg:ml-2 rtl:lg:mr-2">
//                       {totalPastVote}
//                     </span>
//                   )}
//                 </>
//               ),
//               path: 'past',
//             },
//           ]}
//         >
//           <TabPanel className="focus:outline-none">
//             <VoteList voteStatus={'active'} />
//           </TabPanel>
//           <TabPanel className="focus:outline-none">
//             <>
//               <div className="mb-6 rounded-lg border-2 border-gray-900 bg-white p-5 dark:border-gray-700 dark:bg-light-dark xs:py-6 lg:px-8 lg:py-6">
//                 <div className="mb-3 flex flex-col gap-3 xs:mb-4 sm:gap-4 md:flex-row md:items-center md:justify-between">
//                   <h3 className="flex items-center gap-4 text-base font-semibold dark:text-gray-100">
//                     <span className="inline-block rounded-3xl bg-gray-900 px-2.5 py-0.5 text-sm font-medium text-white">
//                       Tip
//                     </span>{' '}
//                     Vote gas-free + earn rewards
//                   </h3>
//                   <div className="flex items-center gap-4 text-gray-900 dark:text-gray-100">
//                     <a
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       href="https://snapshot.org/#/"
//                       className="inline-flex items-center gap-2 text-gray-900 transition-opacity duration-200 hover:underline hover:opacity-90 dark:text-gray-100"
//                     >
//                       Go to Snapshot <FaSignOutAlt className="h-auto w-3" />
//                     </a>
//                     <a
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       href="#"
//                       className="inline-flex items-center gap-2 text-gray-900 transition-opacity duration-200 hover:underline hover:opacity-90 dark:text-gray-100"
//                     >
//                       Learn more <FaSignOutAlt className="h-auto w-3" />
//                     </a>
//                   </div>
//                 </div>
//                 <p className="leading-loose text-gray-600 dark:text-gray-400">
//                   In order to vote on SnapShot, you need to have ptPOOL tokens.
//                   You can obtain them by depositing your token icon POOL into
//                   the POOL Pool . By doing so, you will be eligible to vote
//                   gas-free and have a chance to win a weekly prize.
//                 </p>
//               </div>
//               <VoteList voteStatus={'off-chain'} />
//             </>
//           </TabPanel>
//           <TabPanel className="focus:outline-none">
//             <VoteList voteStatus={'executable'} />
//           </TabPanel>
//           <TabPanel className="focus:outline-none">
//             <VoteList voteStatus={'past'} />
//           </TabPanel>
//         </ParamTab>
//       </section>
//     </>
//   );
// };

// // VotingPage.getLayout = function getLayout(page) {
// //   return <DashboardLayout>{page}</DashboardLayout>;
// // };

export default {};
