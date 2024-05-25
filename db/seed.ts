import { Category, db, User, Todo } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(User).values([
		{
			id: "123345",
			Email: "ignacio@gmail.com",
			username: "ignacio",
			password: "1234",
		},
		{
			id: "1232345",
			Email: "kimd@gmail.com",
			username: "kimd",
			password: "1234",
		},

	]);

	await db.insert(Category).values([
		{
			id: "pofdggpodfop",
			label: "programador"
		},
		{
			id: "sdafsadf!@#",
			label: "diseñador"
		},
	]);

    await db.insert(Todo).values([
		{
			id: "pofdggpodfop",
			title: "hacer una app",
			description: "hacer una app de juegos",
			categoryId: "sdafsadf!@#",
			userId: "123345"
		},
		{
			id: "QWER##RA",
			title: "hacer un diseño",
			description: "hacer un diseño de astro",
			categoryId: "sdafsadf!@#",
			userId: "1232345"


		}

	]);






}
