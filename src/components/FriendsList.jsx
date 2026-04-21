import FriendsListItem from './FriendsListItem';

export default function FriendsList({
	friends,
	onSelectedFriend,
	selectedFriend,
}) {
	return (
		<ul>
			{friends.map((friend) => (
				<FriendsListItem
					friend={friend}
					key={friend.id}
					onSelectedFriend={onSelectedFriend}
					selectedFriend={selectedFriend}
				/>
			))}
		</ul>
	);
}
