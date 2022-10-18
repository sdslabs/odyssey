import EventCard from "./EventCard";
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const data=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24] 

const Announcement=({})=>{
  function slideLeft(){
    var slider=document.getElementById('events')
    if(!slider){
      console.log("nai hua render")
      return
    }
    slider.scrollLeft= slider.scrollLeft-444.23
  }
   function slideRight(){
    var slider=document.getElementById('events')
    if(!slider){
      console.log("nai hua render")
      return
    }
    slider.scrollLeft= slider.scrollLeft+444.23
  }
  return(
    <div className="announcement">
      <h1>Announcement</h1>     

      <div className='anouncebox'>
      <MdChevronLeft onClick={()=>slideLeft()} size={480}/>
      <div className="events" id="events">
      {data.map((item)=>{
        return(
        <EventCard 
        date={item}
        key={item}
        heading={item}
        description={item}/>);
      })}
      </div>
      <MdChevronRight onClick={()=>slideRight()} size={480}/>
      </div>

    </div>
  );
}
export default Announcement