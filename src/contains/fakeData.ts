import avatar1 from "images/avatars/Image-1.png";
import avatar2 from "images/avatars/Image-2.png";
import avatar3 from "images/avatars/Image-3.png";
import avatar4 from "images/avatars/Image-4.png";
import avatar5 from "images/avatars/Image-5.png";
import avatar6 from "images/avatars/Image-6.png";
import avatar7 from "images/avatars/Image-7.png";
import avatar8 from "images/avatars/Image-8.png";
import avatar9 from "images/avatars/Image-9.png";
import avatar10 from "images/avatars/Image-10.png";
//
import nfts1 from "images/nfts/alif/1.webp";
import nfts2 from "images/nfts/alif/2.webp";
import nfts3 from "images/nfts/alif/3.webp";
import nfts4 from "images/nfts/alif/4.webp";
import nfts5 from "images/nfts/alif/5.webp";
import nfts6 from "images/nfts/alif/6.webp";
import nfts7 from "images/nfts/alif/7.webp";
import nfts8 from "images/nfts/alif/8.webp";
import nfts9 from "images/nfts/alif/9.webp";
import nfts10 from "images/nfts/alif/10.webp";
import nfts11 from "images/nfts/newton/11.webp";
import nfts12 from "images/nfts/newton/12.webp";
import nfts13 from "images/nfts/newton/13.webp";
import nfts14 from "images/nfts/newton/14.webp";
import nfts15 from "images/nfts/newton/15.webp";
import nfts16 from "images/nfts/newton/16.webp";
import nfts17 from "images/nfts/newton/13.webp";
import nfts18 from "images/nfts/newton/14.webp";
import nfts19 from "images/nfts/newton/15.webp";
import nfts20 from "images/nfts/newton/16.webp";
import nftsLarge1 from "images/nfts/large1.png";
import nftsLarge2 from "images/nfts/large2.png";
import nftsLarge3 from "images/nfts/large3.png";
//
import nftcollect1 from "images/nfts/collectibles/1.webp"
import nftcollect2 from "images/nfts/collectibles/3.webp"
import nftcollect3 from "images/nfts/collectibles/2.webp"
import nftcollect4 from "images/nfts/collectibles/4.webp"
import nftcollect5 from "images/nfts/collectibles/5.webp"
//
import nftsCat1 from "images/nfts/cat1.png";
import nftsCat2 from "images/nfts/cat2.png";
import nftsCat3 from "images/nfts/cat3.png";
import nftsCat4 from "images/nfts/cat4.png";
import nftsCat5 from "images/nfts/cat5.png";
import nftsCat6 from "images/nfts/cat6.png";
import getRandomInt from "utils/getRandomInt";

export const nftsCatImgs = [
  nftsCat1,
  nftsCat3,
  nftsCat4,
  nftsCat6,
  nftsCat2,
  nftsCat5,
];
export const nftsLargeImgs = [nftsLarge1, nftsLarge2, nftsLarge3];
export const nftsImgs:any = {
  alif: [
    [nfts1, "Alif - Type 72 - X", getRandomInt(99, 999), getRandomInt(17, 99)],
    [nfts2, "Alif - Type 38 - X", getRandomInt(99, 999), getRandomInt(17, 99)],
    [nfts3, "Alif - Type 34 - B", getRandomInt(99, 999), getRandomInt(17, 99)],
    [nfts4, "Alif - Type 36 - A", getRandomInt(99, 999), getRandomInt(17, 99)],
    [nfts5, "Alif - Type 34 - C", getRandomInt(99, 999), getRandomInt(17, 99)],
    [nfts6, "Alif - Type 34 - X", getRandomInt(99, 999), getRandomInt(17, 99)],
    [nfts7, "Alif - Type 72 - X", getRandomInt(99, 999), getRandomInt(17, 99)],
    [nfts8, "Alif - Type 30 - X", getRandomInt(99, 999), getRandomInt(17, 99)],
    [nfts9, "Alif - Type 38 - B", getRandomInt(99, 999), getRandomInt(17, 99)],
    [nfts10, "Alif - Type 45 - A", getRandomInt(99, 999), getRandomInt(17, 99)],
  ],
  newton: [
    [nfts11, "Newton - Cyprus - 2 BR-B - X", getRandomInt(99, 999), getRandomInt(17, 99)],
    [nfts12, "Newton - Cyprus - 2 BR-A - X", getRandomInt(99, 999), getRandomInt(17, 99)],
    [nfts13, "Newton - Cyprus - 1 BR -- X", getRandomInt(99, 999), getRandomInt(17, 99)],
    [nfts14, "Newton - Bahama - 4 BR - C", getRandomInt(99, 999), getRandomInt(17, 99)],
    [nfts15, "Newton - Bahama - 6 BR - A", getRandomInt(99, 999), getRandomInt(17, 99)],
    [nfts16, "Newton - Champa - Superior Corner - C", getRandomInt(99, 999), getRandomInt(17, 99)],
    [nfts17, "Newton - Champa - Superior Bridge 2 - X", getRandomInt(99, 999), getRandomInt(17, 99)],
    [nfts18, "Newton - Champa - Superior - A", getRandomInt(99, 999), getRandomInt(17, 99)],
    [nfts19, "Newton - Cyprus - ST-C - A", getRandomInt(99, 999), getRandomInt(17, 99)],
    [nfts20, "Newton - Champa - Deluxe - X", getRandomInt(99, 999), getRandomInt(17, 99)],
  ],
};

