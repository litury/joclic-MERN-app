type TelegramIconProps = {
    size?: number;
};

// height={size} width={size}

const TelegramIcon: React.FC<TelegramIconProps> = ({size = 24}) => (
    <svg xmlns="http://www.w3.org/2000/svg" height={size} width={size} enable-background="new 0 0 32 32" viewBox="0 0 32 32"
         id="telegram" style={{opacity: 0.5}}>
        <path fill="#ECEFF1"
              d="M12.408,28.188c-0.865,0-0.717-0.327-1.016-1.148l-2.54-8.362L28.408,7.076L12.408,28.188z"></path>
        <path fill="#CFD8DC"
              d="M12.408,28.188c0.667,0,0.962-0.305,1.333-0.667l3.556-3.458l-4.436-2.674L12.408,28.188z"></path>
        <path fill="#FFF" d="M12.861,21.391l10.747,7.94c1.228,0.676,2.111,0.326,2.417-1.139L30.4,7.577
			c0.448-1.796-0.684-2.61-1.858-2.078L2.854,15.405c-1.754,0.703-1.742,1.682-0.32,2.117l6.592,2.058l15.261-9.628
			c0.721-0.437,1.382-0.202,0.84,0.28L12.861,21.391z"></path>
        <path fill="#455A64" d="M24.687,30.163c-0.402,0-0.843-0.132-1.32-0.395l-10.803-7.976c-0.121-0.089-0.195-0.228-0.203-0.378
			c-0.007-0.15,0.053-0.295,0.165-0.396L25.322,9.503c0.205-0.185,0.521-0.169,0.706,0.037c0.185,0.205,0.168,0.521-0.037,0.706
			l-12.34,11.106l10.254,7.576c0.271,0.145,0.729,0.329,1.055,0.178c0.332-0.152,0.496-0.637,0.576-1.017l4.375-20.617
			c0.17-0.681,0.088-1.229-0.215-1.481c-0.231-0.192-0.575-0.206-0.947-0.038L3.033,15.871C2.244,16.188,1.996,16.514,2,16.622
			c0.003,0.071,0.173,0.267,0.68,0.422l6.375,1.99l6.999-4.416c0.234-0.146,0.542-0.077,0.689,0.156
			c0.147,0.233,0.078,0.542-0.156,0.689l-7.194,4.539C9.269,20.08,9.116,20.1,8.977,20.057l-6.592-2.058
			c-1.17-0.358-1.37-0.99-1.384-1.335c-0.02-0.473,0.253-1.157,1.667-1.723l25.695-9.908c0.697-0.318,1.445-0.25,1.974,0.191
			c0.613,0.511,0.813,1.413,0.549,2.474l-4.371,20.598c-0.184,0.878-0.566,1.457-1.137,1.719
			C25.163,30.114,24.933,30.163,24.687,30.163z"></path>
        <path fill="#455A64" d="M24.687,30.163c-0.402,0-0.843-0.132-1.32-0.395l-6.72-4.959c-0.222-0.164-0.27-0.478-0.105-0.699
		c0.164-0.222,0.478-0.27,0.699-0.105l6.664,4.923c0.271,0.145,0.729,0.329,1.055,0.178c0.332-0.152,0.496-0.637,0.576-1.017
		l4.375-20.617c0.17-0.681,0.088-1.229-0.215-1.481c-0.231-0.192-0.575-0.206-0.947-0.038L3.033,15.871
		C2.244,16.188,1.996,16.514,2,16.622c0.003,0.071,0.173,0.267,0.68,0.422l6.594,2.058c0.158,0.049,0.281,0.174,0.33,0.332
		l2.267,7.461c0.061,0.167,0.108,0.333,0.149,0.477c0.032,0.114,0.072,0.256,0.099,0.298c-0.004-0.005,0.076,0.019,0.289,0.02
		c0.447,0,0.617-0.167,0.957-0.498l1.66-1.614c0.198-0.194,0.514-0.188,0.707,0.01c0.192,0.198,0.188,0.515-0.01,0.707L14.09,27.88
		c-0.402,0.393-0.828,0.809-1.682,0.809c-0.98,0-1.178-0.434-1.351-1.046c-0.035-0.124-0.075-0.267-0.135-0.432l-2.198-7.233
		l-6.339-1.979c-1.17-0.358-1.37-0.99-1.384-1.335c-0.02-0.473,0.253-1.157,1.667-1.723l25.695-9.908
		c0.697-0.318,1.445-0.25,1.974,0.191c0.613,0.511,0.813,1.413,0.549,2.474l-4.371,20.598c-0.184,0.878-0.566,1.457-1.137,1.719
		C25.163,30.114,24.933,30.163,24.687,30.163z"></path>
        <g>
            <path fill="#455A64" d="M18.5,14c0,0.275-0.225,0.5-0.5,0.5l0,0c-0.275,0-0.5-0.225-0.5-0.5l0,0c0-0.275,0.225-0.5,0.5-0.5
								l0,0C18.275,13.5,18.5,13.725,18.5,14L18.5,14z"></path>
        </g>
    </svg>
);

export default TelegramIcon;
