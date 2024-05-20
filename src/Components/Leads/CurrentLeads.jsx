import React from 'react'
import Card from './Card'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import president_img from './CSI Leads/president.png'
import vice_president_img from './CSI Leads/vicePresident.png'
import executive from './CSI Leads/executive.png'
import co_executive from './CSI Leads/co-executive.png'
import mgmtLead from './CSI Leads/mgntLead.png'
import mgmtLead_coLead from './CSI Leads/mgmt_co_lead.png'
import mgmgtLeadII from './CSI Leads/mgmtCo_leadII.png'
import eventLead from './CSI Leads/event_mgmt_lead.png'
import eventLeadII from './CSI Leads/eventMgmtLeadII.png'
import anchor from './CSI Leads/anchor.png'
import treasurer from './CSI Leads/treasurer.png'
const CurrentLeads = ({mode, handleMode}) => {
  return (
   <div className={`flex flex-col ${mode
    ? 'bg-[#D9EBFF] text-[#0F232A]'
    : 'text-[#C9DBEE] bg-[#112A46]'}`}>
    <div className={mode
      ? 'bg-[#D9EBFF] text-[#0F232A]'
      : 'text-[#C9DBEE] bg-[#112A46]'}>
        <NavBar
				mode={mode}
				handleMode={handleMode}
		/>
    </div>
         <div className={`flex flex-col justify-center items-center gap-4 ${mode
        ? 'bg-[#D9EBFF] text-[#0F232A]'
        : 'text-[#C9DBEE] bg-[#112A46]'}`}>
        <p>Top 4</p>
        <div className='flex flex-wrap justify-center items-center gap-8 '>
            <Card title="President" content="A quick brown fox jumps over the lazy dog" img_src={president_img}  />
            <Card title="Vice-President" content="A quick brown fox jumps over the lazy dog i guess the shit begins" img_src={vice_president_img}/>
        </div>

        <div className='flex flex-wrap justify-center items-center gap-8'>
            <Card title="Executive" content="A quick brown fox jumps over the lazy dog" img_src={executive}/>
            <Card title="Co-Executive" content="A quick brown fox jumps over the lazy dog i guess the shit begins" img_src={co_executive}/>
        </div>
        
        <p>Management Team</p>
        <div className='flex flex-wrap justify-center items-center gap-8'>
            <Card title="Executive" content="A quick brown fox jumps over the lazy dog" img_src={mgmtLead}/>
            <Card title="Co-Executive" content="A quick brown fox jumps over the lazy dog i guess the shit begins" img_src={mgmtLead_coLead}/>
            <Card title="Executive" content="A quick brown fox jumps over the lazy dog" img_src={mgmgtLeadII}/>
            <Card title="Co-Executive" content="A quick brown fox jumps over the lazy dog i guess the shit begins" img_src={eventLead}/>
            <Card title="Co-Executive" content="A quick brown fox jumps over the lazy dog i guess the shit begins" img_src={eventLeadII}/>
            <Card title="Executive" content="A quick brown fox jumps over the lazy dog" img_src={anchor}/>
            <Card title="Co-Executive" content="A quick brown fox jumps over the lazy dog i guess the shit begins" img_src={treasurer}/>
        </div>

        <p>Social Team</p>
        <div className='flex flex-wrap justify-center items-center gap-8'>
            <Card title="Executive" content="A quick brown fox jumps over the lazy dog"/>
            <Card title="Co-Executive" content="A quick brown fox jumps over the lazy dog i guess the shit begins"/>
        </div>

        <p>Content Team</p>
        <div className='flex flex-wrap justify-center items-center gap-8'>
            <Card title="Executive" content="A quick brown fox jumps over the lazy dog"/>
            <Card title="Co-Executive" content="A quick brown fox jumps over the lazy dog i guess the shit begins"/>
        </div>


        <p>Creative Team</p>
        <div className='flex flex-wrap  justify-center items-center gap-8'>
            <Card title="Executive" content="A quick brown fox jumps over the lazy dog"/>
            <Card title="Co-Executive" content="A quick brown fox jumps over the lazy dog i guess the shit begins"/>
            <Card title="Executive" content="A quick brown fox jumps over the lazy dog"/>
            <Card title="Co-Executive" content="A quick brown fox jumps over the lazy dog i guess the shit begins"/>
        </div>


        <p>Public Relation</p>
        <div className='flex flex-wrap justify-center items-center gap-8'>
            <Card title="Executive" content="A quick brown fox jumps over the lazy dog"/>
            <Card title="Co-Executive" content="A quick brown fox jumps over the lazy dog i guess the shit begins"/>
        </div>


        <p>Mentors</p>
        <div className='flex flex-wrap justify-center items-center gap-8'>
            <Card title="Executive" content="A quick brown fox jumps over the lazy dog"/>
            <Card title="Co-Executive" content="A quick brown fox jumps over the lazy dog i guess the shit begins"/>
        </div>

        <p>Photography</p>
        <div className='flex flex-wrap justify-center items-center gap-8'>
            <Card title="Executive" content="A quick brown fox jumps over the lazy dog"/>
            <Card title="Co-Executive" content="A quick brown fox jumps over the lazy dog i guess the shit begins"/>
        </div>

        <p>Technical Team</p>
        <div className='flex flex-wrap justify-center items-center gap-8 mb-8'>
            <Card title="Executive" content="A quick brown fox jumps over the lazy dog"/>
            <Card title="Co-Executive" content="A quick brown fox jumps over the lazy dog i guess the shit begins"/>
            <Card title="Executive" content="A quick brown fox jumps over the lazy dog"/>
            <Card title="Co-Executive" content="A quick brown fox jumps over the lazy dog i guess the shit begins"/>
            <Card title="Co-Executive" content="A quick brown fox jumps over the lazy dog i guess the shit begins"/>
            <Card title="Executive" content="A quick brown fox jumps over the lazy dog"/>
            
        </div>
    </div>
    <div className={` pt-4 ${mode
      ? 'bg-[#112A46] text-[#0F232A]'
      : 'text-[#C9DBEE] bg-[#D9EBFF]'}`}>
		<Footer mode={mode}/>
	  </div>

   </div>
  )
}

export default CurrentLeads