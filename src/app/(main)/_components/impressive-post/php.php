<?php 
$categories = get_categories( array(
	'taxonomy'   => 'category',
	'hide_empty' => true, // chỉ lấy category có bài post
) );
$page = isset($_GET['pageds']) ? (int)$_GET['pageds'] : 1;
$category = isset($_GET['category']) ? sanitize_text_field($_GET['category']) : false;
$args = [
	'post_type' => 'post',
	'posts_per_page' => 5,
	'paged' => $page,
	'orderby' => 'date',
	'order' => 'DESC',
];
if (!empty($category)) {
	$args['tax_query'] = [[
		'taxonomy' => 'category',
		'field' => 'slug',
		'terms' => $category,
	]];
}
$query = new WP_Query($args);
$total = $query->found_posts;
$total_pages = $query->max_num_pages;
$current_page = $page;
$pagination_links = paginate_links([
	'base'      => '/blogs%_%',
	'format'    => '?pageds=%#%',
	'current'   => $current_page,
	'total'     => $total_pages,
	'type'      => 'array',
	'prev_text' => '',
	'next_text' => '',
]);


$impressive_post = get_field('impressive_post');
$impressive_post_title = $impressive_post['title'];
$discovery_link = $impressive_post['discovery_post'];
?>

<section id="impressive-post" class="relative w-full bg-white py-[4.25rem] z-10">
  <div class="w-[93.375rem] mx-auto">
    <div class="flex items-center justify-between mb-10">
      <h2 class="text-[2.875rem] leading-[4rem] font-normal text-[#0725b7]"><?php echo $impressive_post_title ?? ""; ?>
      </h2>
      <?php if ( !empty($discovery_link) && !empty($discovery_link['url']) ) :?>
      <a href="<?php echo $discovery_link['url'] ?>" class="vtc__link-detail">
        <custom-bordered-button-v2 color="#00d3d0" border-color="#000" border-line="rgb(134 132 132 / 10%)">
          <?php echo $discovery_link['title'] ?? ""; ?>
        </custom-bordered-button-v2>
      </a>
      <?php endif; ?>
    </div>
    <div class="relative mb-[0.9375rem]">
      <ul class="flex list-none border-b border-[#e6e6e6] overflow-x-auto scrollbar-hide">
        <li data-slug="all"
          class="flex-shrink-0 text-[#666d80] text-[0.875rem] font-bold leading-[170%] tracking-[-0.0225rem] cursor-pointer py-[0.375rem] <?= $category ? '' : 'text-[#1550e5]' ?>">
          <p class="mr-[1.94rem]">
            Tin tức mới nhất
          </p>
        </li>
        <?php if (!empty($categories)) { 
	foreach ($categories as $item) {
				?>
        <li data-slug="<?= $item->slug ?>"
          class="flex-shrink-0 text-[#666d80] text-[0.875rem] font-bold leading-[170%] tracking-[-0.0225rem] cursor-pointer py-[0.375rem] mr-[1.94rem] <?= $category === $item->slug ? 'text-[#1550e5]' : '' ?>">
          <p>
            <?= $item->name ?>
          </p>
        </li>
        <?php } } ?>
      </ul>
    </div>
    <div class="flex justify-between w-full">
      <?php if ($query->have_posts()) : 
			$first = true;
			while ($query->have_posts()) : $query->the_post();
			if ($first) : $first = false; ?>
      <!-- Bài viết lớn nhất -->
      <div
        class="flex-shrink-0 h-[29.4375rem] w-[47rem] relative bg-[#ccc] rounded-[1.25rem] shadow-[0px_11.187px_14.916px_-5.594px_rgba(18,18,18,0.03),0.932px_1.865px_7.458px_0px_rgba(248,248,248,0.06)_inset] backdrop-blur-[11.65329360961914px] overflow-hidden">
        <a href="<?php the_permalink(); ?>" class="relative w-full h-full">
          <article class="relative w-full h-full">
            <div class="relative w-full h-full">
              <?php if (has_post_thumbnail()) {
	the_post_thumbnail('full', ['class' => 'w-full h-full object-cover']);
} ?>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/54"></div>
            </div>
            <div class="absolute top-[19.17rem] left-[2.59rem] w-[40.75rem] z-5">
              <div
                class="text-[1.50038rem] leading-[1.90956rem] font-normal text-[#081d1a] mb-[0.3125rem] line-clamp-1">
                <?php the_title(); ?>
              </div>
              <p class="text-[1.09119rem] leading-[1.43713rem] text-[#666d80] line-clamp-1">
                <?= get_the_excerpt(); ?>
              </p>
            </div>
            <div class="absolute left-10 bottom-[3.25rem] z-5 text-[1.96719rem] leading-[1.72125rem] text-[#e6e8ea]">
              <?php echo get_the_date('m.Y'); ?>
            </div>
            <div
              class="absolute right-[1.475rem] bottom-[1.675rem] px-[2.87rem] pl-[4.5rem] z-5 flex items-center justify-center text-white text-[1.125rem] font-bold leading-[110%]">
              Xem chi tiết
            </div>
          </article>
        </a>
      </div>
      <!-- Bắt đầu danh sách bài viết nhỏ hơn -->
      <div class="grid grid-cols-2 gap-[0.8125rem] flex-shrink-0 w-[45.5625rem]">
        <?php else: ?>
        <a href="<?php the_permalink(); ?>"
          class="relative p-[1.29rem_1.25rem_1.21rem] rounded-[1.25rem] border border-[#e4e4e4] bg-white shadow-[0px_4px_24.4px_0px_rgba(0,0,0,0.04)] h-[14.375rem] flex flex-col justify-between overflow-hidden group hover:border-[#1550e5] transition-all duration-300">
          <article>
            <div
              class="absolute inset-0 w-full h-full opacity-0 scale-120 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
              <?php if (has_post_thumbnail()) {
	the_post_thumbnail('medium', ['class' => 'w-full h-full object-cover']);
} ?>
              <div class="absolute inset-0 bg-black/40"></div>
            </div>
            <div class="relative z-1 h-full w-full flex flex-col justify-between">
              <div
                class="text-[1.25rem] leading-[1.4375rem] text-[#081d1a] group-hover:text-white transition-colors duration-300">
                <?php the_title(); ?>
              </div>
              <div class="flex items-end justify-between pt-[0.625rem] border-t border-[#e8e8e8]">
                <div
                  class="text-[1.875rem] leading-[1.72125rem] text-[#e6e8ea] group-hover:text-white transition-colors duration-300">
                  <?php echo get_the_date('m.Y'); ?>
                </div>
                <span
                  class="text-[#1550e5] text-base leading-[1.39rem] group-hover:text-white transition-colors duration-300">Xem
                  chi tiết</span>
              </div>
            </div>
          </article>
        </a>
        <?php endif; ?>
        <?php endwhile; ?>
      </div>
      <?php wp_reset_postdata(); endif; ?>
    </div>
    <div id="loading" class="grid grid-cols-4 grid-rows-2 w-full h-[29.53rem] gap-[0.8125rem]">
      <div
        class="rounded-[1.25rem] bg-gradient-to-r from-[#e0e0e0] via-[#f0f0f0] to-[#e0e0e0] bg-[length:200%_100%] animate-[shimmer_1.2s_infinite]">
      </div>
      <div
        class="rounded-[1.25rem] bg-gradient-to-r from-[#e0e0e0] via-[#f0f0f0] to-[#e0e0e0] bg-[length:200%_100%] animate-[shimmer_1.2s_infinite]">
      </div>
      <div
        class="rounded-[1.25rem] bg-gradient-to-r from-[#e0e0e0] via-[#f0f0f0] to-[#e0e0e0] bg-[length:200%_100%] animate-[shimmer_1.2s_infinite]">
      </div>
      <div
        class="rounded-[1.25rem] bg-gradient-to-r from-[#e0e0e0] via-[#f0f0f0] to-[#e0e0e0] bg-[length:200%_100%] animate-[shimmer_1.2s_infinite]">
      </div>
      <div
        class="rounded-[1.25rem] bg-gradient-to-r from-[#e0e0e0] via-[#f0f0f0] to-[#e0e0e0] bg-[length:200%_100%] animate-[shimmer_1.2s_infinite]">
      </div>
    </div>
    <div class="hidden sm:flex items-center justify-between w-full px-3 mt-6">
      <div class="flex items-center">
        <button
          class="flex w-8 h-8 justify-center items-center rounded-full bg-[rgba(194,194,194,0.2)] mr-[0.44444rem]">
          <img src="<?= get_template_directory_uri().'/template-parts/font-page/assets/images/prev-btn.svg'?>" alt=""
            class="w-[1.11113rem] h-[1.11113rem] flex-shrink-0" />
        </button>
        <button class="flex w-8 h-8 justify-center items-center rounded-full bg-[rgba(194,194,194,0.2)]">
          <img src="<?= get_template_directory_uri().'/template-parts/font-page/assets/images/next-btn.svg'?>" alt=""
            class="w-[1.11113rem] h-[1.11113rem] flex-shrink-0" />
        </button>
      </div>
      <?php if ( !empty($discovery_link) && !empty($discovery_link['url']) ) :?>
      <a href="<?php echo $discovery_link['url'] ?>" class="vtc__link-detail">
        <custom-bordered-button-v2 color="#00d3d0" border-color="#000" border-line="rgb(134 132 132 / 10%)">
          <?php echo $discovery_link['title'] ?? ""; ?>
        </custom-bordered-button-v2>
      </a>
      <?php endif; ?>
    </div>
  </div>
