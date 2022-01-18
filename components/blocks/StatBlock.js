import styled from 'styled-components';
import { Container } from '../styled-components/Container';
import { Section } from '../styled-components/Section';
import ReactMarkdown from 'react-markdown';

export default function StatBlock({ content }) {
  console.log(content);
  return (
    <Section>
      <Container>
        <StatsBlockContainer>
          {content.stats.map((stat) => {
            return (
              <StatContainer key={stat.id}>
                <h2>
                  {stat.stat_number} <Symbol>{stat.Symbol === 'percent' ? '%' : 'x'}</Symbol>
                </h2>
                <ReactMarkdown>{stat.stat_description}</ReactMarkdown>
              </StatContainer>
            );
          })}
        </StatsBlockContainer>
      </Container>
    </Section>
  );
}

const StatsBlockContainer = styled.div`
  display: flex;
  gap: 32px;
  margin: 64px 0;
  width: 100%;
  align-items: flex-start;
  text-align: center;
  justify-content: center;
  h2 {
    font-size: 72px;
    margin: 0;
  }
  p {
    font-size: 16px;
  }
`;
const Symbol = styled.span`
  font-size: 36px;
  margin-left: -16px;
`;
const StatContainer = styled.div`
  display: flex;
  max-width: 200px;
  flex-direction: column;
`;
