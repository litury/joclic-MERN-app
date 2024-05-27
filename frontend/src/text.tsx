
// import { type FC, useMemo } from 'react';
// import { useInitData, useLaunchParams, type User } from '@tma.js/sdk-react';
// import { List, Placeholder } from '@telegram-apps/telegram-ui';
//
// import { DisplayData, type DisplayDataRow } from '@/components/DisplayData/DisplayData.tsx';
//
// import './InitDataPage.css';
//
// function getUserRows(user: User): DisplayDataRow[] {
//   return [
//     { title: 'id', value: user.id.toString() },
//     { title: 'username', value: user.username },
//     { title: 'photo_url', value: user.photoUrl },
//     { title: 'last_name', value: user.lastName },
//     { title: 'first_name', value: user.firstName },
//     { title: 'is_bot', value: user.isBot },
//     { title: 'is_premium', value: user.isPremium },
//     { title: 'language_code', value: user.languageCode },
//     { title: 'allows_to_write_to_pm', value: user.allowsWriteToPm },
//     { title: 'added_to_attachment_menu', value: user.addedToAttachmentMenu },
//   ];
// }

// export const InitDataPage: FC = () => {
// const initDataRaw = useLaunchParams().initDataRaw;
// const initData = useInitData();
//
// const initDataRows = useMemo<DisplayDataRow[] | undefined>(() => {
//   if (!initData || !initDataRaw) {
//     return;
//   }
//   const {
//     hash,
//     queryId,
//     chatType,
//     chatInstance,
//     authDate,
//     startParam,
//     canSendAfter,
//     canSendAfterDate,
//   } = initData;
//   return [
//     { title: 'raw', value: initDataRaw },
//     { title: 'auth_date', value: authDate.toLocaleString() },
//     { title: 'auth_date (raw)', value: authDate.getTime() / 1000 },
//     { title: 'hash', value: hash },
//     { title: 'can_send_after', value: canSendAfterDate?.toISOString() },
//     { title: 'can_send_after (raw)', value: canSendAfter },
//     { title: 'query_id', value: queryId },
//     { title: 'start_param', value: startParam },
//     { title: 'chat_type', value: chatType },
//     { title: 'chat_instance', value: chatInstance },
//   ];
// }, [initData, initDataRaw]);
//
// const userRows = useMemo<DisplayDataRow[] | undefined>(() => {
//   return initData && initData.user ? getUserRows(initData.user) : undefined;
// }, [initData]);
//
// const receiverRows = useMemo<DisplayDataRow[] | undefined>(() => {
//   return initData && initData.receiver ? getUserRows(initData.receiver) : undefined;
// }, [initData]);
//
// const chatRows = useMemo<DisplayDataRow[] | undefined>(() => {
//   if (!initData?.chat) {
//     return;
//   }
//   const { id, title, type, username, photoUrl } = initData.chat;
//
//   return [
//     { title: 'id', value: id.toString() },
//     { title: 'title', value: title },
//     { title: 'type', value: type },
//     { title: 'username', value: username },
//     { title: 'photo_url', value: photoUrl },
//   ];
// }, [initData]);
//
// if (!initDataRows) {
//   return (
//     <Placeholder
//       header="Oops"
//       description="Application was launched with missing init data"
//     >
//       <img
//         alt="Telegram sticker"
//         src="https://xelene.me/telegram.gif"
//         style={{ display: 'block', width: '144px', height: '144px' }}
//       />
//     </Placeholder>
//   )
// }
// return (
//   <List>
//     <DisplayData header={'Init Data'} rows={initDataRows}/>
//     {userRows && <DisplayData header={'User'} rows={userRows}/>}
//     {receiverRows && <DisplayData header={'Receiver'} rows={receiverRows}/>}
//     {chatRows && <DisplayData header={'Chat'} rows={chatRows}/>}
//   </List>
// )
// };
-------------------------------
//     const [expanded, setExpanded] = useState([]);
//
//     const handleAccordionChange = (index) => (newExpanded) => {
//         if (newExpanded) {
//             setExpanded((prev) => [...prev, index]);
//         } else {
//             setExpanded((prev) => prev.filter((item) => item !== index));
//         }
//     };
//
//     return (
//         <Section style={{ maxWidth: '600px', margin: '0 auto' }}>
//             <Accordion expanded={expanded.includes(1)} onChange={handleAccordionChange(1)}>
//                 <Accordion.Summary>
//                     1️⃣ Сервер с Express
//                 </Accordion.Summary>
//                 <Accordion.Content>
//                     <Text>
//                         Сервер с Express запускает <a href="https://pptr.dev" target="_blank"
//                                                       rel="noopener noreferrer"
//                                                       style={{color: '#3390ec'}}>Puppeteer</a> для авторизации и
//                         автоматизации.
//                     </Text>
//                 </Accordion.Content>
//             </Accordion>
//             <Accordion expanded={expanded.includes(2)} onChange={handleAccordionChange(2)}>
//                 <Accordion.Summary>
//                     2️⃣ React-клиент
//                 </Accordion.Summary>
//                 <Accordion.Content>
//                     <Text>
//                         Этот React-клиент позволяет авторизоваться на HeadHunter и отправить запрос на сервер.
//                     </Text>
//                 </Accordion.Content>
//             </Accordion>
//             <Accordion expanded={expanded.includes(3)} onChange={handleAccordionChange(3)}>
//                 <Accordion.Summary>
//                     3️⃣ Профиль OfferBoost
//                 </Accordion.Summary>
//                 <Accordion.Content>
//                     <Text>
//                         После удачного входа в аккаунт вам будет доступен профиль OfferBoost где можно запускать
//                         и останавливать скрипт.
//                     </Text>
//                 </Accordion.Content>
//             </Accordion>
//             <Accordion expanded={expanded.includes(4)} onChange={handleAccordionChange(4)}>
//                 <Accordion.Summary>
//                     4️⃣ Сбор вакансий
//                 </Accordion.Summary>
//                 <Accordion.Content>
//                     <Text>
//                         Скрипт каждые 5 часов собирает <a
//                         href="https://hh.ru/search/vacancy?text=%28React+OR+Vue+or+Frontend+or+JavaScript+or+%D0%92%D0%B5%D1%80%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D1%89%D0%B8%D0%BA+%29+NOT+Backend+NOT+Node.js++NOT+TechLead++NOT+Backend+NOT+Senior+NOT+%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD%D0%B5%D1%80+NOT+%22%D0%92%D0%B5%D1%80%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D1%89%D0%B8%D0%BA+%D0%BB%D0%B5%D0%BD%D0%B4%D0%B8%D0%BD%D0%B3%D0%BE%D0%B2%22&salary=&schedule=remote&ored_clusters=true&search_field=name&enable_snippets=true&hhtmFrom=vacancy_search_list&hhtmFromLabel=vacancy_search_line"
//                         target="_blank" rel="noopener noreferrer" style={{color: '#3390ec'}}>Frontend вакансии</a> и
//                         отправляет на них отклики.
//                     </Text>
//                 </Accordion.Content>
//             </Accordion>
//         </Section>
//     );
-----------------------------------
// import {Section, Cell, Image, List} from '@telegram-apps/telegram-ui';
// import {Link} from '@/components/Link/Link.tsx';
// import tonSvg from './ton.svg';

// <List>
//   <Section
//     header='Features'
//     footer='You can use these pages to learn more about features, provided by Telegram Mini Apps and other useful projects'
//   >
//     <Link to='/ton-connect'>
//       <Cell
//         before={<Image src={tonSvg} style={{ backgroundColor: '#007AFF' }}/>}
//         subtitle='Connect your TON wallet'
//       >
//         TON Connect
//       </Cell>
//     </Link>
//
//   </Section>
//
//   <Section
//     header='Application Launch Data'
//     footer='These pages help developer to learn more about current launch information'
//   >
//     <Link to='/init-data'>
//       <Cell subtitle='User data, chat information, technical data'>Init Data</Cell>
//     </Link>
//     <Link to='/launch-params'>
//       <Cell subtitle='Platform identifier, Mini Apps version, etc.'>Launch Parameters</Cell>
//     </Link>
//     <Link to='/theme-params'>
//       <Cell subtitle='Telegram application palette information'>Theme Parameters</Cell>
//     </Link>
//   </Section>
// </List>