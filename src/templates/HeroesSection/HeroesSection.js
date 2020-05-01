import React from 'react';
import Hero1 from 'components/Hero1/Hero1';
import Hero2 from 'components/Hero2/Hero2';

class HeroesSection extends React.Component {
  state = {
    hideHero1: false,
  };

  toggleHero = () => {
    this.setState({ hideHero1: true });
  };

  render() {
    const { hideHero1 } = this.state;
    const { togglePartners } = this.props;
    const { hideHero2 } = this.props;

    return (
      <div>
        <Hero1 toggleHero={this.toggleHero} hideHero1={hideHero1} />
        <Hero2
          showHero2={hideHero1}
          togglePartners={togglePartners}
          hideHero2={hideHero2}
        />
      </div>
    );
  }
}

export default HeroesSection;
