<?php 
$vtc = get_field('value_to_customer');
$title = $vtc['title'];
$contact = $vtc['contact'];
$value_1 = $vtc['value_1'];
$value_2 = $vtc['value_2'];
$value_3 = $vtc['value_3'];
?>

<section id="vtc" class="relative z-10 rounded-t-[3.125rem] bg-gradient-to-b from-[#001cb3] to-[#548beb] mb-[-0.2rem]">
  <div class="max-w-[93.5625rem] mx-auto py-[3.13rem_0_5rem]">
    <div class="flex justify-between items-end w-full h-[10.25rem] px-0">
      <h2 class="text-white text-[2.875rem] leading-[4rem] font-normal text-left">
        <?php echo $title ?? ""; ?>
      </h2>
      <?php if(!empty($contact) && !empty($contact['url'])) :?>
      <a href="<?php echo $contact['url'] ?>" class="relative cursor-pointer no-underline">
        <custom-bordered-button-v2 color="#00D3D0">
          <?php echo $contact['title'] ?? ""; ?>
        </custom-bordered-button-v2>
      </a>
      <?php endif; ?>
    </div>
    <div class="relative mt-[11.24rem] flex flex-col pointer-events-none">
      <!-- Start: Item 1 -->
      <?php if( !empty($value_1) ) : ?>
      <div class="relative flex-shrink-0 mb-[4.18rem]">
        <article class="relative p-[1.87163rem_6.375rem_1.87163rem_1.875rem] min-h-[20.07rem] flex items-start rounded-[0.875rem] bg-white shadow-[0px_-59.892px_74.865px_0px_rgba(3,33,7,0.04)] overflow-hidden">
          <div class="flex-shrink-0 mr-[20.5625rem] inline-flex w-[3.05969rem] h-[3.05969rem] justify-center items-center rounded-[0.6875rem] bg-[#fe7301] shadow-[0px_4px_15.2px_0px_rgba(255,115,0,0.25)] text-white text-[1.2225rem] font-bold leading-[150%]">01</div>
          <div class="relative w-[33.1875rem]">
            <div class="flex items-start">
              <div class="mt-[0.59rem] mr-[0.3125rem]">
                <img src="<?= get_template_directory_uri().'/assets/images/arrowV3.svg'?>" alt="" class="w-[0.67456rem] h-[0.991rem] object-cover" />
              </div>
              <h3 class="flex-1 text-[#081d1a] text-[1.75rem] font-normal leading-[139%] tracking-[-0.0175rem]">
                <?php echo $value_1['title'] ?? "" ?>
              </h3>
            </div>
            <div class="my-[1.6375rem] w-full h-[0.0585rem] rounded-[0.0585rem] bg-gradient-to-r from-[rgba(112,115,124,0.22)] from-[24.3%] to-[rgba(112,115,124,0)] to-[82.57%]"></div>
            <div class="text-[#666d80] text-[0.875rem] font-normal leading-[150%]">
              <?php echo $value_1['description'] ?? "" ?>
            </div>
          </div>
          <div class="hidden md:block absolute bottom-[-15.08881rem] right-[-2.779rem] w-[63.19756rem] h-[28.51088rem]">
            <img src="<?= get_template_directory_uri().'/template-parts/font-page/assets/images/Union.svg'?>" alt="" class="w-full h-full object-cover" />
          </div>
          <div class="md:hidden block w-[63.19756rem] h-[15.886rem]">
            <img src="<?= get_template_directory_uri().'/template-parts/font-page/assets/images/UnionMb.svg'?>" alt="" class="w-full h-full object-cover" />
          </div>
          <div class="flex items-end absolute w-[27.99125rem] h-[19.90981rem] right-0 bottom-[-0.1175rem]">
            <img src="<?= get_template_directory_uri().'/template-parts/font-page/assets/images/frameVtc1.svg'?>" alt="" class="w-full h-auto object-cover" />
            <div class="absolute top-0 bottom-0 left-[4.83rem] w-[16.89238rem] h-[19.893rem] z-[5]">
              <?php echo wp_get_attachment_image($value_1['thumbnail'], 'full', false, array()) ?>
            </div>
            <div class="absolute left-[1.25rem] bottom-[1.5rem] z-10 w-[6.68131rem] h-[6.13606rem]">
              <svg xmlns="http://www.w3.org/2000/svg" width="126" height="118" viewBox="0 0 126 118" fill="none" class="w-full h-full object-cover">
                <path
                  d="M91.9536 113.177C72.8604 97.4879 61.1365 74.3371 49.9052 52.8326C47.3352 47.9119 44.3295 44.0303 43.1231 38.5256C41.753 32.2743 39.9745 26.0907 38.39 19.8912C37.4291 16.1313 35.6928 12.3621 35.2194 8.52383C34.9616 6.43317 35.1419 3.34161 33.7496 1.73441"
                  stroke="#6EFF00" stroke-width="2.16048" stroke-linecap="round" />
                <path
                  d="M85.1582 116.808C70.1152 111.71 57.8088 100.452 46.1724 90.0722C43.5098 87.697 40.8211 86.0456 38.8457 83.0096C36.6024 79.5619 34.1288 76.2477 31.7684 72.8798C30.3368 70.8372 28.4369 68.9651 27.2807 66.7647C26.6509 65.5662 26.0573 63.6663 24.8552 63.0161"
                  stroke="#6EFF00" stroke-width="2.16048" stroke-linecap="round" />
                <path
                  d="M105.136 111.06C98.3693 104.431 94.6659 95.1979 91.0957 86.6102C90.2787 84.6451 89.2607 83.0623 88.9839 80.9198C88.6697 78.4867 88.1972 76.0658 87.7994 73.6453C87.5581 72.1773 87.021 70.6798 86.9685 69.1982C86.94 68.3912 87.1122 67.2166 86.6342 66.5563"
                  stroke="#6EFF00" stroke-width="2.16048" stroke-linecap="round" />
                <path
                  d="M32.1256 1.62548C31.0976 3.35937 22.1789 18.74 23.9511 20.4038C25.6576 22.0058 27.3555 21.953 29.5492 21.6562C37.0045 20.6477 44.1708 18.2904 51.5721 20.9518C52.297 21.2125 56.4971 22.8385 54.18 21.4647C51.3099 19.7631 47.7127 16.5562 46.0603 13.6916C44.8708 11.6297 43.2462 7.37333 41.254 6.19219"
                  stroke="#6EFF00" stroke-width="2.16048" stroke-linecap="round" />
                <path
                  d="M23.8568 63.3111C23.6324 64.5871 21.7622 75.8604 23.2057 76.4584C24.5955 77.0342 25.6045 76.6169 26.8561 75.9403C31.1099 73.641 34.8836 70.5963 39.9382 70.5159C40.4333 70.508 43.328 70.532 41.6228 70.2321C39.5107 69.8607 36.6195 68.7493 34.9755 67.4021C33.792 66.4323 31.8486 64.242 30.3826 63.9841"
                  stroke="#6EFF00" stroke-width="2.16048" stroke-linecap="round" />
                <path
                  d="M86.0147 66.4539C85.5641 67.0817 81.644 72.6572 82.2652 73.3518C82.8633 74.0207 83.5135 74.0573 84.3612 74.0173C87.242 73.8813 90.0575 73.2207 92.795 74.4845C93.0631 74.6082 94.6128 75.3696 93.7738 74.7675C92.7346 74.0217 91.4681 72.6768 90.9328 71.5276C90.5475 70.7004 90.0694 69.0207 89.3481 68.503"
                  stroke="#6EFF00" stroke-width="2.16048" stroke-linecap="round" />
              </svg>
            </div>
            <?php if($value_1['tag']) :?>
            <custom-badge-v3 class="absolute bottom-[1.425rem] right-[5.125rem]" color="#FF7300">
              <?php echo $value_1['tag']; ?>
            </custom-badge-v3>
            <?php endif; ?>
          </div>
        </article>
      </div>
      <?php endif; ?>
      <!-- End: Item 1 -->

      <!-- Start: Item 2 -->
      <?php if(!empty($value_2)) : ?>
      <div class="relative flex-shrink-0 mb-[4.18rem]">
        <article class="relative p-[1.87163rem_6.375rem_1.87163rem_1.875rem] min-h-[20.07rem] flex items-start rounded-[0.875rem] bg-white shadow-[0px_-59.892px_74.865px_0px_rgba(3,33,7,0.04)] overflow-hidden">
          <div class="flex-shrink-0 mr-[20.5625rem] inline-flex w-[3.05969rem] h-[3.05969rem] justify-center items-center rounded-[0.6875rem] bg-[#fe7301] shadow-[0px_4px_15.2px_0px_rgba(255,115,0,0.25)] text-white vtc__card-item__star-icon-secondtext-[1.2225rem] font-bold leading-[150%]">02</div>
          <div class="relative w-[33.1875rem]">
            <div class="flex items-start">
              <div class="mt-[0.59rem] mr-[0.3125rem]">
                <img src="<?= get_template_directory_uri().'/assets/images/arrowV3.svg'?>" alt="" class="w-[0.67456rem] h-[0.991rem] object-cover" />
              </div>
              <h3 class="flex-1 text-[#081d1a] text-[1.75rem] font-normal leading-[139%] tracking-[-0.0175rem]">
                <?php echo $value_2['title'] ?? ""; ?>
              </h3>
            </div>
            <div class="my-[1.6375rem] w-full h-[0.0585rem] rounded-[0.0585rem] bg-gradient-to-vtc__card-item__star-icon-secondr from-[rgba(112,115,124,0.22)] from-[24.3%] to-[rgba(112,115,124,0)] to-[82.57%]"></div>
            <div class="text-[#666d80] text-[0.875rem] font-normal leading-[150%]">
              <?php echo $value_2['description'] ?? ""; ?>
            </div>
          </div>
          <div class="hidden md:block absolute bottom-[-15.08881rem] right-[-2.779rem] w-[63.19756rem] h-[28.51088rem]">
            <img src="<?= get_template_directory_uri().'/template-parts/font-page/assets/images/Union.svg'?>" alt="" class="w-full h-full object-cover" />
          </div>
          <div class="md:hidden block w-[63.19756rem] h-[15.886rem]">
            <img src="<?= get_template_directory_uri().'/template-parts/font-page/assets/images/UnionMb.svg'?>" alt="" class="w-full h-full object-cover" />
          </div>
          <div class="flex items-end absolute w-[27.99125rem] h-[19.90981rem] right-0 bottom-[-0.1175rem]">
            <img src="<?= get_template_directory_uri().'/template-parts/font-page/assets/images/frameVtc2.svg'?>" alt="" class="w-full h-auto object-cover" />
            <div class="absolute w-[16.44963rem] h-[19.21781rem] bottom-[-0.25rem]">
              <?php echo wp_get_attachment_image($value_2['thumbnail'], 'full', false, array()) ?>
            </div>
            <div class="absolute top-[15rem] left-[5rem] z-10 w-[3.13456rem] h-[3.48069rem]">
              <svg xmlns="http://www.w3.org/2000/svg" width="53" height="59" viewBox="0 0 53 59" fill="none" class="w-full h-full object-cover">
                <path
                  d="M16.9793 2.51653C17.1394 3.74252 16.4141 10.3934 16.276 11.5879C16.0833 13.2538 16.0218 15.2083 15.2311 16.7387C14.7969 17.5792 14.2774 18.5093 13.6012 19.1795C10.8208 21.9352 7.67855 24.6099 4.24292 26.5267C3.65857 26.8527 2.9586 27.0979 2.28104 27.0397C1.06046 26.9348 3.54165 27.1441 3.66909 27.1474C6.56535 27.2204 9.41564 26.2 12.3146 26.5352C15.7806 26.936 16.1157 28.9894 17.5336 31.7895C18.5362 33.7695 19.6764 35.5823 20.5133 37.6699C20.5782 37.8317 20.9991 38.709 20.7051 38.868C20.0267 39.2347 20.3312 36.3884 20.3547 36.185C20.6948 33.2447 20.8682 30.3511 22.7453 27.9661C24.3325 25.9494 26.6436 25.1312 29.1564 24.9684C30.4246 24.8862 36.2167 23.1452 34.4528 21.832C33.1022 20.8266 27.7507 21.5799 26.6828 20.3091C25.1407 18.4739 22.4548 17.5725 21.6139 15.3376C20.6936 12.8917 20.4565 15.0672 17.9682 11.4903C16.8796 6.82488 16.3889 7.08617 17.112 2.00438"
                  stroke="#FF7300" stroke-width="3.54066" stroke-linecap="round" />
                <path
                  d="M39.5626 32.7175C39.4201 39.4838 36.2781 45.5055 30.9796 46.4688C30.4013 46.574 28.5832 46.8393 30.2708 47.0332C32.6954 47.3117 35.095 47.4007 37.5288 47.4007C38.7247 47.4007 39.2957 47.8162 39.9831 48.7C40.4834 49.3432 40.7736 50.7128 41.0331 51.5219C41.3046 52.3681 41.6437 53.6044 41.7419 54.4881C41.8172 55.1663 42.506 55.686 42.6737 56.273C42.7416 56.5106 42.298 54.6882 42.2669 54.3043C42.1736 53.1543 42.2144 51.9923 42.2144 50.8394C42.2144 47.5637 43.5301 45.8633 46.3749 44.0933C47.6764 43.2834 49.1029 42.8692 50.4829 42.2558C50.7371 42.1429 51.3748 42.2445 50.6536 41.9671C50.0569 41.7376 49.4553 41.7308 48.8292 41.7308C47.7563 41.7308 46.5902 41.1414 45.5349 40.904C44.3705 40.642 43.1544 40.3346 42.3194 39.4996C41.3461 38.5263 41.2811 37.3293 40.8494 35.9822C40.3952 34.5652 39.8244 33.0336 39.6157 31.5723"
                  stroke="#FF7300" stroke-width="3.54066" stroke-linecap="round" />
              </svg>
            </div>
            <div class="absolute z-10 left-[18.275rem] top-[4.44rem] w-[3.66881rem] h-[4.56613rem]">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="74" viewBox="0 0 60 74" fill="none" class="w-full h-full object-cover">
                <path
                  d="M15.7194 3.37603C16.394 8.58393 13.8113 15.4098 7.63543 17.5913C6.3897 18.0314 5.11076 17.8388 3.90765 18.1347C2.653 18.4432 7.04757 19.2499 7.84603 19.4675C10.8947 20.298 13.9034 21.3866 14.2139 25.1285C14.3849 27.1898 13.9805 29.2667 14.0836 31.3287C14.1956 33.5662 14.6885 34.8306 15.425 32.1272C16.3428 28.7585 17.0701 24.547 19.7389 22.0147C20.1957 21.5813 21.2162 20.8651 21.7809 20.6656C22.911 20.2664 25.2808 20.5249 26.1389 20.0342C27.2983 19.3713 23.6935 18.8851 22.6743 18.0221C21.1271 16.7121 19.7324 15.4089 18.2857 13.9973C16.8512 12.5978 16.7718 10.2911 16.1246 8.472C15.3317 6.24334 15.854 5.07817 15.6003 2.87293"
                  stroke="#FF7300" stroke-width="3.54066" stroke-linecap="round" />
                <path
                  d="M45.0101 42.1217C45.6847 47.3296 43.1355 53.7086 36.9596 55.8902C35.7139 56.3302 34.435 56.1377 33.2319 56.4335C31.9772 56.742 36.3718 57.5488 37.1702 57.7663C40.2189 58.5969 43.2276 59.6854 43.5381 63.4273C43.7091 65.4887 43.3047 67.5655 43.4078 69.6275C43.5198 71.865 44.0127 73.1295 44.7492 70.426C45.667 67.0573 46.3943 62.8458 49.0632 60.3135C49.5199 59.8801 50.5404 59.1639 51.1051 58.9645C52.2352 58.5652 54.605 58.8237 55.4631 58.333C56.6225 57.6701 53.0177 57.184 51.9985 56.321C50.4513 55.0109 49.0566 53.7077 47.6099 52.2962C46.1754 50.8966 46.096 48.5899 45.4488 46.7708C44.6559 44.5422 45.1782 43.377 44.9245 41.1718"
                  stroke="#FF7300" stroke-width="3.54066" stroke-linecap="round" />
              </svg>
            </div>
            <?php if($value_2['tag']) :?>
            <custom-badge-v3 class="absolute bottom-[1.425rem] right-[5.125rem]" color="#1650E5">
              <?php echo $value_2['tag']; ?>
            </custom-badge-v3>
            <?php endif; ?>
          </div>
        </article>
      </div>
      <?php endif; ?>
      <!-- End: Item 2 -->

      <!-- Start: Item 3 -->
      <?php if(!empty($value_3)): ?>
      <div class="relative flex-shrink-0 mb-[4.18rem]">
        <article class="relative p-[1.87163rem_6.375rem_1.87163rem_1.875rem] min-h-[20.07rem] flex items-start rounded-[0.875rem] bg-white shadow-[0px_-59.892px_74.865px_0px_rgba(3,33,7,0.04)] overflow-hidden">
          <div class="flex-shrink-0 mr-[20.5625rem] inline-flex w-[3.05969rem] h-[3.05969rem] justify-center items-center rounded-[0.6875rem] bg-[#fe7301] shadow-[0px_4px_15.2px_0px_rgba(255,115,0,0.25)] text-white text-[1.2225rem] font-bold leading-[150%]">03</div>
          <div class="relative w-[33.1875rem]">
            <div class="flex items-start">
              <div class="mt-[0.59rem] mr-[0.3125rem]">
                <img src="<?= get_template_directory_uri().'/assets/images/arrowV3.svg'?>" alt="" class="w-[0.67456rem] h-[0.991rem] object-cover" />
              </div>
              <h3 class="flex-1 text-[#081d1a] text-[1.75rem] font-normal leading-[139%] tracking-[-0.0175rem]">
                <?php echo $value_3['title'] ?? ""; ?>
              </h3>
            </div>
            <div class="my-[1.6375rem] w-full h-[0.0585rem] rounded-[0.0585rem] bg-gradient-to-r from-[rgba(112,115,124,0.22)] from-[24.3%] to-[rgba(112,115,124,0)] to-[82.57%]"></div>
            <div class="text-[#666d80] text-[0.875rem] font-normal leading-[150%]">
              <?php echo $value_3['description'] ?? ""; ?>
            </div>
          </div>
          <div class="hidden md:block absolute bottom-[-15.08881rem] right-[-2.779rem] w-[63.19756rem] h-[28.51088rem]">
            <img src="<?= get_template_directory_uri().'/template-parts/font-page/assets/images/Union.svg'?>" alt="" class="w-full h-full object-cover" />
          </div>
          <div class="md:hidden block w-[63.19756rem] h-[15.886rem]">
            <img src="<?= get_template_directory_uri().'/template-parts/font-page/assets/images/UnionMb.svg'?>" alt="" class="w-full h-full object-cover" />
          </div>
          <div class="flex items-end absolute w-[27.99125rem] h-[19.90981rem] right-0 bottom-[-0.1175rem]">
            <img class="absolute right-[-0.6rem] bottom-[-3.1rem]" src="<?= get_template_directory_uri().'/template-parts/font-page/assets/images/frameVtc3.svg'?>" alt="" />
            <div class="absolute w-[16.44963rem] h-[19.21781rem] bottom-0 left-[5.03rem]">
              <?php echo wp_get_attachment_image($value_3['thumbnail'], 'full', false, array()) ?>
            </div>
            <div class="absolute bottom-[2.5675rem] left-[3.25rem] z-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="68" height="132" viewBox="0 0 68 132" fill="none" class="h-[8.39469rem] w-auto">
                <path
                  d="M1.44458 130.498C34.8046 106.928 44.1184 78.7141 7.16139 73.8444C42.7738 71.6466 36.4526 45.2983 9.26687 30.321C39.1465 45.5769 56.4785 32.1749 42.8745 14.3239C61.2418 26.8502 62.7104 17.2561 65.6609 0.766611"
                  stroke="#FF7300" stroke-width="3.54" />
              </svg>
            </div>
            <div class="absolute bottom-[4.5625rem] left-[16.875rem] w-[6.45013rem] z-10">
              <img src="<?= get_template_directory_uri().'/template-parts/font-page/assets/images/rectangle-vtc-3_1.svg'?>" alt="" class="w-full h-auto object-cover" />
            </div>
            <?php if($value_3['tag']) :?>
            <custom-badge-v3 class="absolute bottom-[1.4125rem] right-[6.875rem] z-10">
              <?php echo $value_3['tag']; ?>
            </custom-badge-v3>
            <?php endif; ?>
          </div>
        </article>
      </div>
      <?php endif; ?>
      <!-- End: Item 3 -->
    </div>
    <div class="trigger-end-section"></div>
  </div>
