import { flowerSpacingPost } from './flower-spacing';
import { vegetableSpacingPost } from './vegetable-spacing';
import { seedCalculatorPost } from './seed-calculator';
import { tomatoVarietiesPost } from './tomato-varieties';
import { growingTomatoesPost } from './growing-tomatoes';
import { fallGardenPost } from './fall-garden';
import { plantsToSeedPost } from './plants-to-seed';
import { springGardeningPost } from './spring-gardening';

export const blogPosts = [
  flowerSpacingPost,
  vegetableSpacingPost,
  seedCalculatorPost,
  tomatoVarietiesPost,
  growingTomatoesPost,
  fallGardenPost,
  plantsToSeedPost,
  springGardeningPost
].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());