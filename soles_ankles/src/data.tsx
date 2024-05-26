/**
 * In a real app, this data would likely live in a database,
 * and be fetched from an API, either at runtime or at
 * compile-time.
 *
 * Keep in mind, this workshop is focused on CSS. In order
 * to make it easy to focus on the styling, we're cutting
 * some corners when it comes to our data management, and
 * our JavaScript in general. Please don't try to glean
 * any best-practices from stuff like this data file!
 */

export interface Shoe {
  slug: string;
  name: string;
  imageSrc: string;
  price: number;
  salePrice: number | null;
  releaseDate: number; // or Date if you are using Date objects
  numOfColors: number;
  variantType:'standard'|'sale'|'new'
}

export const SHOES: Shoe[] = [
  {
    slug: 'tech-challenge',
    name: 'NikeCourt Tech Challenge 20',
    imageSrc: '/assets/tech-challenge.jpg',
    price: 165,
    salePrice: null,
    // 1 hour ago! 🔥
    releaseDate: Date.now() - 1000 * 60 * 60 * 1,
    numOfColors: 2,
    variantType:'new',
  },
  {
    slug: 'metcon-5',
    name: 'Nike Metcon 5 AMP',
    imageSrc: '/assets/metcon-5.jpg',
    price: 165,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 2,
    numOfColors: 1,
    variantType:'standard',
  },
  {
    slug: 'phantom',
    name: 'Nike Phantom Vision',
    imageSrc: '/assets/phantom.jpg',
    price: 165,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 4,
    numOfColors: 4,
    variantType:'standard',
  },
  {
    slug: 'pegasus',
    name: 'Nike Air Zoom Pegasus',
    imageSrc: '/assets/pegasus.jpg',
    price: 165,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 16,
    numOfColors: 1,
    variantType:'standard',
  },
  {
    slug: 'joyride',
    name: 'Nike Joyride Dual Run',
    imageSrc: '/assets/joyride.jpg',
    price: 170,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 40,
    numOfColors: 2,
    variantType:'standard',
  },
  {
    slug: 'legend-academy',
    name: 'Nike Tiempo Legend 8',
    imageSrc: '/assets/legend-academy.jpg',
    price: 165,
    salePrice: 125,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 50,
    numOfColors: 8,
    variantType:'sale',
  },
  {
    slug: 'react-infinity',
    name: 'Nike React Infinity Pro',
    imageSrc: '/assets/react-infinity.jpg',
    price: 160,
    salePrice: 145,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 75,
    numOfColors: 1,
    variantType:'sale',
  },
  {
    slug: 'phantom-flyknit',
    name: 'Nike React Phantom Run Flyknit 2',
    imageSrc: '/assets/phantom-flyknit.jpg',
    price: 185,
    salePrice: 160,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 100,
    numOfColors: 4,
    variantType:'sale',
  },
  {
    slug: 'lebron',
    name: 'LeBron 17',
    imageSrc: '/assets/lebron.jpg',
    price: 260,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 120,
    numOfColors: 1,
    variantType:'standard',
  },
];

interface ShoeCategory {
  name: string;
  path: string;
}

const SHOES_CATEGORY: Array<ShoeCategory> = [
  { name: 'LifeStyle', path: '/sale/shoes/lifestyle' },
  { name: 'Jordan', path: '/sale/shoes/jordan' },
  { name: 'Running', path: '/sale/shoes/running' },
  { name: 'Basketball', path: '/sale/shoes/basketball' },
  { name: 'Training & Gym', path: '/sale/shoes/training' },
  { name: 'Football', path: '/sale/shoes/football' },
  { name: 'Skateboarding', path: '/sale/shoes/skateboarding' },
  { name: 'American Football', path: '/sale/shoes/americanfootball' },
  { name: 'Baseball', path: '/sale/shoes/baseball' },
  { name: 'Golf', path: '/sale/shoes/golf' },
  { name: 'Tennis', path: '/sale/shoes/tennis' },
  { name: 'Athletics', path: '/sale/shoes/athletics' },
  { name: 'Walking', path: '/sale/shoes/walking' }
];

export {SHOES_CATEGORY}

export default SHOES;
