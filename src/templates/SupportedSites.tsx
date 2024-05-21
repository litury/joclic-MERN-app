import Marquee from 'react-fast-marquee';


const SupportedSites = () => {
    const sites = [
        { url: 'https://geekjob.ru/', name: 'GeekJob' },
        { url: 'https://getmatch.ru/', name: 'GetMatch' },
        { url: 'https://career.habr.com/', name: 'CareerHabr' },
        { url: 'https://headhunter.ru/', name: 'HeadHunter' }
    ];

    return (
        <Marquee gradient={false} speed={50}>
            {sites.map((site, index) => (
                <div key={index} className="inline-block mx-4 sm:mx-8 md:mx-12 lg:mx-16">
                    <a href={site.url} target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base md:text-lg lg:text-xl">
                        {site.name}
                    </a>
                </div>
            ))}
        </Marquee>
    );
};

export { SupportedSites };