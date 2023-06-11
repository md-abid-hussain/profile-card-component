
import { User } from "../assets/data/data";
const About = (prop: any) => {
    const data: User = prop.data
    const { name, age, location, followers, likes, photos } = data;
    console.log(name)
    return (
        <section className="text-center mt-7 ">
            <h1 className="font-bold text-[#2d3248]">{name} <span className="font-normal text-[#969696]">{age}</span></h1>
            <p className="text-base mt-[14px] mb-[26px]">{location}</p>
            <div className="flex border-t-2 py-7 ">
                <section className="flex-1 flex flex-col-reverse">
                    <h2 className="text-sm">Followers</h2>
                    <p className="font-bold text-[#2d3248]">{followers}</p>
                </section>
                <section className="flex-1 flex flex-col-reverse">
                    <h2 className="text-sm">Likes</h2>
                    <p className="font-bold text-[#2d3248]">{likes}</p>
                </section>
                <section className="flex-1 flex flex-col-reverse">
                    <h2 className="text-sm">Photos</h2>
                    <p className="font-bold text-[#2d3248]">{photos}</p>
                </section>
            </div>
        </section>
    )
}

export default About