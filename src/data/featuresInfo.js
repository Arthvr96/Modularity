import dark1 from '../assets/images/features/features1dark.jpg';
import dark2 from '../assets/images/features/features2dark.jpg';
import dark3 from '../assets/images/features/features3dark.jpg';
import light1 from '../assets/images/features/features1light.jpg';
import light2 from '../assets/images/features/features2light.jpg';
import light3 from '../assets/images/features/features3light.jpg';
import iconStoper from '../assets/images/features/stoper.svg';
import iconCoffe from '../assets/images/features/coffe.svg';
import arrow from '../assets/images/arrow-lighttheme.svg';

export const featureOne = {
  subtitle: 'Feature one',
  title: 'Funcional Parametrs',
  description: `Parameters that are essential to the respective
           service and that describe the important dimension(s) of the
           servicescape, the service output or the service outcome.`,
  imgDark: dark1,
  imgLight: light1,
  icon1: iconStoper,
  icon2: iconCoffe,
  descriptionIcon1: `Your advantages help clients to make their decision`,
  descriptionIcon2: `Your advantages help clients to make their decision`,
};

export const featureTwo = {
  subtitle: 'Feature two',
  title: 'Service delivery point',
  description: `The physical location and/or logical interface where the
    benefits of the service are rendered to the consumer. At this point the
    service delivery preparation can be assessed and delivery can be monitored
    and controlled.`,
  imgDark: dark2,
  imgLight: light2,
  header1: '+120%',
  header2: '2 times',
  descriptionHeader1: `Your advantages help clients to make their decision`,
  descriptionHeader2: `Your advantages help clients to make their decision`,
};

export const featureThree = {
  subtitle: 'Feature three',
  title: 'Delivery readiness time',
  description: `The moments when the service is available and all the
           specified service elements are available at the delivery point.`,
  imgDark: dark3,
  imgLight: light3,
  formHeader: 'Subscribe to our news:',
  formImg: arrow,
};
