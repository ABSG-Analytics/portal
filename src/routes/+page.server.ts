import type { Actions } from "./$types";
import { createProject } from '$lib/server/db/services';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const company = String(data.get("company"));
        const projectType = String(data.get("projectType"));
		let response = await createProject(company, projectType);

        console.log(response);

		return response;
	},
} satisfies Actions;
  