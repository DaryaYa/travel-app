import { Clock } from './Clock';
import { Weather } from './Weather';
import { Currency } from './Currency';

const Widget = ({ timeZone, language, currency, city }) => (
  <div className="d-flex justify-content-center">
    <Weather city={city} language={language} />
    <div className="d-inline-flex flex-column justify-content-between border border-info rounded">
      <Clock timeZone={timeZone} language={language} />
      <Currency currency={currency} />
    </div>
  </div>
);

export default Widget;
