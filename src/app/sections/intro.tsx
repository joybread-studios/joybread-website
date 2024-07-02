import Image from 'next/image'
import Marquee from 'react-fast-marquee'

export default function Intro(){
    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <Image src='/JOYBREADLOGO.png' alt='joybread studios logo' height={250} width={250} className='absolute'/>
            <div className='relative w-screen h-3/5'>
                <Marquee className='relative w-full h-full -z-10' autoFill={true}>
                    <Image src='/image 1.png' alt='placeholder' height={600} width={600} className='blur-sm object-contain'/>
                    <Image src='/image 3.png' alt='placeholder 2' height={400} width={400} className='blur-sm object-contain'/>
                </Marquee>
            </div>
        </div>
    )
}