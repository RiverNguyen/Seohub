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
    <div className='relative mb-[0.9375rem]'>
      <ul className='flex list-none border-b border-[#e6e6e6] overflow-x-auto scrollbar-hide'>
        <li
          data-slug='all'
          onClick={() => onCategoryClick('all')}
          className={cn(
            'flex-shrink-0 text-[0.875rem] font-bold leading-[170%] tracking-[-0.0225rem] cursor-pointer py-[0.375rem]',
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
              'flex-shrink-0 text-[0.875rem] font-bold leading-[170%] tracking-[-0.0225rem] cursor-pointer py-[0.375rem] mr-[1.94rem]',
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
