import React from 'react'

const ExperienceCard = ({ companyName, position, startDate, endDate, description, iconUrl }) => {
    const cardClasses = "p-6 hover:shadow-xl rounded-lg w-full bg-white/75 border border-slate-200 shadow-sm shadow-slate-300/50 min-h-20 hover:scale-103 transition-all duration-300"
 
    return (
    <div className="flex flex-col sm:flex-row items-center sm:gap-6">

        <div className="text-slate-600 font-semibold w-32 text-center">
            <img src={iconUrl} alt={`${companyName} logo`} className="w-8 h-8 mx-auto mb-2" />
            
        </div>
        <div className={cardClasses}>
            <div className="text-slate-800 font-extrabold">{position}</div>
            <div className="text-slate-800 font-semibold text-sm">{companyName} / <span className='font-normal'>{startDate} - {endDate}</span></div>
            <div className="text-slate-600 text-sm">
            Desarrollador software junior fullstack en <strong>{companyName}</strong>, participando en el desarrollo y mantenimiento de aplicaciones web.
            </div>
        </div>
      </div>
  )
}

export default ExperienceCard