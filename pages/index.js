import { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { listPosts } from "../src/graphql/queries";

export default function Home() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetchPosts();
	}, []);
	async function fetchPosts() {
		const postData = await API.graphql({
			query: listPosts,
		});
		setPosts(postData.data.listPosts.items);
	}
	console.log({ posts });
	return <h1 className='text-sky-400 text-3xl font-bold underline'>Hello world!</h1>;
}
