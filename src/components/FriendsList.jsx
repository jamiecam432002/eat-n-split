import FriendsListItem from './FriendsListItem';

export default function FriendsList({ friends }) {
	return (
		<ul>
			{friends.map((friend) => (
				<FriendsListItem friend={friend} key={friend.id} />
			))}
		</ul>
	);
}
