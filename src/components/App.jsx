import user from "./data/user.json";
import data from "./data/data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

import { Profile } from './Profile/profile';
import { Statistics } from './Statistics/statistics';
import { FriendList } from './FriendList/friendList';
import { TransactionHistory } from './TransactionHistory/transactionHistory';


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