import Image from 'next/image'
import Link from 'next/link'
import Button from './button'

export default function Header(){
	return (
		<div className='w-full h-fit flex justify-between items-center px-8'>
			<Image src='/JOYBREADLOGO.png' alt='joybread studios logo' height={300} width={300}/>
			<div className='w-1/4 flex justify-evenly items-center'>
				<Button href='#works'>Works</Button>
				<Button href='#about'>About</Button>
				<Button href='#hire-us' withBorder={true}>Hire Us</Button>
			</div>
		</div>
	)
}