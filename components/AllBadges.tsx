import { FC } from 'react'
import { Badges } from '@/data/config'

interface AllBadgesProps {

}

const AllBadges: FC<AllBadgesProps> = ({ }) => {
  return (
    <div>
      <div className="mx-auto flex flex-wrap items-center justify-center gap-1">
        {
          Badges.map(({ emoji, label }) => {
            return (
              <div key={label} className="border-banner flex select-none flex-row items-center justify-center space-x-1 rounded-full border px-2 py-1">
                <span className="w-5">{emoji}</span>
                <span className="text-banner text-xs">{label}</span>
              </div>
            )
          }
          )
        }
      </div>
    </div>
  )
}

export default AllBadges