import type { NextPage } from "next";

import { trpc } from "@/utils/trpc";
import Dashboard from "@/components/layout/dashboard";

const Home: NextPage = () => {
	return (
		<Dashboard title="my page">
			<h1> Dashboard Page</h1>
		</Dashboard>
	);
};

export default Home;
