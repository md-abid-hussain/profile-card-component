import pattern from '../assets/images/bg-pattern-card.svg'
import profileImage from '../assets/images/image-victor.jpg'
import data from '../assets/data/data'
import About from './About'

const Profile = () => {
    return (
        <div className="shadow-md rounded-lg bg-white">
            <div className="h-[140px] min-w-[350px] rounded-t-lg" style={{ backgroundImage: `url(${pattern})` }}></div>
            <section>
                <figure className=' -mt-[52px] '>
                    <img src={profileImage} alt="profile-image" className='mx-auto rounded-full border-[4px] border-white' />
                </figure>
                <About data={data} />
            </section>
        </div>
    )
}

export default Profile