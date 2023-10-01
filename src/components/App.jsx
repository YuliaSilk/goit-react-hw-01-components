import user from "./data/user.json";
import data from "./data/data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";
// import "./index.css";

import { Profile } from './Profile/profile';
import { Statistics } from './Statistics/statistics';
import { FriendList } from './FriendList/friendList';
import { TransactionHistory } from './TransactionHistory/transactionHistory';


export const App = () => {
  return (
    <>
    <Profile username={user.username}
             tag={user.tag}
             location={user.location}
             avatar={user.avatar}
             stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <Statistics data={data}/>
    <FriendList friehds={friends}/>
    <TransactionHistory items={transactions}/>
    </>

  );
};

export default App;
