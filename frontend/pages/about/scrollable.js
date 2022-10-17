import AboutTop from '../../components/AboutTop';
import MemberCards from '../../components/MemberCard';

export default function Home() {
  return (
    <div>
        <AboutTop />
        <div className='about'>
            <p>Designers</p>
            <div className='members'>
            <div className='member'><MemberCards imgsource={'/ok.jpg'} name="urmom"/></div>
            <div className='member'><MemberCards imgsource={'/ok.jpg'} name="urmom"/></div>
            <div className='member'><MemberCards imgsource={'/ok.jpg'} name="urmom"/></div>
            <div className='member'><MemberCards imgsource={'/ok.jpg'} name="urmom"/></div>
            <div className='member'><MemberCards imgsource={'/ok.jpg'} name="urmom"/></div>
            </div>
        </div>
        <div className='about'>
            <p>Developers</p>
            <div className='members'>
            <div className='member'><MemberCards imgsource={'/ok.jpg'} name="urmom"/></div>
            <div className='member'><MemberCards imgsource={'/ok.jpg'} name="urmom"/></div>
            <div className='member'><MemberCards imgsource={'/ok.jpg'} name="urmom"/></div>
            <div className='member'><MemberCards imgsource={'/ok.jpg'} name="urmom"/></div>
            </div>
        </div>
        <div className='about'>
            <p>Mentors</p>
            <div className='members'>
            <div className='member'><MemberCards imgsource={'/ok.jpg'} name="urmom"/></div>
            <div className='member'><MemberCards imgsource={'/ok.jpg'} name="urmom"/></div>
            <div className='member'><MemberCards imgsource={'/ok.jpg'} name="urmom"/></div>
            <div className='member'><MemberCards imgsource={'/ok.jpg'} name="urmom"/></div>
            </div>
        </div>
    </div>
  );
}
