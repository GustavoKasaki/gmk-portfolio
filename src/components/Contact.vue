<script>
export default {
  name: 'ContactForm',
}
</script>

<template>
  <div
    id="contact"
    class="bg-gray-100 px-6 py-40 text-center transition-colors duration-500 dark:bg-gray-800"
  >
    <form class="mx-auto max-w-2xl space-y-4">
      <h3 class="mb-6 text-2xl font-semibold text-blue-600 dark:text-blue-400">Contact info</h3>
      <input
        type="text"
        placeholder="Name"
        class="w-full rounded border border-gray-300 bg-white px-4 py-2 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
      />
      <input
        type="email"
        placeholder="Email"
        class="w-full rounded border border-gray-300 bg-white px-4 py-2 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
      />
      <textarea
        rows="5"
        placeholder="Message"
        class="w-full rounded border border-gray-300 bg-white px-4 py-2 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
      ></textarea>
      <button
        type="submit"
        class="rounded bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-500"
      >
        Send
      </button>
    </form>
  </div>
</template>
