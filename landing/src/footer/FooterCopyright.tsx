

const FooterCopyright = () => (
    <div className="footer-copyright">
        © Copyright {new Date().getFullYear()} JoClic.
        <div> Made with <a href="https://t.me/divatoz">Джун на фронте</a>.</div>
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
