import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate>Instantly Understandable</Translate>,
    Svg: require('@site/static/img/lightbulb.svg').default,
    description: (
      <>
        <Translate>Speakers of Romance languages understand the majority of a Neolatin text without prior study.</Translate>
      </>
    ),
  },
  {
    title: <Translate>Neutral</Translate>,
    Svg: require('@site/static/img/people-hugging.svg').default,
    description: (
      <>
        <Translate>Neolatin does not belong to anyone. Neolatin maintains the natural character of Romance languages without prioritizing any single language.</Translate>
      </>
    ),
  },
  {
    title: <Translate>Accessible</Translate>,
    Svg: require('@site/static/img/unlocked.svg').default,
    description: (
      <>
        <Translate>Unlock the power of Neolatin using free resources: lessons, vocabulary lists and more!</Translate>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
