import type { Actions } from "./$types";
import { getUserData } from '$lib/server/db/services';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const username = String(data.get("username"));
		let { userData } = await getUserData(username);

		let userProjects = userData?.filter((document: any) => document.project !== null).map((document: any) => document.project);
		let userGroups = userData?.filter((document: any) => document.group !== null).map((document: any) => document.group);
		let userRoles = userData?.filter((document: any) => document.type === "role").map((document: any) => document.details.roleLabel);
		let userInfo = userData?.filter((document: any) => document.type === "person")[0];

		return { userProjects, userGroups, userRoles, userInfo };
	},
} satisfies Actions;
  