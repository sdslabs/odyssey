import EventCard from "./EventCard";
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const data=[1,2,3,4,5,6,7,8,9,10,11,12,13,14] 

const Announcement=({})=>{
  const slideLeft = () =>{
    var slider=document.getElementById('scroll-announce')
    slider.scrollLeft= slider.scrollLeft-500
  }
  const slideRight = () =>{
    var slider=document.getElementById('scroll-announce')
    slider.scrollLeft= slider.scrollLeft+500
  }
  return(
    <div className="announcement">
      <h1>Announcement</h1>
      <MdChevronLeft onClick={slideLeft()} size={480}/>
      <div className='scroll-announce'>
      {data.map((item)=>{
        return(
        <EventCard 
        date={item}
        key={item}
        heading={item}
        description={item}/>);
      })}
      </div>
      <MdChevronRight onClick={slideRight()} size={480}/>

    </div>
  );
}
export default Announcement