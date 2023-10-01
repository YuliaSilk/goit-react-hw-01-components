import user from "./data/user.json";
import data from "./data/data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './Profile';
import { TransactionHistory } from './TransactionHistory';


export const App = () => {
  return (
    <>
    <Profile user={user} />
    <Statistics data={data}/>
    <FriendList friehds={friends}/>
    <TransactionHistory transactions={transactions}/>
    </>

  );
};


    // <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
    // >
//       React homework template
    // </div>