import { useState } from 'react';
import Button from './Button';

export default function FormAddFriend({ onAddFriend }) {
	const [friendName, setFriendName] = useState('');
	const [avatarUrl, setAvatarUrl] = useState('https://i.pravatar.cc/48');

	function handleSubmit(e) {
		e.preventDefault();
		const id = crypto.randomUUID();
		if (!friendName || !avatarUrl) return;
		const newFriend = {
			name: friendName,
			image: `${avatarUrl}?=${id}`,
			id,
			balance: 0,
		};
		onAddFriend(newFriend);
		setFriendName('');
		setAvatarUrl('https://i.pravatar.cc/48');
	}

	return (
		<form className='form-add-friend' onSubmit={handleSubmit}>
			<label>👯‍♀️ Friend name</label>
			<input
				type='text'
				value={friendName}
				onChange={(e) => setFriendName(e.target.value)}
			/>

			<label>🎆 Image URL</label>
			<input
				type='text'
				value={avatarUrl}
				onChange={(e) => setAvatarUrl(e.target.value)}
			/>

			<Button>Add</Button>
		</form>
	);
}
