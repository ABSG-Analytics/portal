<script>
    import "../app.css";
</script>

<div class="relative">
    <nav class="sticky top-0 left-0 w-full mx-auto max-w-8xl px-2 sm:px-6 lg:px-8 bg-slate-800 z-40">
        <div class="flex justify-center space-x-8 pt-4 py-2">
            <a href="/" class="text-slate-300 hover:bg-slate-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Create Stuff</a>
            <a href="/test" class="text-slate-300 hover:bg-slate-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Test Stuff</a>
        </div>
        <div class="flex justify-center text-wrap text-slate-400 pb-2 italic text-xs">
            "Ask not what AI can do for you. Rather, ask what you can do for AI." -- Napoleon Bonaparte
        </div>
    </nav>
    <div class="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8 mt-6">
        <slot />
    </div>
</div>
