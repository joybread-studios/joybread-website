import Image from 'next/image'
import Link from 'next/link'
import Button from './button'

export default function Header(){
	return (
<<<<<<< HEAD
		<div className='w-full h-fit flex justify-between items-center px-8'>
			<Image src='/JOYBREADLOGO.png' alt='joybread studios logo' height={300} width={300}/>
=======
		<div className='w-full h-fit absolute flex justify-between items-center pl-8 pr-4'>
			<Image src='/JOYBREADLOGO.png' alt='joybread studios logo' height={250} width={250}/>
>>>>>>> 3a121036d03b2956ea66a1b1562f2d1860bb2ed6
			<div className='w-1/4 flex justify-evenly items-center'>
				<Button href='#works'>Works</Button>
				<Button href='#about'>About</Button>
				<Button href='#hire-us' withBorder={true}>Hire Us</Button>
			</div>
		</div>
	)
}