</section>

<!-- Mobile Styles -->
<style>
@media (max-width: 639.98px) {
  .vtc__wrapper {
    @apply rounded-t-[1.3125rem] mb-[-0.2rem] z-[1] relative;
  }
  .vtc__inner {
    @apply max-w-full pt-0 px-[1.24rem] pb-12;
  }
  .vtc__header {
    @apply h-[7.5rem] justify-center sticky top-[-2rem];
  }
  .vtc__title {
    @apply text-[1.625rem] leading-[139%] text-center;
  }
  .vtc__link-detail {
    @apply hidden;
  }
  .vtc__card-list {
    @apply mt-8;
  }
  .vtc__card-item {
    @apply relative flex-shrink-0 sticky top-[6.25rem] mb-[4.18rem];
  }
  .vtc__card-item:nth-child(2) {
    @apply pt-[3.3875rem];
  }
  .vtc__card-item__inner {
    @apply p-[1.4rem_1.5rem] min-h-[79vh] rounded-[0.625rem] shadow-[0px_2px_56.3px_0px_rgba(0,0,0,0.1)];
  }
  .vtc__card-item__number {
    @apply hidden;
  }
  .vtc__card-item__content {
    @apply w-full max-w-full;
  }
  .vtc__card-item__title-content {
    @apply text-[1.25rem] tracking-[-0.0125rem];
  }
  .vtc__card-item__divider {
    @apply my-4;
  }
  .vtc__card-item__thumb {
    @apply absolute left-0 right-0 bottom-0 w-full h-[14.9475rem];
  }
  .vtc__card-item__thumb-avatar {
    @apply w-[12.255rem] h-[14.31731rem] absolute bottom-0 left-[4.49rem] z-[5];
  }
  .vtc__card-item__thumb-avatar img {
    @apply w-full h-full object-cover;
  }
  .vtc__card-item:nth-child(3) .vtc__card-item__avatar {
    @apply w-[12.255rem] h-[14.31731rem] left-[4.49rem];
  }
  .vtc__card-item:nth-child(3) .vtc__card-item__rectangle {
    @apply bottom-[2.5625rem] left-[13.875rem] w-[5.45013rem];
  }
  .vtc__card-item:nth-child(3) .vtc__card-item__spiral-line {
    @apply bottom-[0.85rem] left-[3.1275rem] h-[6.25406rem];
  }
  .vtc__card-item:nth-child(3) .vtc__card-item__spiral-line svg {
    @apply w-auto h-full;
  }
  .vtc__card-item:nth-child(1) .vtc__card-item__avatar {
    @apply w-[12.255rem] h-[14.31731rem] left-[4.56rem];
  }
  .vtc__card-item__star-icon-first {
    @apply absolute top-[10rem] left-[2.75rem] z-10 w-[3.03456rem] h-[3.48069rem];
  }
  .vtc__card-item__star-icon-second {
    @apply absolute z-10 left-[13.275rem] top-[2.44rem] w-[3.06881rem] h-[4.56613rem];
  }
  .vtc__card-item:nth-child(1) .vtc__card-item__badge {
    @apply absolute bottom-[0.425rem] right-[0.825rem];
  }
  .vtc__card-item:nth-child(3) .vtc__card-item__thumb > img {
    @apply translate-x-[2.5875rem] translate-y-[2.125rem];
  }
  .vtc__card-item:nth-child(2) .vtc__card-item__avatar {
    @apply w-[12.255rem] h-[14.31731rem] left-[4.55rem];
  }
  .vtc__card-item:nth-child(3) .vtc__card-item__spiral-line {
    @apply bottom-[1.45rem] left-[3.5275rem] top-auto;
  }
  .vtc__card-item:nth-child(3) .vtc__card-item__badge {
    @apply right-[1.875rem];
  }
}
</style>