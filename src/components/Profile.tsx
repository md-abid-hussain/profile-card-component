import pattern from '../assets/images/bg-pattern-card.svg'
import profileImage from '../assets/images/image-victor.jpg'
const Profile = () => {
    return (
        <div>
            <div className="h-[140px] min-w-[350px]" style={{ backgroundImage: `url(${pattern})` }}></div>
            <section>
                <figure>
                    <img src={profileImage} alt="profile-image" className='mx-auto rounded-full -translate-y-1/2 border-[4px]' />
                </figure>
            </section>
        </div>
    )
}

export default Profile