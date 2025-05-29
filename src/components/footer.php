<?php 
$footer = get_field('footer','option');
$global_social = get_field('social', 'option');
$footer_logo = $footer['logo_footer'];
$footer_desc = $footer['desc'];
$footer_link = $footer['footer_link'];
$footer_document = $footer['ho_so'];
$footer_hotline = $footer['hotline'];

$credential = get_field('credential', 'option');
$credential_title = $credential['title'];
$credential_desc = $credential['desc'];
$credential_download = $credential['link_download'];
$credential_image = $credential['image'];
?>

<div class="relative z-50 bg-white">
  <div
    class="absolute bottom-full left-0 w-full h-[1000px] bg-gradient-to-b from-transparent to-[rgba(102,102,102,0.1)] backdrop-blur-[4.45px] opacity-0 pointer-events-none z-100 transition-opacity duration-300">
  </div>

  <footer class="relative overflow-hidden border border-[#f1f1f1]">
    <div class="absolute top-[-2.675rem] left-[-6.875rem] w-[57.5625rem] h-[27.8125rem] opacity-50">
      <?php echo wp_get_attachment_image(247, 'full', false, array('class' => 'w-full h-full object-cover')) ?>
    </div>

    <div class="w-[93.5625rem] h-[24.9375rem] mx-auto flex">
      <div class="flex w-[57.45rem] justify-between border-r border-[#f1f1f1]">
        <div class="flex flex-col justify-between relative z-30">
          <div class="flex flex-col">
            <a href="#" class="mt-14">
              <img src="<?php echo esc_url($footer_logo['url']); ?>" alt="<?php echo esc_attr($footer_logo['alt']); ?>"
                class="h-[4.5rem] w-[16.80975rem]">
            </a>
            <p class="mt-10 text-[#aaa] text-sm font-normal leading-[1.42188rem] w-[19.65265rem]">
              <?= $footer_desc ?>
            </p>
          </div>

          <?php if( !empty($global_social) ) : ?>
          <div class="flex relative z-30 pb-7">
            <?php foreach($global_social as $item) : ?>
            <?php if( !empty($item['social_icon']) && !empty($item['social_link']) && !empty($item['social_link']['url']) ) :?>
            <a href="<?php echo $item['social_link']['url'] ?>"
              class="w-11 h-11 flex justify-center items-center rounded-full border border-[rgba(120,120,120,0.17)] mr-3">
              <?php echo wp_get_attachment_image($item['social_icon'], 'full', false, array('class' => 'w-4 h-4 object-contain')) ?>
            </a>
            <?php endif; ?>
            <?php endforeach; ?>
          </div>
          <?php endif; ?>
        </div>

        <div class="flex">
          <nav class="pt-14 mr-[4.125rem]">
            <ul>
              <?php 
              $active_title = '';
              $active_desc = '';

              if (!empty($footer_link) && is_array($footer_link)): 
              foreach ($footer_link as $index => $item): 
              $link = $item['link'] ?? null;
              $title = $link['title'] ?? '';
              $url = $link['url'] ?? '#';
              $target = $link['target'] ?? '';
              $link_desc = $item['link_desc'] ?? '';

              if (!empty($title) && !empty($url)):
              if ($index === 0) {
                $active_title = $title;
                $active_desc = $link_desc;
              }
              ?>
              <li>
                <a href="<?php echo esc_url($url); ?>"
                  <?php if (!empty($target)): ?>target="<?php echo esc_attr($target); ?>" <?php endif; ?>
                  data-title="<?php echo esc_attr($title); ?>" data-content="<?php echo esc_attr($link_desc); ?>"
                  class="text-[#333] text-2xl font-normal leading-[2.49319rem] no-underline relative pr-[0.325rem] transition-colors duration-300 hover:text-[#1550e5] <?php echo $index === 0 ? 'text-[#1550e5]' : ''; ?>">
                  <?php echo esc_html($title); ?>
                  <?php echo wp_get_attachment_image(240, 'full', false, array('class' => 'inline-block w-[0.44263rem] h-[0.43794rem] absolute top-0 -right-2 opacity-0 transform -translate-x-[5px] transition-all duration-300')); ?>
                </a>
              </li>
              <?php 
              endif;
              endforeach; 
              endif; 
              ?>
            </ul>
          </nav>

          <div class="pt-14 pr-[3.065rem]">
            <div class="flex items-center">
              <p
                class="relative text-[#333] text-sm font-normal leading-[1.42188rem] pr-[0.5625rem] after:content-[''] after:absolute after:top-1/2 after:right-0 after:-translate-y-1/2 after:h-[45%] after:bg-[#ccc] after:w-[0.07rem]">
                <?php echo esc_html($active_title ?: 'Giới thiệu về SEOHub'); ?>
              </p>
              <?php echo wp_get_attachment_image(144, 'full', false, array('class' => 'pl-[0.5625rem] w-[1.625rem] h-[0.625rem]')) ?>
            </div>
            <p class="mt-3 w-[13.711rem] text-[#aaa] text-sm font-normal leading-[1.42188rem]">
              <?php echo esc_html($active_desc ?: 'Phát triển tùy chỉnh trang web doanh nghiệp.'); ?>
            </p>
          </div>
        </div>
      </div>

      <div class="flex-1">
        <?php if( !empty($credential) ): ?>
        <div class="flex items-end border-b border-[#f1f1f1] relative">
          <?php echo wp_get_attachment_image(243, 'full', false, array('class' => 'absolute right-[-8rem] bottom-0 z-1 w-[36.8125rem] h-[10.1875rem]')) ?>
          <?php echo wp_get_attachment_image(143, 'full', false, array('class' => 'hidden')) ?>

          <div class="p-16 pr-[3.25rem] pb-[1.8575rem] pl-[2.06rem]">
            <h4 class="text-[#333] text-2xl font-normal leading-8"><?= $credential_title ?? ""; ?></h4>
            <p class="text-[#666] text-sm font-normal leading-[1.125rem] w-[11.53772rem] mt-[0.575rem] mb-[1.5125rem]">
              <?= $credential_desc ?? "" ?></p>

            <?php if( !empty($credential_download) && !empty($credential_download['url']) ): ?>
            <a target="_blank" href="<?= $credential_download['url'] ?>">
              <button
                class="relative z-10 cursor-pointer border-none inline-flex max-w-[47.22188rem] bg-[#293844] pr-[0.4375rem] h-[2.925rem] group">
                <p class="m-0 w-fit pt-[1.15rem] px-4 pb-[0.73rem] text-white overflow-hidden flex flex-col">
                  <span
                    class="text top transition-all duration-300 group-hover:-translate-y-[250%] group-hover:animate-[flashColor_0.4s_ease-out_forwards]"><?= $credential_download['title']; ?></span>
                  <span
                    class="text bottom translate-y-full transition-all duration-300 group-hover:-translate-y-full"><?= $credential_download['title'];?></span>
                </p>
                <?php echo wp_get_attachment_image(241, 'full', false, array('class' => 'mt-4 w-4 h-4 transform translate-x-0 transition-all duration-600 opacity-0 relative z-10 -ml-4 group-hover:translate-x-[1.575rem] group-hover:opacity-100')) ?>
                <div
                  class="bg-white mt-[0.4375rem] animate-[rotate_reset_0.4s_linear_forwards] group-hover:animate-[rotate_big_0.4s_linear_forwards]">
                </div>
              </button>
            </a>
            <?php endif; ?>
          </div>

          <?php if(!empty($credential_image)): ?>
          <div class="w-[15.45706rem] h-[8.69456rem] relative z-10 overflow-hidden">
            <?php echo wp_get_attachment_image($credential_image, 'full', false, array('class' => 'transform translate-y-4 shadow-[0px_4px_24.8px_0px_rgba(0,0,0,0.27)] transition-transform duration-500 hover:translate-y-0')) ?>
          </div>
          <?php endif; ?>
        </div>
        <?php endif; ?>

        <div class="flex items-center justify-between h-[9.675rem] pl-[2.125rem]">
          <div class="flex flex-col">
            <p class="text-[#999] text-sm font-normal leading-6"><?= esc_html($footer_hotline['title']) ?></p>
            <div class="text-[#333] text-[1.75rem] font-normal leading-[2.33313rem]">
              <?= $footer_hotline['phone_number'] ?>
            </div>
            <?= $footer_hotline['mail'] ?>
          </div>

          <div class="flex items-center">
            <p class="text-[#999] text-sm font-normal leading-6"><?= $footer_hotline['advise'] ?></p>
            <div class="relative mr-5 cursor-pointer group">
              <img src="<?= $footer_hotline['image_advise']['url'] ?>"
                alt="<?= $footer_hotline['image_advise']['alt'] ?>"
                class="w-[3.3rem] h-[3.3rem] px-[0.42975rem] py-0 flex justify-center items-center rounded-full border border-[#f1f1f1] ml-[0.95rem]" />
              <span
                class="w-[5.91625rem] h-[6.5rem] absolute z-30 opacity-0 transition-all duration-300 -top-[6.75rem] -right-[4.3rem] transform -translate-x-1/2 translate-y-[30%] scale-80 bg-[url('/images/tooltip.svg')] bg-no-repeat bg-center bg-cover filter drop-shadow-[0px_4px_20.9px_rgba(0,0,0,0.12)] flex justify-center items-center pb-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 pointer-events-auto"
                style="background-image: url('<?php echo wp_get_attachment_image_url(140, 'full'); ?>')">
                <img src="<?= $footer_hotline['qr_advise']['url'] ?>" alt="<?= $footer_hotline['qr_advise']['alt'] ?>"
                  class="w-[5.15994rem] h-[5.15994rem]" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <div
    class="text-[#ccc] text-sm font-normal leading-6 flex justify-between items-center w-[93.5625rem] mx-auto h-[3.1125rem]">
    <div class="flex items-center">
      <p
        class="relative pr-4 after:content-[''] after:absolute after:top-1/2 after:right-0 after:-translate-y-1/2 after:h-[45%] after:bg-[#ccc] after:w-[0.05rem]">
        ©2025 Công ty Cổ phần OKHUB</p>
      <p class="ml-4">Giấy phép 17051691</p>
    </div>
    <p>Designed by OKHub</p>
  </div>
