import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: 'black',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './manchester_united.png',
  fullDecal: './manchester_united.png',
});

export default state;