export const nftsImgs2 = [nfts1, nfts2, nfts3, nfts4, nfts5];
export const nftscollectibles = [nftcollect1, nftcollect2, nftcollect3, nftcollect4, nftcollect5];

export const nftsAbstracts = [
  "https://images.pexels.com/photos/3631430/pexels-photo-3631430.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/5022849/pexels-photo-5022849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/2179483/pexels-photo-2179483.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/380337/pexels-photo-380337.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1556139966-56c3df1ddc63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1581985673473-0784a7a44e39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1557264305-7e2764da873b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1560015534-cee980ba7e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  "https://images.unsplash.com/photo-1573096108468-702f6014ef28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1483792879322-696964487a67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1545898679-1d7a7701e2fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
  "https://images.unsplash.com/photo-1617791160588-241658c0f566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1629946832022-c327f74956e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1627037558426-c2d07beda3af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.pexels.com/photos/4800161/pexels-photo-4800161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/4765691/pexels-photo-4765691.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/2441454/pexels-photo-2441454.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1620121684840-edffcfc4b878?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1643916861364-02e63ce3e52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXwxMjI1NTc4Nnx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1532965119518-c0450e1bb4da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8MTIyNTU3ODZ8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1597423244036-ef5020e83f3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1620503374956-c942862f0372?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1621193793262-4127d9855c91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1626282874430-c11ae32d2898?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1625527575307-616f0bb84ad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
];

export const avatarImgs = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  avatar9,
  avatar10,
];

export const personNames = [
  "Kailey Greer",
  "Karli Costa",
  "Camren Banes",
  "Belinda Rer",
  "Jameson Dick",
  "Giada Mann",
  "Evie Osborn",
  "Juliet Macp",
  "Charlize Ray",
  "Amaris Pitt",
  "Arnav Moris",
  "Malakai Cey",
  "Nevaeh Henry",
  "Mireya Roman",
  "Anthony Wyat",
  "Mike Orr",
  "Azul Hull",
  "Derick Hub",
];

export const tagNames = [
  "Life",
  "Travel",
  "Music",
  "Beauty",
  "Beach",
  "Hotdog",
  "Car",
  "Bike",
  "Wordpress",
  "Php",
  "Javascript",
  "Vue",
  "Reactjs",
  "Androind",
];

export const featuredImgs = [
  "https://images.pexels.com/photos/1337753/pexels-photo-1337753.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/374876/pexels-photo-374876.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/1020016/pexels-photo-1020016.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/1154638/pexels-photo-1154638.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/2827374/pexels-photo-2827374.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/1391487/pexels-photo-1391487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/704971/pexels-photo-704971.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/848618/pexels-photo-848618.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
];

export const imgHigtQualitys = [
  "https://images.pexels.com/photos/6168061/pexels-photo-6168061.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/5913391/pexels-photo-5913391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/5913170/pexels-photo-5913170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/4617820/pexels-photo-4617820.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/6136086/pexels-photo-6136086.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/4443477/pexels-photo-4443477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/4273989/pexels-photo-4273989.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/4806731/pexels-photo-4806731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/5499131/pexels-photo-5499131.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];

const aTitles = [
  "Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate",
  "in arcu cursus euismod quis viverra nibh cras pulvinar mattis",
  "natoque penatibus et magnis dis parturient montes nascetur ridiculus mus",
  "et leo duis ut diam quam nulla porttitor massa id",
  "turpis cursus in hac habitasse platea dictumst quisque sagittis purus",
  "ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt",
  "interdum velit euismod in pellentesque massa placerat duis ultricies lacus",
  "fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque",
  "sagittis vitae et leo duis ut diam quam nulla porttitor",
  "in mollis nunc sed id semper risus in hendrerit gravida",
  "tellus integer feugiat scelerisque varius morbi enim nunc faucibus a",
  "eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci",
  "non sodales neque sodales ut etiam sit amet nisl purus",
];

// export const nftName = [
//   'Alif - Type 72 - X',
//   'Alif - Type 38 - X',
//   'Alif - Type 34 - B',
//   'Alif - Type 36 - A',
//   'Alif - Type 34 - C',
//   'Alif - Type 34 - X',
//   'Newton - Cyprus - 2 BR-B - X',
//   'Newton - Cyprus - 2 BR-A - X',
//   'Newton - Cyprus - 1 BR -- X',
//   'Newton - Bahama - 4 BR - C',
//   'Newton - Bahama - 6 BR - A',
//   'Newton - Champa - Superior Corner - C',
//   'Newton - Champa - Superior Bridge 2 - X',
//   'Newton - Champa - Superior - A',
//   'Newton - Cyprus - ST-C - A',
//   'Newton - Champa - Deluxe - X',
// ]
export const nftName = [];

function _getTitleRd() {
  return aTitles[Math.floor(Math.random() * aTitles.length)];
}
function _getPersonNameRd() {
  return personNames[Math.floor(Math.random() * personNames.length)];
}

function _getImgRd() {
  return featuredImgs[Math.floor(Math.random() * featuredImgs.length)];
}

function _getImgHightQualityRd() {
  return imgHigtQualitys[Math.floor(Math.random() * imgHigtQualitys.length)];
}

function _getTagNameRd() {
  return tagNames[Math.floor(Math.random() * tagNames.length)];
}
function _getAvatarRd() {
  return avatarImgs[Math.floor(Math.random() * avatarImgs.length)];
}

export {
  _getImgRd,
  _getTagNameRd,
  _getAvatarRd,
  _getImgHightQualityRd,
  _getTitleRd,
  _getPersonNameRd,
};