</div>

<style>
@media screen and (max-width: 639.9px) {
  .footer__main {
    @apply w-[23.4375rem] h-full;
  }

  .footer__hotline,
  .footer__link--desc {
    @apply hidden;
  }

  .footer__main,
  .footer__left {
    @apply flex-col-reverse;
  }

  .footer__right {
    @apply rounded-[0.46875rem] border border-[#eee] mx-[0.625rem];
  }

  .footer__document {
    @apply justify-between overflow-hidden pr-6;
  }

  .footer__document--bg {
    @apply -top-[2.875rem] -right-[9rem];
  }

  .footer__document--text {
    @apply p-[1.125rem_0_0_1.125rem];
  }

  .footer__document--text>p {
    @apply hidden;
  }

  .footer__document--img img,
  .footer__document--img {
    @apply w-[7.99363rem] h-[4.63394rem];
  }

  .footer__document--img img {
    @apply translate-y-0;
  }

  .footer__document--text h4 {
    @apply text-base font-normal leading-[150%] whitespace-nowrap mb-[0.3125rem];
  }

  .footer__document--bg-mb {
    @apply w-[23.4375rem] absolute block;
  }

  .footer__document--download {
    @apply max-w-[22.08475rem] h-[2.225rem] mb-[0.725rem];
  }

  .footer__document--download p {
    @apply pt-1 px-3 pb-0 text-white;
  }

  .footer__document--download-text {
    @apply text-[0.46769rem] font-normal leading-[0.56119rem];
  }

  .text.top {
    @apply pt-2;
  }

  .footer {
    @apply border-none;
  }

  .footer__link {
    @apply block;
  }

  .footer__link ul li {
    @apply border-t border-[#eee] border-b-0 py-[0.3125rem];
  }

  .footer__link ul li a {
    @apply my-[0.6875rem] mx-0 ml-[1.17188rem];
  }

  .footer__link li a::before,
  .footer__link li a::after,
  .footer__link-img {
    @apply hidden;
  }

  .footer__link nav {
    @apply pt-[1.625rem];
  }

  .footer__bg--left {
    @apply hidden;
  }

  .footer__logo {
    @apply flex p-[1.5rem_0.625rem_1.2rem] w-[23.2625rem] border-t border-b border-[#eee] bg-[#f5f7f9];
  }

  .footer__logo img {
    @apply p-0 w-[8.84069rem];
  }

  .footer__logo p {
    @apply mt-0 text-[#666d80] text-[0.625rem] font-normal leading-[0.8255rem] w-[11.41006rem];
  }

  .footer__copyright {
    @apply bg-[#f5f7f9] h-full w-full flex-col items-center justify-center py-[0.6875rem];
  }

  .footer__copyright p {
    @apply text-xs font-normal leading-6;
  }

  .footer__copyright>p {
    @apply -mt-[0.3125rem];
  }

  .footer__copyright--left p:first-child {
    @apply pr-[0.375rem];
  }

  .footer__copyright--left p:last-child {
    @apply ml-[0.375rem];
  }

  .footer__document--download:hover .footer__document--square {
    @apply animate-[rotate_big_mb_0.5s_linear_forwards];
  }

  .footer__document--square {
    @apply animate-[rotate_reset_mb_0.5s_linear_forwards];
  }

  .footer__document--download:hover img {
    @apply translate-x-[1.075rem];
  }

  .footer__document--download img {
    @apply mt-[0.8125rem] w-3 h-3;
  }

  .footer-blur-overlay {
    @apply bottom-[99.94%];
  }

  .footer__logo img {
    @apply p-0 m-0;
  }

  .footer__social {
    @apply hidden;
  }

  .footer__logo-brand {
    @apply flex justify-between items-center;
  }
}
</style>