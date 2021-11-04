import { FullPageCenteredBlock } from './blocks/FullPageCenteredBlock';
import { LargeTextAndImageBlock } from './blocks/LargeTextAndImage';

export function componentSwitch(block) {
  console.log('block', block);
  switch (block.__component) {
    case 'blocks.full-page-block':
      return <FullPageCenteredBlock content={block} />;
    case 'blocks.large-text-and-image':
      return <LargeTextAndImageBlock content={block} />;
    case 'blocks.coloured-block':
      return <p>color-text</p>;
    default:
      return <p>No block Found</p>;
  }
}
