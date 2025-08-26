import React from 'react'

const Card = ({item}) => {
  return (
   
                        
        <div className="bg-white h-34 dark:text-gray-200 dark:bg-secondary-dark-bg w-1/5 p-4 pt-9 rounded-2xl">

            <div
                className="w-10 h-10 flex items-center justify-center rounded-full"
                style={{ backgroundColor: item.iconBg, color: item.iconColor }}
            >
                {item.icon}
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