import user from '../../data/user';
import data from '../../data/data';
import friends from '../../data/friends';
import transactions from '../../data/transactions';
import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import { TransactionsHistory } from '../TransactionHistory/TransactionHistory';
import { Container } from './App.styled';

console.log(friends);

export const App = () => {
  return (
    <Container>
      <>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends}></FriendList>
        <TransactionsHistory items={transactions} />
      </>
    </Container>
  );
};
