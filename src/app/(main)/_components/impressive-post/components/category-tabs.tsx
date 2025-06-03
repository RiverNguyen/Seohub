'use client'

import {cn} from '@/lib/utils'
import {Category} from '@/types/category.interface'

interface CategoryTabsProps {
  categories: Category[]
  selectedCategory: string
  onCategoryClick: (slug: string) => void
}

const CategoryTabs = ({
  categories,
  selectedCategory,
  onCategoryClick,
}: CategoryTabsProps) => {
  const categoriesHavePosts = categories.filter(
    (category: Category) => category.count > 0,
  )

  return (
    <div className='relative mb-[0.9375rem] xsm:overflow-hidden xsm:w-full'>
      <ul className='flex list-none border-b border-[#e6e6e6] overflow-x-auto hidden_scroll xsm:pl-[0.75rem] xsm:after:content-[""] xsm:after:absolute xsm:after:top-0 xsm:after:right-0 xsm:after:w-[10rem] xsm:after:h-[2rem] xsm:after:bg-gradient-to-r xsm:after:from-transparent xsm:after:to-[#fff]'>
        <li
          data-slug='all'
          onClick={() => onCategoryClick('all')}
          className={cn(
            'flex-shrink-0 text-[0.875rem] font-bold leading-[170%] tracking-[-0.0225rem] cursor-pointer py-[0.375rem] xsm:mb-body-12',
            selectedCategory === 'all' ? 'text-[#1550e5]' : 'text-[#666d80]',
          )}
        >
          <p className='mr-[1.94rem]'>Tin tức mới nhất</p>
        </li>
        {categoriesHavePosts.map((item: Category) => (
          <li
            key={item.id}
            data-slug={item.slug}
            onClick={() => onCategoryClick(item.slug)}
            className={cn(
              'flex-shrink-0 text-[0.875rem] font-bold leading-[170%] tracking-[-0.0225rem] cursor-pointer py-[0.375rem] mr-[1.94rem] xsm:mb-body-12 xsm:mr-[1.525rem]',
              selectedCategory === item.slug
                ? 'text-[#1550e5]'
                : 'text-[#666d80]',
            )}
          >
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CategoryTabs
