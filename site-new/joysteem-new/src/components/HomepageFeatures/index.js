import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'RECWORKS',
    Svg: require('@site/static/img/svg_tools.svg').default,
    description: (
      <>
      A BONEWORKS recreation in Rec Room!
      </>
    ),
  },
  {
    title: 'Games',
    Svg: require('@site/static/img/svg_game.svg').default,
    description: (
      <>
        Our game launcher, Relay, has some cool indie games, which some of them
        can be played on the web.
      </>
    ),
  },
  {
    title: 'ArpaRec',
    Svg: require('@site/static/img/svg_recroom.svg').default,
    description: (
      <>
        ArpaRec is a build group in Rec Room, led by the lead developer of this
        website, TechSide. Our current projects include ^Portal_02, and RECWORKS.
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
