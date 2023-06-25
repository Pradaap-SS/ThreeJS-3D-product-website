import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './manchester_united.png',
  fullDecal: './manchester_united.png',
});

export default state;