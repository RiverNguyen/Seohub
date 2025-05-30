<?php 
$ltc = get_field('listen_to_customer');
$working_rule = $ltc['working_rule'];
$contact = $ltc['contact'];
$title = $ltc['title'];
$slide_list = $ltc['representative_face'];
?>

<section id="listen-customer" class="min-h-[37.5rem] bg-white relative">
  <div class="absolute inset-0 overflow-hidden">
    <img src="<?= get_template_directory_uri().'/template-parts/font-page/assets/images/listen-customer__bg.svg'?>"
      alt="" class="w-[58.70419rem] h-[36.69013rem] object-cover" />
  </div>
  <div class="absolute inset-0">
    <div class="absolute bottom-[-0.25rem] left-0 right-0">
      <img src="<?= get_template_directory_uri().'/template-parts/font-page/assets/images/ltc-inner-bg.svg'?>" alt=""
        class="w-full h-auto object-cover" />
    </div>
    <div class="absolute bottom-[-0.25rem] left-0 right-0 md:hidden">
      <img src="<?= get_template_directory_uri().'/template-parts/font-page/assets/images/ltc-inner-bg-mb.svg'?>" alt=""
        class="w-full h-auto object-cover" />
    </div>
    <div class="absolute bottom-[-0.25rem] left-0 right-0 hidden md:block">
      <img src="<?= get_template_directory_uri().'/template-parts/font-page/assets/images/ltc-inner-bg-bottom.svg'?>"
        alt="" class="w-full h-auto object-cover" />
    </div>
    <div class="absolute bottom-[-0.25rem] left-0 right-0 md:hidden">
      <img src="<?= get_template_directory_uri().'/template-parts/font-page/assets/images/ltc-inner-bg-bottom-mb.svg'?>"
        alt="" class="w-full h-auto object-cover" />
    </div>
    <div
      class="absolute right-[1.63rem] bottom-[6.64rem] hidden md:inline-flex p-[2.20669rem_1.88869rem_1.82163rem_0.75163rem] flex-col justify-end items-center">
      <img src="<?= get_template_directory_uri().'/template-parts/font-page/assets/images/ltc-search.svg'?>" alt=""
        class="w-[15.37219rem] h-[15.09919rem] object-cover" />
    </div>
    <div class="absolute z-[5] left-[3.08rem] top-[19.76rem] w-[47.25rem] md:block">
      <?php echo $title ?? "";?>
    </div>
    <div class="absolute z-[5] left-[3.08rem] top-[19.76rem] w-[47.25rem] md:block">
      <?php if(!empty($working_rule)) : ?>
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-y-[0.88rem] md:gap-x-[2.75rem] mb-[2.375rem] list-none">
        <?php foreach ($working_rule as $working_rule_item): ?>
        <?php if( !empty($working_rule_item) ): ?>
        <li class="flex items-center">
          <img alt="" src="<?= get_template_directory_uri().'/assets/images/arrowV2.svg'?>"
            class="w-[0.67456rem] h-[0.991rem] object-cover mr-[0.69rem]" />
          <span class="flex-1 text-white text-[1.125rem] font-normal leading-[139%]">
            <?php echo $working_rule_item['rule'] ?? ""; ?>
          </span>
        </li>
        <?php endif; ?>
        <?php endforeach; ?>
      </ul>
      <?php endif; ?>

      <?php if( !empty($contact) && !empty($contact['url']) ): ?>
      <a href="<?php echo $contact['url'] ?>" class="inline-flex no-underline vtc__link-detail">
        <custom-bordered-button-v2 color="#00D3D0" border-color="#fff" border-line="rgb(134 132 132 / 10%)">
          <?php echo $contact['title'] ?? ""; ?>
        </custom-bordered-button-v2>
      </a>
      <?php endif; ?>
    </div>
    <div class="absolute z-[10] w-[37.375rem] h-[39.375rem] bottom-0 right-[7.46rem] md:block">
      <svg xmlns="http://www.w3.org/2000/svg" width="44" height="55" viewBox="0 0 44 55" fill="none"
        class="absolute z-[20] top-[3.75rem] right-[11.79rem] w-[2.46169rem] h-[3.12581rem] object-cover">
        <path
          d="M22.8276 2.2748C23.0491 3.97102 22.0455 13.1729 21.8544 14.8254C21.5879 17.1303 21.5028 19.8344 20.4088 21.9519C19.8081 23.1147 19.0893 24.4016 18.1538 25.3287C14.3069 29.1414 9.95955 32.842 5.20622 35.4939C4.39773 35.9449 3.4293 36.2842 2.49187 36.2037C0.803141 36.0585 4.23597 36.3482 4.41229 36.3526C8.41939 36.4536 12.3629 35.0419 16.3737 35.5057C21.1691 36.0603 21.6327 38.9012 23.5944 42.7752C24.9816 45.5146 26.5591 48.0228 27.717 50.9111C27.8068 51.1349 28.3892 52.3487 27.9823 52.5686C27.0438 53.076 27.4651 49.138 27.4976 48.8567C27.968 44.7886 28.208 40.7851 30.8051 37.4853C33.001 34.6951 36.1985 33.5632 39.675 33.3379C41.4297 33.2242 43.3009 33.7562 40.8604 31.9395C38.9919 30.5485 37.7302 28.6498 36.2527 26.8916C34.1192 24.3525 30.4032 23.1053 29.2397 20.0133C27.9665 16.6293 26.018 17.3924 26.2469 13.8149C26.3223 12.6362 25.0327 9.09189 26.0332 2.06102"
          stroke="#1550E5" stroke-width="3.54066" stroke-linecap="round" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="39" viewBox="0 0 34 39" fill="none"
        class="absolute z-[20] top-[5.75rem] right-[10.26rem] w-[1.85188rem] h-[2.13775rem] object-cover">
        <path
          d="M14.1861 4.10889C12.9498 9.46078 11.5296 21.7518 4.19881 23.0847C3.39869 23.2301 0.883244 23.5973 3.21824 23.8655C6.5727 24.2508 9.89271 24.3739 13.26 24.3739C14.9146 24.3739 15.7045 24.9488 16.6556 26.1716C17.3477 27.0615 17.7493 28.9563 18.1083 30.0757C18.4838 31.2465 18.9531 32.957 19.0889 34.1796C19.1932 35.118 20.1461 35.837 20.3782 36.6492C20.4721 36.9779 19.8583 34.4565 19.8152 33.9254C19.6862 32.3343 19.7426 30.7266 19.7426 29.1315C19.7426 24.5995 21.563 22.2469 25.4989 19.7979C27.2996 18.6775 29.2732 18.1044 31.1825 17.2557C31.5341 17.0995 32.4165 17.2401 31.4186 16.8562C30.5931 16.5387 29.7608 16.5294 28.8946 16.5294C27.4101 16.5294 25.7968 15.7139 24.3367 15.3854C22.7258 15.0229 21.0432 14.5977 19.8879 13.4424C18.5413 12.0958 18.4515 10.4397 17.8541 8.57591C17.2258 6.61551 16.436 4.49636 16.1472 2.47461"
          stroke="#1550E5" stroke-width="3.54066" stroke-linecap="round" />
      </svg>
      <div class="swiper listen-customer__swiper">
        <div class="swiper-wrapper">
          <?php if(!empty($slide_list)) : ?>
          <?php foreach ($slide_list as $slide_item): ?>
          <?php if( !empty($slide_item) && !empty($slide_item['thumbnail']) ): ?>
          <div class="swiper-slide bg-transparent">
            <?php echo wp_get_attachment_image($slide_item['thumbnail'], 'full', false, array()) ?>

            <?php if(!empty($slide_item['first_rule'])): ?>
            <custom-badge-v1 class="absolute z-[30] top-[17rem] left-[1.9375rem] overflow-hidden">
              <?php echo $slide_item['first_rule']; ?>
            </custom-badge-v1>
            <?php endif; ?>

            <?php if(!empty($slide_item['second_rule'])): ?>
            <custom-badge-v2 class="absolute z-[30] top-[20.25rem] left-[3.8725rem] overflow-hidden">
              <?php echo $slide_item['second_rule']; ?>
            </custom-badge-v2>
            <?php endif; ?>
          </div>
          <?php endif; ?>
          <?php endforeach; ?>
          <?php endif; ?>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
