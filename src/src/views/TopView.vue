<script setup lang="ts">
import TopPage from '@/pages/TopPage.vue';
import AboutPage from '@/pages/AboutPage.vue';
import TimelinePage from '@/pages/TimelinePage.vue';
import ProductPage from '@/pages/ProductPage.vue';
</script>

<template>
  <div class="one-page">
    <section id="home" class="page-section page-section--home" aria-label="Home">
      <TopPage />
    </section>

    <section id="about" class="page-section" aria-labelledby="about-title">
      <header class="section-heading">
        <h2 id="about-title">About</h2>
      </header>
      <AboutPage />
    </section>

    <section id="timeline" class="page-section" aria-labelledby="timeline-title">
      <header class="section-heading">
        <h2 id="timeline-title">Timeline</h2>
      </header>
      <TimelinePage />
    </section>

    <section id="product" class="page-section" aria-labelledby="product-title">
      <header class="section-heading">
        <h2 id="product-title">Product</h2>
      </header>
      <ProductPage />
    </section>
  </div>
</template>

<style scoped>
.one-page {
  overflow: hidden;
}

.page-section {
  position: relative;
  min-height: 70vh;
  padding: 72px 0 96px;
  scroll-margin-top: 64px;
}

.page-section:not(.page-section--home)::before {
  position: absolute;
  top: 0;
  right: 24px;
  left: 24px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-line), transparent);
  content: '';
}

.page-section--home {
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  padding-top: 24px;
}

.section-heading {
  display: flex;
  align-items: baseline;
  gap: 14px;
  margin: 0 24px 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--color-line);
}

.section-heading span {
  color: rgba(23, 63, 57, 0.58);
  font-size: 0.75rem;
  letter-spacing: 0.12em;
}

.section-heading h2 {
  color: var(--color-ink);
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 900;
  letter-spacing: 0.04em;
}

@media (max-width: 768px) {
  .page-section {
    min-height: auto;
    padding: 56px 0 72px;
  }

  .page-section--home {
    min-height: calc(100svh - 64px);
    padding-top: 0;
  }

  .section-heading {
    margin-inline: 16px;
  }
}
</style>
