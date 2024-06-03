import type { ComponentType, JSX } from 'react';

import { IndexPage } from '@/pages/IndexPage/IndexPage';
import { HowItWorksPage } from '@/pages/HowItWorksPage/HowItWorksPage.tsx';
import { WelcomePage } from '@/pages/WelcomePage/WelcomePage.tsx';
import { ProfilePage } from '@/pages/ProfilePage/ProfilePage.tsx';


interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const routes: Route[] = [
  { path: '/', Component: IndexPage },
  { path: '/works', Component: HowItWorksPage, title: 'Init Data' },
  { path: '/welcome', Component: WelcomePage, title: 'Launch Params' },
  { path: '/profile', Component: ProfilePage, title: 'Launch Params' },
];
