import {AppConfig} from '../utils/AppConfig';

const FooterCopyright = () => (
    <div className="footer-copyright">
        © Copyright {new Date().getFullYear()} {AppConfig.title}.
        <div> Made with <a href="https://creativedesignsguru.com">Джун на фронте</a>.</div>
        <style jsx>
            {`
                .footer-copyright :global(a) {
                    @apply text-primary-500;
                }

                .footer-copyright :global(a:hover) {
                    @apply underline;
                }
            `}
        </style>
    </div>
);

export {FooterCopyright};
