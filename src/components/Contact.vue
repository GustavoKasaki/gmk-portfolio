<script>
export default {
  name: 'ContactForm',
}
</script>

<template>
  <form class="max-w-2xl mx-auto space-y-4">
    <input
      type="text"
      placeholder="Name"
      class="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      type="email"
      placeholder="Email"
      class="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <textarea
      rows="5"
      placeholder="Message"
      class="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    ></textarea>
    <button
      type="submit"
      class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-500 transition"
    >
      Send
    </button>
  </form>
</template>
