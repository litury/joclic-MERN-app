import {useIntegration} from '@tma.js/react-router-integration';
import {
    bindMiniAppCSSVars,
    bindThemeParamsCSSVars,
    bindViewportCSSVars,
    initNavigator, useInitData, useLaunchParams,
    useMiniApp,
    useThemeParams,
    useViewport,
} from '@tma.js/sdk-react';
import {AppRoot} from '@telegram-apps/telegram-ui';
import {type FC, useEffect, useMemo} from 'react';
import {
    Navigate,
    Route,
    Router,
    Routes,
} from 'react-router-dom';
import {routes} from '@/navigation/routes.tsx';
import {AuthorizedTabbar} from '@/components/AuthorizedTabbar/AuthorizedTabbar.tsx';
import useAuthStore from '../store/authStore.ts';

export const App: FC = () => {
    const lp = useLaunchParams();
    const miniApp = useMiniApp();
    const themeParams = useThemeParams();
    const viewport = useViewport();
    const initData = useInitData();
    const userID = initData?.user?.id;
    const { isAuthorized, setIsAuthorized } = useAuthStore();

    // Функция для проверки статуса авторизации
    const checkAuthStatus = async (userID: any) => {
        try {
            const response = await fetch(`https://litury-josclicprod-a0d4.twc1.net/check-auth?userId=${userID}`);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }


            if (response.status === 200) {
                setIsAuthorized(true);
            }

            if (response.status === 401) {
                setIsAuthorized(false);
            }
        } catch (error) {
            console.error('Ошибка при проверке статуса авторизации:', error);
            setIsAuthorized(false);
        }
    };

    useEffect(() => {
        console.log('userID:', userID);
        console.log('isAuthorized:', isAuthorized);
        checkAuthStatus(userID);
    }, []);

    useEffect(() => {
        return bindMiniAppCSSVars(miniApp, themeParams);
    }, [miniApp, themeParams]);

    useEffect(() => {
        return bindThemeParamsCSSVars(themeParams);
    }, [themeParams]);

    useEffect(() => {
        viewport?.expand();
        return viewport && bindViewportCSSVars(viewport);
    }, [viewport]);

    const navigator = useMemo(() => initNavigator('app-navigation-state'), []);
    const [location, reactNavigator] = useIntegration(navigator);

    useEffect(() => {
        navigator.attach();
        return () => navigator.detach();
    }, [navigator]);

    return (

        <AppRoot appearance={miniApp.isDark ? 'dark' : 'light'} platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}>
            <Router location={location} navigator={reactNavigator}>
                {isAuthorized === null ? (
                    <div>Loading...</div>
                ) : (
                    <>
                    <Routes>
                        {routes.map((route) => (
                            <Route key={route.path} {...route} />
                        ))}
                        <Route
                            path="*"
                            element={<Navigate to={isAuthorized ? '/profile' : '/start'} replace={true} />}
                        />
                    </Routes>
                        {isAuthorized && location.pathname !== '/welcome' && <AuthorizedTabbar />}
                    </>
                )}
            </Router>
        </AppRoot>
    );
};
