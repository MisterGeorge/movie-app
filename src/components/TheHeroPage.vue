<template>
  <div class="content">
    <div class="hero">
      <i>
        <slot name="icon"></slot>
      </i>
      <div class="details">
        <h1 class="title">
          <slot name="heading"></slot>
        </h1>
        <p class="subtitle">
          <slot name="body"></slot>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .content {
    display: block;
    @include border-radius (var(--vt-c-border-radius));
    background: var(--black-20, rgba(0, 0, 0, 0.20));
    backdrop-filter: blur(2.5rem);
    @include padding(3rem, 3rem, 3rem, 3rem);

    .hero {
      position: relative;
      @include flexbox;
      @include justify-content(start);
      @include padding(3rem, 3rem, 3rem, 3rem);
      @include margin(0, 0, 0, 0);

      i {
        display: flex;
        place-items: center;
        place-content: center;
        width: 6.25rem;
        height: 6.25rem;
      }

      .details {
        flex: 1;
        margin-left: 1rem;

        .title {
          color: var(--grey-50, #EBEEF5);
          font-size: 4rem;
          font-style: normal;
          font-weight: 600;
          line-height: 5rem;
          letter-spacing: -0.08rem;
          @include margin(0, 0, 1rem, 0);
        }
  
        .subtitle {
          font-size: 1rem;
          font-style: normal;
          font-weight: 400;
          line-height: 1.5rem;
        }
      }
    }
  }
</style>