@media (max-width: 639.98px) {
  .listen-customer {
    min-height: 40.875rem;
  }

  .listen-customer .listen-customer__content {
    width: 100%;
    padding: 0rem 0.9375rem;
    position: absolute;
    top: 6rem;
    left: 0;
    right: 0;
    z-index: 10;
  }

  .listen-customer .listen-customer__title {
    font-size: 1.625rem;
    line-height: 139%;
    position: absolute;
    left: 0;
    right: 0;
    padding: 0rem 0.9375rem;
    width: 100%;
    bottom: auto;
    top: 0;
  }

  .listen-customer .listen-customer__desc-list {
    grid-template-columns: repeat(1, 1fr);
    width: 16.6875rem;
    row-gap: 0.44rem;
  }

  .listen-customer .listen-customer__desc-item__arrow {
    margin-right: 0.6875rem;
    width: 0.67456rem;
    height: 0.991rem;
  }

  .listen-customer .listen-customer__desc-item__content {
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }

  .listen-customer .listen-customer__slide-wrapper {
    right: 0;
    bottom: 0;
    width: 21.97913rem;
    height: 23.15525rem;
  }

  .listen-customer .listen-customer__badge--primary {
    top: 10.275rem;
    left: 1.13875rem;
  }

  .listen-customer .listen-customer__badge--secondary {
    top: 12.5rem;
    left: 2rem;
  }

  .listen-customer .star_icon-first {
    top: 1.25rem;
    right: 6.92875rem;
    width: 1.44763rem;
    height: 1.83819rem;
  }

  .listen-customer .star_icon-second {
    top: 2.82rem;
    right: 6.02875rem;
    width: 1.08906rem;
    height: 1.25713rem;
  }

  .listen-customer .star_icon-first path,
  .listen-customer .star_icon-second path {
    stroke: #fff;
  }
}
</style>