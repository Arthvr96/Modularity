import React from 'react';
import Hero1 from 'components/Hero1/Hero1';
import Hero2 from 'components/Hero2/Hero2';

class HeroesSection extends React.Component {
  state = {
    changeHero: false,
  };

  toggleHero = () => {
    this.setState({ changeHero: true });
  };

  render() {
    const { changeHero } = this.state;
    return (
      <div>
        <Hero1 triggerToggleHero={this.toggleHero} />
        <Hero2
          changeHero={
            changeHero === true ? 'true' : 'false'
          }
        />
      </div>
    );
  }
}

export default HeroesSection;
