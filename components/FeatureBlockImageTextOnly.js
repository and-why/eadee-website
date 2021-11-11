import { FeatureBlockImageText } from './blocks/FeatureBlockImageText';
import { Container } from './styled-components/Container';
import { Section } from './styled-components/Section';

export default function FeatureBlockImageTextOnly({ content }) {
  return (
    <Section>
      <Container>
        <FeatureBlockImageText content={content} />
      </Container>
    </Section>
  );
}
