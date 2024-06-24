// Filename: routes.tsx

import type {ComponentType, JSX} from 'react';

import {IndexPage} from '@/pages/IndexPage/IndexPage';
import {HowItWorksPage} from '@/pages/HowItWorksPage/HowItWorksPage.tsx';
import {WelcomePage} from '@/pages/WelcomePage/WelcomePage.tsx';
import {ProfilePage} from '@/pages/ProfilePage/ProfilePage.tsx';
import {SellPage} from '@/pages/SellPage/SellPage.tsx';
import {LeaderboardPage} from '@/pages/LeaderboardPage/LeaderboardPage.tsx';


interface Route {
    path: string;
    Component: ComponentType;
    title?: string;
    icon?: JSX.Element;
}

export const routes: Route[] = [
    {path: '/start', Component: IndexPage},
    {path: '/works', Component: HowItWorksPage},
    {path: '/welcome', Component: WelcomePage},

    {path: '/board', Component: LeaderboardPage},
    {path: '/profile', Component: ProfilePage},
    {path: '/shop', Component: SellPage},
];
