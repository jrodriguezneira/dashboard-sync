import React from 'react'

function CardPortrait({item}) {
  return (
    
       
              <div key={item.title} className="flex justify-between mt-4">
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{
                      color: item.iconColor,
                      backgroundColor: item.iconBg,
                    }}
                    className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className="text-md font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
                <p className={`text-${item.pcColor}`}>
                     {/* render stat value */}
                        {Object.entries(item).map(([key, value]) => {
                            if (["icon","iconBg","iconColor","pcColor","amount","title","desc"].includes(key)) return null;
                            return <span key={key}> {value}</span>
                        })}
                    </p>
              </div>
            


  )
}

export default CardPortrait
  
