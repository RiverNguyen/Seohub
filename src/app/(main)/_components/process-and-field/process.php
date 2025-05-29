<?php 
$workflow = get_field('workflow');
$title = $workflow['title'];
$tag = $$workflow['tag'];
$workflow_list = $workflow['workflow_list'];
$contact = $workflow['contact'];
$contact_pc = $contact['contact_on_pc'];
$contact_mobile = $contact['contact_on_mobile'];
$subtitle = $workflow['subtitle'];
$description = $workflow['description'];

$commitment = get_field('commitment');
$commitment_title = $commitment['title'];
$commitment_tag = $commitment['tag'];

?>
<div id="warpper_section">
  <div id="warpper_section_1">
    <section id="snapping-section" class="relative w-full bg-gradient-to-b from-[#548beb] to-[#1767f0]">
      <div id="layer-background" class="relative h-screen overflow-hidden">
        <img src="<?= get_theme_file_uri('/template-parts/font-page/assets/images/Img_mask-group.svg') ?>" alt=""
          class="absolute right-[-18.67rem] top-0 w-[97.4205rem] h-[60.88781rem] object-contain" />

        <?php echo wp_get_attachment_image(132, 'full', false, array( 'class' => 'absolute right-[17.81rem] bottom-[22.6875rem] w-[75rem] h-[36.25rem] object-contain z-[1]')) ?>
        <div class="ovlay-mb"></div>
        <div class="absolute top-[5.69rem] left-[3.12rem] right-0 h-[8.32188rem] z-10">
          <?php if(!empty($workflow['tag'])) : ?>
          <div class="flex flex-col m-[0.625rem] w-max absolute top-[-25%]">
            <h2
              class="relative flex justify-center items-center bg-[#1550e5] whitespace-nowrap w-0 h-[3.04881rem] px-[0.48138rem] text-white text-[1.625rem] font-normal leading-[134%] overflow-hidden transition-all duration-[0.75s] ease-in-out opacity-0">
              <?php echo $workflow['tag'] ?? ""; ?></h2>
          </div>
          <?php endif; ?>
          <div class="absolute left-0 w-full text-white text-[2.875rem] leading-[1.39] h-[4.16094rem]">
            <?php echo $title ?? ""; ?>
          </div>
        </div>
        <svg id="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1240 224"
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[77.47363rem] h-[13.94525rem] transition-all duration-[0.7s]">
          <g clip-path="url(#clip0_906_7934)">
            <path
              d="M900.628 138.827V221.631H861.637V138.92C861.637 116.064 844.181 97.5177 822.647 97.5177C801.113 97.5177 783.657 116.049 783.657 138.92V221.631H744.667V0H783.657V67.105C795.12 60.0559 808.441 56.0235 822.647 56.0235C836.853 56.0235 850.174 60.0559 861.637 67.105C884.956 81.4187 900.628 108.184 900.628 138.827Z"
              fill="#3F84FA" />
            <path
              d="M1161.83 56.0235C1147.62 56.0235 1134.31 60.0713 1122.85 67.1358V0H1083.96V138.827C1083.96 169.456 1099.6 196.205 1122.85 210.519C1134.31 217.583 1147.62 221.631 1161.83 221.631C1204.82 221.631 1239.69 184.554 1239.69 138.827C1239.69 93.1005 1204.84 56.0235 1161.83 56.0235ZM1161.83 180.306C1140.29 180.306 1122.85 161.775 1122.85 138.904C1122.85 116.033 1140.29 97.5023 1161.83 97.5023C1183.36 97.5023 1200.8 116.033 1200.8 138.904C1200.8 161.775 1183.36 180.306 1161.83 180.306Z"
              fill="#3F84FA" />
            <path
              d="M1061.32 55.9277V149.105C1061.32 177.994 1045.45 202.943 1022.48 214.594C1013.6 219.104 1003.66 221.628 993.168 221.628C982.677 221.628 972.795 219.119 963.943 214.64C940.929 202.989 925.011 178.025 925.011 149.105V55.9277H963.943V149.151C963.943 166.343 977.047 180.287 993.212 180.287C1009.38 180.287 1022.48 166.343 1022.48 149.151V55.9277H1061.32Z"
              fill="#3F84FA" />
            <path
              d="M364.285 148.877C360.904 143.244 356.405 138.549 350.949 134.963C345.551 131.408 339.5 128.561 332.942 126.467C326.47 124.405 319.94 122.712 313.555 121.465C301.976 118.972 293.095 116.602 287.189 114.401C281.762 112.385 279.136 109.214 279.136 104.705C279.136 100.687 280.95 97.2091 284.693 94.0847C288.481 90.9141 294.532 89.3135 302.658 89.3135C309.811 89.3135 316.196 90.868 321.623 93.9462C327.036 97.009 331.316 101.242 334.349 106.505L335.031 107.69L368.217 91.0527L367.375 89.5905C361.252 78.8783 352.807 70.2901 342.272 64.0567C331.737 57.8388 318.416 54.6836 302.658 54.6836C293.342 54.6836 284.737 56.0226 277.104 58.6545C269.443 61.3018 262.811 64.9494 257.399 69.5206C251.957 74.1071 247.677 79.4632 244.673 85.4503C241.655 91.4682 240.116 97.8093 240.116 104.304C240.116 112.8 241.8 119.972 245.108 125.667C248.402 131.3 252.755 135.995 258.037 139.581C263.261 143.136 269.254 145.953 275.813 147.953C282.285 149.923 288.974 151.647 295.707 153.079C300.539 154.171 305.197 155.156 309.55 156.034C313.874 156.911 317.676 158.019 320.854 159.312C323.974 160.589 326.513 162.082 328.414 163.76C330.112 165.253 330.939 167.161 330.939 169.562C330.939 174.303 328.951 178.305 324.845 181.798C320.709 185.323 314.31 187.093 305.836 187.093C297.361 187.093 290.367 185.2 284.244 181.491C278.135 177.766 273.23 172.379 269.66 165.453L269.022 164.206L233.195 181.306L233.891 182.753C240.189 195.789 249.229 205.885 260.765 212.796C272.258 219.676 286.885 223.169 304.239 223.169C315.529 223.169 325.352 221.507 333.449 218.229C341.546 214.951 348.366 210.641 353.706 205.424C359.061 200.191 363.051 194.419 365.605 188.247C368.159 182.075 369.451 176.042 369.451 170.301C369.451 161.805 367.724 154.618 364.314 148.923L364.285 148.877Z"
              fill="#3F84FA" />
            <path
              d="M640.179 55.4062C596.908 55.4062 561.821 92.6218 561.821 138.518C561.821 184.414 596.908 221.63 640.179 221.63C683.45 221.63 718.537 184.414 718.537 138.518C718.537 92.6218 683.45 55.4062 640.179 55.4062ZM640.179 180.074C618.543 180.074 601 161.466 601 138.518C601 115.57 618.543 96.9621 640.179 96.9621C661.814 96.9621 679.358 115.57 679.358 138.518C679.358 161.466 661.814 180.074 640.179 180.074Z"
              fill="#3F84FA" />
            <path
              d="M539.45 113.892C529.553 80.0166 499.792 55.4062 464.589 55.4062C421.318 55.4062 386.231 92.6218 386.231 138.518C386.231 184.414 421.318 221.63 464.589 221.63C497.006 221.63 524.808 200.744 536.722 170.978L498.573 159.173C491.811 171.655 479.143 180.074 464.589 180.074C444.433 180.074 427.833 163.913 425.657 143.135H542.831C542.903 141.612 542.947 140.072 542.947 138.518C542.947 129.945 541.728 121.68 539.45 113.892ZM432.041 113.892C439.21 102.995 451.123 95.8693 464.589 95.8693C478.055 95.8693 489.983 102.995 497.151 113.892H432.041Z"
              fill="#3F84FA" />
            <path
              d="M58.8221 0C26.3906 0 0.097168 26.3263 0.097168 58.7983V185.475L33.7475 151.797C36.4465 149.095 39.842 147.54 43.3391 147.105C34.9664 135.046 30.0473 120.401 30.0473 104.608C30.0473 63.4039 63.4075 30.0021 104.56 30.0021C145.712 30.0021 179.072 63.4039 179.072 104.608C179.072 145.812 145.712 179.213 104.56 179.213C88.5691 179.213 73.7681 174.157 61.6371 165.571C61.1873 169.029 59.6347 172.385 56.9792 175.058L22.879 209.201H150.312C182.744 209.201 209.037 182.875 209.037 150.403V0H58.8221Z"
              fill="#3F84FA" />
            <path
              d="M104.572 54.8759C77.1323 54.8759 54.9019 77.1486 54.9019 104.608C54.9019 132.068 77.1468 154.34 104.572 154.34C131.997 154.34 154.242 132.068 154.242 104.608C154.242 94.714 151.34 85.5027 146.363 77.7443C142.822 82.8584 136.931 86.2146 130.256 86.2146C119.431 86.2146 110.667 77.4392 110.667 66.6006C110.667 62.5907 111.871 58.8568 113.931 55.7621C110.899 55.181 107.764 54.8613 104.558 54.8613L104.572 54.8759Z"
              fill="#3F84FA" />
          </g>
          <defs>
            <clipPath id="clip0_906_7934">
              <rect width="1239.58" height="223.124" fill="white" transform="translate(0.097168)" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div class="overflow-x-hidden absolute bottom-0 flex w-full border-t border-[#e6e8ea] z-10">
        <?php if( !empty($workflow_list) ) :?>
        <?php $number = 1 ?>
        <?php $length_workflow_list = count($workflow_list); ?>
        <?php foreach($workflow_list as $index => $item) : ?>
        <?php $numberText = str_pad($number, 2, '0', STR_PAD_LEFT); ?>
        <div
          class="flex-shrink-0 flex flex-col justify-between overflow-hidden p-5 pl-[1.875rem] w-[34.25rem] h-[22.6875rem] border-l border-[#e6e8ea] bg-gradient-to-b from-[#548beb] to-[#0059f1]">
          <div class="item-snapping__warpper">
            <p class="w-[34.25rem] opacity-70 text-white text-base font-normal mb-2 uppercase">
              <?php echo $numberText; ?>. <?php echo $item['title'] ?? ""; ?>
            </p>
            <?php echo wp_get_attachment_image($item['icon'], 'full', false, array( 'class' => 'w-[3.125rem] h-[3.00944rem] object-contain')) ?>
          </div>
          <div class="w-[25rem]">
            <?php echo $item['description'] ?? ""; ?>
          </div>
        </div>
        <?php $number = $number + 1; ?>
        <?php endforeach; ?>
        <?php endif; ?>

        <div data-speed="1"
          class="w-full relative flex flex-row justify-start bg-gradient-to-b from-[#548beb] to-[#0059f1] p-5 pl-[1.875rem] h-[22.6875rem] border-l border-[#e6e8ea]">
          <div class="flex flex-col justify-between h-full">
            <div class="mt-[1.72rem] w-[24.12613rem] text-[3.625rem] leading-[1.19] font-normal text-white">
              <?php echo $subtitle ?? "" ?>
            </div>
            <div class="opacity-70 text-white text-xl font-normal leading-[150%] w-[33.42481rem]">
              <?php echo $description ?? "" ?>
            </div>

            <?php if( !empty($contact_mobile) && !empty($contact_mobile['url']) ) : ?>
            <a href="<?php echo $contact_mobile['url']; ?>" class="vtc__link-detail">
              <custom-bordered-button-v2 color="#00d3d0">
                <?php echo $contact_mobile['title'];?>
              </custom-bordered-button-v2>
            </a>
            <?php endif; ?>
          </div>
          <div class="flex flex-col w-[15.6rem]">
            <svg xmlns="http://www.w3.org/2000/svg" width="110" height="111" viewBox="0 0 110 111" fill="none"
              class="w-[6.86181rem] h-[6.86181rem] ml-auto">
              <rect x="0.201172" y="0.25" width="109.789" height="109.789" fill="#1550E5" />
              <path d="M35.6387 71.7737L70.26 37.1523" stroke="white" stroke-width="5" stroke-linecap="square"
                stroke-linejoin="round" />
              <path d="M44.6621 35.6602H71.7486V62.7466" stroke="white" stroke-width="5" stroke-linecap="square"
                stroke-linejoin="round" />
            </svg>
            <?php if( !empty($contact_pc) && !empty($contact_pc['url']) ) : ?>
            <a href="<?php echo $contact_pc['url'] ?>"
              class="w-[8.75744rem] h-[2.52613rem] bg-[#00d3d0] flex justify-center items-center text-white text-[1.17306rem] font-normal leading-[1.39931rem] tracking-[-0.02544rem] no-underline cursor-pointer relative">
              <div
                class="absolute top-0 bottom-0 right-0 bg-[rgb(21,80,229)] z-0 w-0 transition-all duration-[0.5s] ease-in-out group-hover:w-full group-hover:right-auto group-hover:left-0">
              </div>
              <p class="z-[1]"><?php echo $contact_pc['title']; ?></p>
            </a>
            <?php endif; ?>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div class="bg-[#f4f4f4]">
    <div class="h-screen">
      <div class="w-full absolute h-screen z-[11]">
        <div class="hidden mb-4 mt-[3.75rem] pl-[1.6rem]">
          <div
            class="relative w-max flex h-[1.374rem] px-[0.21694rem] py-[0.07231rem] justify-center items-center bg-[#1550e5]">
            <p class="text-white text-xs font-normal leading-[134%]"><?php echo $commitment_tag ?? ""; ?></p>
          </div>
        </div>
        <img class="absolute bottom-0 left-[-4.81rem] w-[75rem] h-[36.25rem] z-[-1]"
          src="/wp-content/uploads/2025/04/foot-r-img-bg3.webp" alt="" />
        <img class="hidden absolute w-[49.875rem] h-[24.125rem] left-[-8.44rem] top-[-0.37rem]"
          src="/wp-content/uploads/2025/04/foot-r-img-bg3-mb.webp" alt="" />
        <img class="absolute top-0 left-[-13.81rem] w-[97.4205rem] h-[60.88781rem] z-[-1] pointer-events-none"
          src="/wp-content/uploads/2025/04/Img_mask-group-scaled.webp" alt="" />
        <div
          class="absolute z-[1] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[56.90819rem] text-[#9c9c9c] text-[2.875rem] font-normal leading-[1.39]">
          <?php echo $commitment_title ?? ""; ?>
          <div class="hidden">
            <div class="flex flex-col m-[0.625rem] w-max absolute top-0">
              <p
                class="relative flex justify-center items-center bg-[#1550e5] whitespace-nowrap w-0 h-[3.04881rem] px-[0.48138rem] text-white text-[1.625rem] font-normal leading-[134%] overflow-hidden transition-all duration-[0.75s] ease-in-out opacity-0">
                <?php echo $commitment_tag ?? ""; ?></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <?php 
      $speeds = [1.5, 1, 3.25, 1, 2.5, 1.5, 1, 2.5, 1.5, 1.5, 1, 3.25];
      $count = count($speeds);
    ?>
    <div class="grid grid-cols-3 p-4 gap-[25rem] relative z-[11] pb-20 mt-20">
      <?php foreach ($commitment['img'] as $index => $item) { 
        $speed = $speeds[$index % $count];
      ?>
      <div class="w-full h-full flex z-[-1] blur-[6.9px]">
        <?php echo wp_get_attachment_image($item, 'full', false, array( 'class' => 'w-[21.1875rem] h-[15.875rem] mx-auto rounded-[0.625rem] object-cover', 'data-speed' => 'clamp('.$speed.')')) ?>
      </div>
      <?php } ?>
    </div>
  </div>
</div>
<div class="hidden w-full h-[15.6875rem] bg-gradient-to-b from-transparent to-white relative z-50 border-none -mb-2">
</div>

<?php
// Add this at the end of the file to include necessary Tailwind classes
add_action('wp_head', function() {
  ?>
<script>
// Add any necessary JavaScript for hover effects and animations
document.addEventListener('DOMContentLoaded', function() {
  // Add hover effect for buttons
  const buttons = document.querySelectorAll('.item__btn');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.querySelector('.item__btn-hover').style.width = '100%';
      this.querySelector('.item__btn-hover').style.right = 'auto';
      this.querySelector('.item__btn-hover').style.left = '0';
    });
    button.addEventListener('mouseleave', function() {
      this.querySelector('.item__btn-hover').style.width = '0';
      this.querySelector('.item__btn-hover').style.right = '0';
      this.querySelector('.item__btn-hover').style.left = 'auto';
    });
  });
});
</script>
<?php
});
?>