</section>

<template id="template-post-card-biggest">
  <a href="" class="relative w-full h-full">
    <article class="relative w-full h-full">
      <div class="relative w-full h-full">
        <img width="800" height="500" src="" class="w-full h-full object-cover" alt="" decoding="async"
          fetchpriority="high">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/54"></div>
      </div>
      <div class="absolute top-[19.17rem] left-[2.59rem] w-[40.75rem] z-5">
        <h4 class="text-[1.50038rem] leading-[1.90956rem] font-normal text-[#081d1a] mb-[0.3125rem] line-clamp-1"></h4>
        <p class="text-[1.09119rem] leading-[1.43713rem] text-[#666d80] line-clamp-1"></p>
      </div>
      <div class="absolute left-10 bottom-[3.25rem] z-5 text-[1.96719rem] leading-[1.72125rem] text-[#e6e8ea]"></div>
      <div
        class="absolute right-[1.475rem] bottom-[1.675rem] px-[2.87rem] pl-[4.5rem] z-5 flex items-center justify-center text-white text-[1.125rem] font-bold leading-[110%]">
        Xem chi tiết
      </div>
    </article>
  </a>
</template>
<template id="template-post-card-normal">
  <a href="/"
    class="relative p-[1.29rem_1.25rem_1.21rem] rounded-[1.25rem] border border-[#e4e4e4] bg-white shadow-[0px_4px_24.4px_0px_rgba(0,0,0,0.04)] h-[14.375rem] flex flex-col justify-between overflow-hidden group hover:border-[#1550e5] transition-all duration-300">
    <article>
      <div
        class="absolute inset-0 w-full h-full opacity-0 scale-120 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
        <img width="400" height="250" src="" class="w-full h-full object-cover" alt="" decoding="async"
          fetchpriority="high">
        <div class="absolute inset-0 bg-black/40"></div>
      </div>
      <div class="relative z-1 h-full w-full flex flex-col justify-between">
        <h4
          class="text-[1.25rem] leading-[1.4375rem] text-[#081d1a] group-hover:text-white transition-colors duration-300">
        </h4>
        <div class="flex items-end justify-between pt-[0.625rem] border-t border-[#e8e8e8]">
          <div
            class="text-[1.875rem] leading-[1.72125rem] text-[#e6e8ea] group-hover:text-white transition-colors duration-300">
          </div>
          <span
            class="text-[#1550e5] text-base leading-[1.39rem] group-hover:text-white transition-colors duration-300">Xem
            chi tiết</span>
        </div>
      </div>
    </article>
  </a>
</template>