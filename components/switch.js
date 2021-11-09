import { ColouredBlock } from './blocks/ColouredBlock';
import { FeatureBlockTitleAndText } from './blocks/FeatureBlockTitleAndText';
import { FullPageCenteredBlock } from './blocks/FullPageCenteredBlock';
import { FullWidthBlock } from './blocks/FullWidthBlock';
import { LargeTextAndImageBlock } from './blocks/LargeTextAndImage';

export function componentSwitch(block) {
  console.log('block', block);
  switch (block.__component) {
    case 'blocks.full-page-block':
      return <FullPageCenteredBlock content={block} />;
    case 'blocks.large-text-and-image':
      return <LargeTextAndImageBlock content={block} />;
    case 'blocks.coloured-block':
      return <ColouredBlock content={block} />;
    case 'blocks.full-width':
      return <FullWidthBlock content={block} />;
    case 'blocks.feature-block-title-and-text':
      return <FeatureBlockTitleAndText content={block} />;
    default:
      return <p>No block Found</p>;
  }
}
