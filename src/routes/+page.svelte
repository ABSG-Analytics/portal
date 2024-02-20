<script lang="ts">
    import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	
	export let form: ActionData;
</script>

<div>
	<p class="text-2xl">Create Project</p>
	<form class="flex flex-col w-fit" method="POST" use:enhance>
        <div class="flex space-x-4 mt-4">
            <input class="w-56 px-3 py-2 border rounded text-slate-700" placeholder="Enter Company Name" type="text" name="company">
            <select class="w-56 px-2 py-2 border rounded text-slate-700 focus:border-2 focus:border-slate-700" name="projectType">
                <option />
                <option value="PHA">Process Hazard Analysis</option>
                <option value="PSM">Process Safety Management</option>
                <option value="FS">Facility Sighting</option>
            </select>
        </div>
		<button class="w-fit mt-4 px-6 py-2 rounded bg-slate-800 hover:bg-slate-600 font-semibold text-white">Submit</button>
	</form>
</div>

<div class="mt-16">
	<p class="text-2xl">Create User</p>
	<form class="flex flex-col w-fit" method="POST" use:enhance>
        <div class="flex space-x-4 mt-4">
            <input class="w-56 px-3 py-2 border rounded text-slate-700" placeholder="Enter Company Name" type="text" name="company">
            <select class="w-56 px-2 py-2 border rounded text-slate-700 focus:border-2 focus:border-slate-700" name="projectType">
                <option />
                <option value="PHA">Process Hazard Analysis</option>
                <option value="PSM">Process Safety Management</option>
                <option value="FS">Facility Sighting</option>
            </select>
        </div>
		<button class="w-fit mt-4 px-6 py-2 rounded bg-slate-800 hover:bg-slate-600 font-semibold text-white">Submit</button>
	</form>
</div>