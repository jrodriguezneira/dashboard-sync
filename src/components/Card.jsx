import React from 'react'

const Card = ({item}) => {
  return (
   
                        
        <div className="bg-white flex-1 h-30 dark:text-gray-200 dark:bg-secondary-dark-bg p-4 bg-white rounded-2xl shadow-lg">
            <div className="flex justify-end">
            <div
                className="w-12 h-12 flex items-center justify-center rounded-full"
                style={{ backgroundColor: item.iconBg, color: item.iconColor }}
            >
                {item.icon}
            </div>
            </div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            {/* <p className="text-xl">{item.amount}</p> */}
            

            {/* render stat value */}
            {Object.entries(item).map(([key, value]) => {
                if (["icon","iconBg","iconColor","pcColor","amount","title","percentage"].includes(key)) return null;
                return <p key={key}> {value}</p>
            })}
            {/* <p key={key}> {value}</p> */}

        </div>
  )
}

export default Card