<?php 
$home_banner_slides = get_field('banner_slides');
?>
<section class="flex justify-center bg-[#f7f7f7] h-[41.38rem] max-w-full w-screen mx-auto pb-8" id="banner">
  <!-- PC Banner (hidden on mobile) -->
  <div class="w-[93.55306rem] relative block xsm:hidden" id="banner-pc">
    <div class="swiper mySwiper hide-navigation w-full h-full">
      <div class="swiper-wrapper">
        <!-- Slide 1 -->
        <?php foreach ($home_banner_slides as $item) { ?>
        <div class="swiper-slide text-center bg-[#f7f7f7] flex justify-center items-center">
          <div class="relative w-full h-full">
            <img src="<?php echo wp_get_attachment_image_url(22, 'full'); ?>"
              class="absolute left-0 right-0 bottom-0 w-full h-[26.71769rem] object-fill z-[1] pointer-events-none"
              alt="Banner Slide 1" draggable="false" />

            <img src="<?php echo wp_get_attachment_image_url(23, 'full'); ?>"
              class="absolute w-[47.79563rem] h-[8.60319rem] left-1/2 bottom-[20rem] -translate-x-1/2 object-fill z-0 pointer-events-none"
              alt="Banner Slide 2" draggable="false" />

            <img src="<?php echo wp_get_attachment_image_url(152, 'full'); ?>"
              class="absolute w-[90rem] h-[56.25rem] left-1/2 -bottom-[19.2rem] -translate-x-[50.5%] pointer-events-none opacity-100 bg-no-repeat bg-cover z-[1]"
              alt="Banner Slide 22" draggable="false" />

            <img src="<?php echo wp_get_attachment_image_url($item['img_before'], 'full'); ?>"
              class="absolute w-[39.125rem] h-[28.75rem] left-1/2 bottom-6 -translate-x-1/2 z-[1] transition-opacity duration-500 ease-in-out"
              alt="Banner Slide 3" draggable="false" />

            <img src="<?php echo wp_get_attachment_image_url($item['img_after'], 'full'); ?>"
              class="absolute w-[39.125rem] h-[28.75rem] left-1/2 bottom-6 -translate-x-1/2 z-[1] transition-opacity duration-500 ease-in-out opacity-0"
              alt="Banner Slide 4" draggable="false" />

            <!-- Left Content Box -->
            <div
              class="rounded-[1.45rem] overflow-hidden absolute bottom-[1.61rem] w-[26.44894rem] h-[23.40956rem] z-10 flex left-[1.78rem]">
              <img src="<?php echo wp_get_attachment_image_url(26, 'full'); ?>"
                class="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-fill z-[1]" alt="Dynamic Content 1"
                draggable="false" />

              <img src="<?php echo wp_get_attachment_image_url(27, 'full'); ?>"
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[24.35263rem] h-[21.55419rem] object-fill z-[1]"
                alt="Dynamic Content 11" draggable="false" />

              <div
                class="w-full h-full relative z-30 flex flex-col justify-between pt-7 pb-7 pl-[1.71rem] cursor-pointer group">
                <img src="<?php echo wp_get_attachment_image_url(31, 'full'); ?>"
                  class="absolute top-[4.92em] w-[13.25rem] h-[5.4375rem] z-31 opacity-0 transition-all duration-300 ease-in-out object-cover left-[1.94rem] group-hover:opacity-100"
                  alt="Box Buble" draggable="false" />

                <div
                  class="h-fit w-fit inline-flex py-[0.55775rem] px-5 bg-[#1550e5] rounded-lg shadow-[0px_4px_15.2px_rgba(0,89,241,0.15)] transition-transform duration-300 ease-in-out group-hover:-rotate-[3.85deg]">
                  <img src="<?php echo wp_get_attachment_image_url(37, 'full'); ?>" class="w-6 h-6 mr-[0.35544rem]"
                    alt="" draggable="false" />
                  <span class="text-[#f7f7f7] text-[0.97606rem] font-medium">Mọi người cho rằng:</span>
                </div>

                <p
                  class="text-start w-[21.875rem] text-[#081d1a] text-[1.39438rem] font-normal leading-[134%] relative z-[1] pl-[0.58rem]">
                  <?php echo $item['home_banner_des_l'] ?>
                </p>
              </div>
            </div>

            <!-- Right Content Box -->
            <div
              class="rounded-[1.45rem] overflow-hidden absolute bottom-[1.61rem] w-[26.44894rem] h-[23.40956rem] z-10 flex right-[1.78rem]">
              <img src="<?php echo wp_get_attachment_image_url(26, 'full'); ?>"
                class="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-fill z-[1] scale-x-[-1]"
                alt="Dynamic Content 1 Mirrored" draggable="false" />

              <img src="<?php echo wp_get_attachment_image_url(27, 'full'); ?>"
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[24.35263rem] h-[21.55419rem] object-fill z-[1] scale-x-[-1]"
                alt="Dynamic Content 11 Mirrored" draggable="false" />

              <div
                class="w-full h-full relative z-30 flex flex-col justify-between pt-7 pb-7 pr-[1.71rem] cursor-pointer items-end group">
                <img src="<?php echo wp_get_attachment_image_url(29, 'full'); ?>"
                  class="absolute top-[4.92em] w-[15.1875rem] h-[2.625rem] z-31 opacity-100" alt="Box Bat"
                  draggable="false" />

                <img src="<?php echo wp_get_attachment_image_url(39, 'full'); ?>"
                  class="absolute bottom-[2.92em] right-[3.21rem] w-[11.3125rem] h-[11.3125rem] z-0" alt="Box Search"
                  draggable="false" />

                <div
                  class="h-fit w-fit inline-flex py-[0.55775rem] px-5 bg-[#1550e5] rounded-lg shadow-[0px_4px_15.2px_rgba(0,89,241,0.15)] transition-transform duration-300 ease-in-out group-hover:rotate-[3.58deg]">
                  <img src="<?php echo wp_get_attachment_image_url(38, 'full'); ?>" class="w-6 h-6 mr-[0.35544rem]"
                    alt="" draggable="false" />
                  <span class="text-[#f7f7f7] text-[0.97606rem] font-medium">SEOhub cho rằng:</span>
                </div>

                <div
                  class="text-start w-[21.875rem] text-[#081d1a] text-[1.39438rem] font-normal leading-[134%] relative z-[1] pr-[0.58rem]">
                  <?php echo $item['home_banner_des_r'] ?>
                </div>
              </div>
            </div>
          </div>
        </div>
        <?php } ?>
      </div>

      <div class="swiper-pagination"></div>
    </div>
  </div>

  <!-- Mobile Banner (hidden on desktop) -->
  <div class="w-full relative h-full hidden xsm:block" id="banner-mb">
    <div class="swiper mobileSwiper w-full h-[33rem]">
      <div class="swiper-wrapper">
        <!-- Mobile Slide 1 -->
        <?php foreach ($home_banner_slides as $item) { ?>
        <div class="swiper-slide bg-[#f7f7f7] relative block">
          <div class="flex items-center h-fit mt-[0.38rem] py-[0.41025rem] px-[1.1rem] relative">
            <img src="<?php echo wp_get_attachment_image_url(32, 'full'); ?>" alt=""
              class="w-[1.125rem] h-[1.125rem] mr-[0.26rem] transition-opacity duration-800 ease-in-out"
              draggable="false" />
            <img src="<?php echo wp_get_attachment_image_url(36, 'full'); ?>" alt=""
              class="w-[1.125rem] h-[1.125rem] mr-[0.26rem] transition-opacity duration-800 ease-in-out absolute top-1/2 -translate-y-1/2 opacity-0"
              draggable="false" />
            <span class="text-[0.875rem] font-medium text-[#1550e5] transition-opacity duration-800 ease-in-out">Mọi
              người cho rằng</span>
            <span
              class="text-[0.875rem] font-medium text-[#1550e5] transition-opacity duration-800 ease-in-out absolute top-1/2 -translate-y-1/2 left-[2.825rem] opacity-0">SEOhub
              cho rằng</span>
          </div>

          <div class="my-[0.4rem_0_0.62rem_0] w-full px-[1.1rem]">
            <div class="bg-[#e6e6e6] h-[0.0625rem] w-full"></div>
          </div>

          <div class="mt-[0.88rem] relative w-[18.75rem] pl-[1.1rem]">
            <div class="relative text-start w-full transition-[height] duration-800 ease-in-out">
              <span
                class="text-start w-full text-[#081d1a] text-[1.25rem] font-normal leading-[140%] transition-opacity duration-800 ease-in-out">
                <?php echo $item['home_banner_des_l'] ?>
              </span>
              <span
                class="text-start w-full text-[#081d1a] text-[1.25rem] font-normal leading-[140%] transition-opacity duration-800 ease-in-out absolute top-0 left-0 opacity-0">
                <?php echo $item['home_banner_des_r'] ?>
              </span>
            </div>

            <div class="mt-[0.56rem] flex items-center relative z-10 transition-all duration-800 ease-in-out">
              <div
                class="w-[2.54188rem] h-[2.54188rem] rounded-full flex justify-center items-center transition-all duration-800 ease-in-out absolute -left-[2.54188rem] scale-0 border border-[#e6e6e6] bg-[rgba(255,255,255,0.39)] opacity-0 backdrop-blur-[2px]">
                <div class="w-[0.66213rem] h-[0.97275rem] bg-contain bg-no-repeat"
                  style="background-image: url('<?php echo wp_get_attachment_image_url(34, 'full'); ?>')"></div>
              </div>
              <div
                class="w-[6.94181rem] h-[2.55238rem] rounded-[1.27619rem] overflow-hidden flex justify-center items-center transition-all duration-800 ease-in-out relative">
                <div
                  class="w-full h-full bg-[rgba(255,255,255,0.39)] backdrop-blur-[2px] absolute top-0 left-0 right-0 bottom-0 opacity-0 transition-all duration-800 ease-in-out">
                </div>
                <div
                  class="w-full h-full bg-gradient-to-b from-[#001cb3] to-[#548beb] absolute top-0 left-0 right-0 bottom-0 opacity-100 transition-all duration-800 ease-in-out">
                </div>
                <span
                  class="z-[1] transition-all duration-800 ease-in-out absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full leading-[134%] tracking-[0.0455rem] text-[0.90956rem] font-normal uppercase opacity-100 text-white font-bold">Nhưng
                  !</span>
                <span
                  class="z-[1] transition-all duration-800 ease-in-out absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full leading-[134%] tracking-[0.0455rem] text-[0.90956rem] font-normal opacity-0 text-[#1550e5]">Mọi
                  người thấy</span>
              </div>
              <div
                class="w-[2.54188rem] h-[2.54188rem] rounded-full flex justify-center items-center transition-all duration-800 ease-in-out scale-100 bg-gradient-to-b from-[#001cb3] to-[#548beb] opacity-100">
                <div class="w-[0.66213rem] h-[0.97275rem] bg-contain bg-no-repeat"
                  style="background-image: url('<?php echo wp_get_attachment_image_url(55, 'full'); ?>')"></div>
              </div>
            </div>
          </div>

          <div class="relative">
            <img src="<?php echo wp_get_attachment_image_url($item['img_before'], 'full'); ?>" alt="anh nho"
              class="absolute w-auto h-[15.75488rem] z-3 object-cover left-1/2 -translate-x-1/2 bottom-[0.84rem] transition-opacity duration-800 ease-in-out"
              draggable="false" />
            <img src="<?php echo wp_get_attachment_image_url($item['img_after'], 'full'); ?>" alt="anh nho"
              class="absolute w-auto h-[15.75488rem] z-3 object-cover left-1/2 -translate-x-1/2 bottom-[0.84rem] transition-opacity duration-800 ease-in-out opacity-0"
              draggable="false" />
            <img src="<?php echo wp_get_attachment_image_url(21, 'full'); ?>" alt="bg banner mid"
              class="absolute w-full h-[20.007rem] bottom-[5.7rem] z-1" draggable="false" />
            <img src="<?php echo wp_get_attachment_image_url(19, 'full'); ?>" alt="bg banner"
              class="absolute bottom-0 z-2 object-cover w-full h-[14.87519rem]" draggable="false" />
            <div class="bg-white h-8 absolute bottom-0 w-full z-1"></div>
          </div>
        </div>
        <?php } ?>
      </div>

      <div class="swiper-pagination"></div>
    </div>
  </div>
</section>