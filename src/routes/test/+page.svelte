<script lang="ts">
    import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	
	export let form: ActionData;
	$: userProjects = form?.userProjects;
	$: userGroups = form?.userGroups;
	$: userRoles = form?.userRoles;
	$: userInfo = form?.userInfo;
</script>

<div>
	<p class="text-2xl">Enter Username</p>
	<form class="flex flex-col w-fit" method="POST" use:enhance>
		<input class="w-48 mt-4 px-6 py-2 border rounded click:border-red-500" type="text" name="username">
		<button class="w-fit mt-4 px-6 py-2 rounded bg-slate-800 hover:bg-slate-600 font-semibold text-white">Submit</button>
	</form>

	{#if userInfo}
		<p class="mt-8 mb-4 text-2xl">User Info</p>
		<p>First Name: { userInfo.details.firstName }</p>
		<p>Last Name: { userInfo.details.lastName }</p>
		<p>Email: { userInfo.details.email }</p>
		<p>Phone: { userInfo.details.phone }</p>
	{/if}
	
	{#if userProjects}
		<p class="mt-8 text-2xl">Projects</p>
		{#each userProjects as project}
			<li class="mt-4">{ project }</li>
		{/each}
	{/if}

	{#if userGroups}
		<p class="mt-8 text-2xl">Groups</p>
		{#each userGroups as group}
			<li class="mt-4">{ group }</li>
		{/each}
	{/if}

	{#if userRoles}
		<p class="mt-8 text-2xl">Roles</p>
		{#each userRoles as role}
			<li class="mt-4">{ role }</li>
		{/each}
	{/if}
</div>
