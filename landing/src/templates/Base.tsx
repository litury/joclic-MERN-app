import {Meta} from '../layout/Meta';
import {AppConfig} from '../utils/AppConfig';
import {Banner} from './Banner';
import {Footer} from './Footer';
import {Hero} from './Hero';
import {OpenSourceSection} from './OpenSourceSection';

import {VerticalFeatures} from './VerticalFeatures';
import {Roadmap} from './Roadmap'

const Base = () => (
    <div className="text-gray-600 antialiased">
        <Meta title={AppConfig.title} description={AppConfig.description}/>
        <Hero/>
        <VerticalFeatures/>
        <Roadmap/>
        <OpenSourceSection/>
        <Banner/>
        <Footer/>
    </div>
);

export {Base};
