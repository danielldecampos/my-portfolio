<template>
  <!-- Section 1 -->
  <section class="w-full px-6 pb-12 antialiased bg-white">
    <div class="mx-auto max-w-8xl">
      <TheHeader />
      <NuxtLoadingIndicator />
      <NuxtPage />
      <!-- Botón de WhatsApp -->
      <a
        href="https://wa.me/541123861797"
        class="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          class="w-6 h-6"
        >
          <path
            d="M12 0C5.373 0 0 5.373 0 12c0 2.113.552 4.189 1.602 6.02L0 24l6.215-1.574A11.933 11.933 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.867 0-3.705-.502-5.303-1.449l-.379-.221-3.689.934.979-3.462-.243-.37A10.001 10.001 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10zm5.547-7.412c-.297-.149-1.758-.868-2.031-.967-.273-.099-.473-.149-.673.149-.198.298-.767.965-.938 1.163-.17.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.76-1.655-2.059-.173-.298-.018-.46.13-.608.134-.134.297-.347.446-.521.148-.174.198-.298.297-.497.099-.199.05-.372-.025-.521-.074-.149-.673-1.612-.923-2.21-.247-.595-.497-.516-.673-.516-.174 0-.373-.025-.573-.025-.198 0-.521.074-.796.372-.273.298-1.043 1.017-1.043 2.481 0 1.463 1.069 2.876 1.218 3.074.149.198 2.097 3.202 5.077 4.388.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.086 1.758-.718 2.003-1.412.247-.694.247-1.29.173-1.412-.074-.124-.272-.198-.57-.347z"
          />
        </svg>
      </a>
      <TheFooter />
    </div>
  </section>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";

export default {
  component: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style></style>
