import Link from 'next/link';
import { CheckMark } from '@/components/icons/icons';
import Layout from '@/components/Layout';
import { Button } from '@/components/styled-components/Button';
import { Container } from '@/components/styled-components/Container';
import { getSomething } from '@/lib/api';
import { useState } from 'react';
import styled from 'styled-components';

export default function PricingPage({ data, nav, footer }) {
  const [monthly, setMonthly] = useState(true);
  const [isLoading, setLoading] = useState(false);

  return (
    <Layout nav={nav} footer={footer}>
      <Container>
        <PricePageTitle>
          <h2>{data.title}</h2>
        </PricePageTitle>
        <PricingPageStyles w='100%' maxW='800px' direction='row'>
          <PricingOptionsContainer>
            <Button dark={monthly} onClick={() => setMonthly(!monthly)}>
              Switch{' '}
              {monthly
                ? 'to annual pricing for 2 months free'
                : 'back to monthly pricing to pay monthly'}
            </Button>

            {data.plan.map((plan, index) => {
              return <UpgradeForm monthly={monthly} key={index} plan={plan} />;
            })}
          </PricingOptionsContainer>

          <BenefitsBox>
            <h4>All plans include</h4>
            <BenefitsList>
              {data.benefits.map((benefit, index) => {
                return (
                  <BenefitRow key={index}>
                    <BenefitIcon>
                      <CheckMark />
                    </BenefitIcon>
                    <p>{benefit.benefit}</p>
                  </BenefitRow>
                );
              })}
            </BenefitsList>
            <Link href='https://app.eadee.co/signin/create-account' passHref>
              <Button primary>Get started for free</Button>
            </Link>
          </BenefitsBox>
        </PricingPageStyles>
        {data.pricing_notes && <PricingNotes>{data.pricing_notes}</PricingNotes>}
      </Container>
    </Layout>
  );
}

const UpgradeForm = ({ plan, monthly }) => {
  return (
    <PricingForm>
      <Link href='https://app.eadee.co/signin/create-account' passHref>
        <PricingButton>
          <PricingFormInner>
            <h3>
              ${monthly ? plan.monthly_price : plan.monthly_price * 10}/{monthly ? 'm' : 'y'}
            </h3>
            <p>Up to {plan.number_of_employees} employees</p>
            <Button dark>Get started for free</Button>
          </PricingFormInner>
        </PricingButton>
      </Link>
    </PricingForm>
  );
};

export async function getStaticProps() {
  const data = await getSomething('pricing');
  const nav = await getSomething('top-nav-menu');
  const footer = await getSomething('footer-nav');
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
      nav,
      footer,
    },
    revalidate: 10,
  };
}

const PricePageTitle = styled.div`
  max-width: 600px;
  width: 100%;
  margin: var(--xs-vmin) 0;
`;
const PricingPageStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  gap: 32px;
  @media (min-width: 700px) {
    flex-direction: row;
  }
`;

const PricingOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 16px;
  width: 100%;
  @media (min-width: 700px) {
    width: 60%;
  }
`;

const PricingButton = styled.button`
  padding: 32px 16px;
  box-shadow: var(--box-shadow);
  border: none;
  width: 100%;
  border-radius: var(--border-radius-small);
  background: white;
  border: 1px solid var(--color-gray);
  cursor: pointer;
  &:hover {
    background: var(--color-gray);
  }
`;
const PricingForm = styled.div`
  display: flex;
  width: 100%;
  button {
    display: flex;
    justify-content: space-between;
  }
`;

const PricingFormInner = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  p {
    margin: 0;
    font-size: var(--n);
  }
  span {
    font-size: var(--s);
  }
  h2,
  h3 {
    margin: 0;
  }
`;

const PricingNotes = styled.div`
  margin-bottom: var(--l);
  font-size: var(--n);
`;
const BenefitsBox = styled.div`
  background: var(--color-gray_light);
  justify-content: space-between;
  padding: 32px;
  border-radius: var(--border-radius-small);
  width: 100%;
  box-shadow: var(--box-shadow);
  @media (min-width: 700px) {
    width: 40%;
  }
`;
const BenefitsList = styled.div`
  margin-bottom: 8px;
`;
const BenefitRow = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 2px;
  flex-wrap: nowrap;
  p {
    margin: 0;
    font-size: var(--s);
  }
`;
const BenefitIcon = styled.div`
  svg {
    height: 16px;
    width: 16px;
    margin-right: 8px;
  }
`;
